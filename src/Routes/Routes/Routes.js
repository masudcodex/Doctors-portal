import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../Layout/DashboardLayout';
import Main from '../../Layout/Main';
import Appointment from '../../Pages/Appointment/Appointment/Appointment';
import AddDoctor from '../../Pages/Dashboard/AddDoctor/AddDoctor';
import AllUsers from '../../Pages/Dashboard/AllUsers/AllUsers';
import Dashboard from '../../Pages/Dashboard/Dashboard/Dashboard';
import ManageDoctors from '../../Pages/Dashboard/ManageDoctors/ManageDoctors';
import MyAppointments from '../../Pages/Dashboard/MyAppointments/MyAppointments';
import Payment from '../../Pages/Dashboard/Payment/Payment';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import SignUp from '../../Pages/SignUp/SignUp';
import DisplayError from '../../Shared/DisplayError/DisplayError';
import AdminRoute from '../AdminRoute/AdminRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                errorElement: <DisplayError></DisplayError>,
                element: <PrivateRoute><MyAppointments></MyAppointments></PrivateRoute>
            },
            {
                path: '/dashboard/users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                loader: ({params})=> fetch(`http://localhost:5000/bookings/${params.id}`), 
                element: <AdminRoute><Payment></Payment></AdminRoute>
            }
        ]
    }
])


export default router;