import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const DisplayError = () => {
    const {logOut} = useContext(AuthContext);
    const navigate = useNavigate();


    const handleLogout=()=>{
        logOut()
        .then(()=>{
            navigate('/login')
        })
        .catch(error=>console.error(error))
    }

    const error = useRouteError();
    return (
        <div>
            <p className="text-red-600">Something went wrong!</p>
            <p className='text-red-500'>{error.statusText || error.message}</p>
            <h3 className="text-2xl">Please <button onClick={handleLogout}>Sign out</button> and Login again</h3>
        </div>
    );
};

export default DisplayError;