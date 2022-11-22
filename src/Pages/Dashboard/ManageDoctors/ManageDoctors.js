import { useQuery } from '@tanstack/react-query';
import { de } from 'date-fns/locale';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../../Shared/ConfirmationModal/ConfirmationModal';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const closeModal = () => {
        setDeletingDoctor(null);
    }
    
    const {data: doctors, refetch} = useQuery({
        queryKey: ['doctors'],
        queryFn: async()=>{
            try {
                const res = await fetch('http://localhost:5000/doctors',{
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = await res.json();
                return data;
            } catch (error) {
                console.log(error);
            }
        }
    })
    const handleDeleteDoctor = doctor => {
        fetch(`http://localhost:5000/doctors/${doctor._id}`,{
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=> res.json())
        .then(data=> {
            if (data.deletedCount > 0) {
                toast.success(`Doctor ${doctor.name} deleted successfully`)
                refetch();
            }
        })

    }
    return (
        <div>
            <h2 className="text-3xl ml-8 mb-4">Manage Doctors {doctors?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Specialty</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {doctors?.map((doctor, i)=> 
                        <tr key={doctor._id}>
                            <th>{i+1}</th>
                            <td className='avatar'><div className='w-16 rounded-full'><img src={doctor.image} alt=""/></div></td>
                            <td>{doctor.name}</td>
                            <td>{doctor.email}</td>
                            <td>{doctor.specialty}</td>
                            <td>
                                <label onClick={()=> setDeletingDoctor(doctor)} htmlFor="confirm-modal" className="btn btn-sm btn-error text-white'">Delete</label>
                            </td>
                        </tr>
                        )}
                    
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <ConfirmationModal
                title= {`Are you sure your want to delete ${deletingDoctor.name}?`}
                message = {`This action can not be undone`}
                successAction = {handleDeleteDoctor}
                modalData = {deletingDoctor}
                successButtonName = "Delete"
                closeModal = {closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;