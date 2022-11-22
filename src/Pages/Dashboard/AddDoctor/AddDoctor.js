import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const imgHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();

    const {data: specialties=[]} = useQuery({
        queryKey: ['specialty'],
        queryFn: async()=> {
            const res = await fetch('http://localhost:5000/doctorSpecialty')
            const data = await res.json();
            return data;
        }
    })


    const handleAddDoctor = data => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
        fetch(url, {
            method: "POST",
            body: formData
        })
        .then(res=>res.json())
        .then(imgData=> {
            if(imgData.success){
                console.log(imgData.data.url);
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    image: imgData.data.url
                }
                //Save doctors information to the database
                fetch('http://localhost:5000/doctors',{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res=>res.json())
                .then(result=>{
                    console.log(result);
                    toast.success(`${data.name} is added successfully!`);
                    navigate('/dashboard/managedoctors')
                })
            }
        })
    }
    return (
        <div className='min-h-screen pt-5' style={{backgroundColor: '#e5e7eb'}}>
            <h2 className="text-4xl ml-8">Add a doctor</h2>
            <div className='w-6/12 p-3 mt-5 bg-white border rounded-md ml-8'>
                <form onSubmit={handleSubmit(handleAddDoctor)}>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" 
                        {...register("name", {
                            required: "Name is required"
                        })} 
                        area-invalid={errors.name ? "true" : "false"}
                        className="input input-sm input-bordered w-full" 
                        />
                        {errors.name && <p role="alert" className="text-red-600 mt-1 ml-1 text-sm">{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" 
                        {...register("email", {
                            required: "Email address is required"
                        })} 
                        area-invalid={errors.email ? "true" : "false"}
                        className="input input-sm input-bordered w-full" 
                        />
                        {errors.email && <p role="alert" className="text-red-600 mt-1 ml-1 text-sm">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full mt-6">
                    <label className="label"><span className="label-text">Specialty</span></label>
                        <select 
                        {...register("specialty", {
                            required: "Specialty is required"
                        })}
                        className="select select-sm select-bordered w-full">
                            {
                                specialties.map(specialty=> 
                                    <option key={specialty._id} value={specialty.name}>{specialty.name}</option>
                                    )
                            }
                            
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Upload image</span></label>
                        <input type="file" 
                        {...register("img", {
                            required: "Image is required"
                        })} 
                        area-invalid={errors.img ? "true" : "false"}
                        className="input input-md w-full" 
                        />
                        {errors.img && <p role="alert" className="text-red-600 mt-1 ml-1 text-sm">{errors.img?.message}</p>}
                    </div>
                    <input className='btn btn-sm btn-accent w-full text-white mt-5 text-sm' value="Add doctor" type="submit" />
                    
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;