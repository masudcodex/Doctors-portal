import { useQuery } from '@tanstack/react-query';
import React, { useReducer } from 'react';
import toast, { ToastBar } from 'react-hot-toast';

const AllUsers = () => {
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async()=> {
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json();
            return data;
    }
    })

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`,{
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=> {
            if(data.modifiedCount > 0){
                toast.success('Admin role has been updated');
                refetch();
            }
        })
    }
    return (
        <div>
            <h2 className="text-3xl">All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Admin</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user, i)=> 
                        <tr key={user._id} className='hover'>
                        <th>{i+1}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role !== 'admin' && <button onClick={()=>handleMakeAdmin(user._id)} className='btn btn-xs btn-primary text-white'>Make Admin</button>}</td>
                        <td><button className='btn btn-xs btn-error text-white'>Delete</button></td>
                    </tr>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;