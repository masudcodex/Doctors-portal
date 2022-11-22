import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const {createUser, updateUser} = useContext(AuthContext);
    const [signupError, setSignupError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();
    if (token) {
        navigate('/');
    }
    const handleRegister = data => {
        setSignupError('')
        createUser(data.email, data.password)
        .then(result=> {
            const user = result.user;
            console.log(user);
            toast.success("Registration Successful");
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
            .then(()=>{
                saveUser(data.name, data.email);
            })
            .catch(error=> {
                console.error(error)
                
            })
        })
        .catch(error=> {
            console.error(error);
            setSignupError(error.message);
        })
    }
    const saveUser = (name, email)=>{
        const user = {name, email};
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=> {
            setCreatedUserEmail(email);
            
        })
    }

    return (
        <div className='flex justify-center items-center'>
            <div className='shadow-xl p-7 w-96'>
                <h2 className='text-3xl font-semibold text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleRegister)}>
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
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" 
                        {...register("password", {
                            required: "Password is required",
                            minLength: {value: 6, message: "Password must contain at least 6 characters"},
                            pattern: {value: /(?=.*[a-z])(?=.*[A-Z])/, message: "Password should contain one Capital and one small character"},
                        })}
                        area-invalid={errors.password ? "true" : "false"}
                        className="input input-sm input-bordered w-full" 
                        />
                        {errors.password && <p role="alert" className="text-red-600 mt-1 ml-1 text-sm">{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-sm btn-accent w-full text-white mt-5 text-sm' value="Signup" type="submit" />
                    {signupError && <p className='text-red-600 text-sm'>{signupError}</p>}
                </form>
                <p className='text-center text-sm mt-3'>Already have an account? <Link to="/login" className='text-secondary'>login here.</Link></p>
                <div className="divider font-semibold">OR</div>
                <Link className='btn btn-outline btn-sm w-full'>Continue with Google</Link>
            </div>
        </div>
    );
};

export default SignUp;