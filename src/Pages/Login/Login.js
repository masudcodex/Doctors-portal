import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();
    const {signInUser} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [token] = useToken(loginUserEmail);
    if (token) {
        navigate(from, {replace: true});
    }



    const handleLogin = data => {
        setLoginError('')
        signInUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setLoginUserEmail(data.email);
        })
        .catch(error=> {
            console.error(error.message)
            setLoginError(error.message)
        })
    }
    return (
        <div className='flex justify-center items-center'>
            <div className='shadow-xl p-7 w-96'>
                <h2 className='text-3xl font-semibold text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" 
                        {...register("email", {required: "Email Address is required"})}
                        area-invalid={errors.mail ? "true" : "false"}
                        className="input input-sm input-bordered w-full" 
                        />
                         {errors.email && <p role="alert" className='text-red-500 text-sm mt-2 ml-1'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {value: 6, message: "Password must be 6 characters or longer"}
                        })}
                        area-invalid={errors.password ? "true" : "false"}
                        className="input input-sm input-bordered w-full" 
                        />
                        {errors.password && <p role="alert" className="text-red-500 text-sm mt-2 ml-1">{errors.password?.message}</p>}
                    </div>
                    <label className="label"><span className="label-text mb-3">Forget password?</span></label>
                    <input className='btn btn-sm btn-accent w-full text-white' value="Login" type="submit" />
                    {loginError && <p className='text-red-600 text-sm'>{loginError}</p>}
                </form>
                <p className='text-center text-sm mt-3'>New to Doctors Portal? <Link to="/signup" className='text-secondary'>Create new account.</Link></p>
                <div className="divider font-semibold">OR</div>
                <Link className='btn btn-outline btn-sm w-full'>Continue with Google</Link>
            </div>
        </div>
    );
};

export default Login;