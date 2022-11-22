import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='text-center min-h-screen flex align-middle justify-center items-center'>
            <button className="btn loading btn-secondary text-white">loading</button>
        </div>
    }

    if (!user) {
        return <Navigate to="/login" state={{from: location}} replace />;
    }
    return children;
};

export default PrivateRoute;