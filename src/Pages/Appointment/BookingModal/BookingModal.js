import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({treatment, selectedDate, setTreatment,refetch}) => {
    const {name, slots, price} = treatment;
    const date = format(selectedDate, 'PP');
    const {user} = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            appointmentDate: date,
            treatment: treatment.name,
            patient: name,
            slot,
            email,
            phone,
            price
        }
        fetch("http://localhost:5000/bookings", {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking) 
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            if(data.acknowledged){
                setTreatment(null);
                toast.success('Booking confirmed');
                refetch();
            }else{
                toast.error(data.message)
            }
        })
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">{name}</h3>
                <form onSubmit={handleBooking} className='mt-10'>
                    <input type="text" name="" defaultValue={date} className="input input-sm input-bordered w-full max-w-full mb-3" disabled/>
                    <select name='slot' className="select select-bordered select-sm w-full mb-3">
                        
                        {
                            slots.map((slot, index)=> <option key={index} value={slot}>{slot}</option>)
                        }
                    </select>
                    <input type="text" name="name" defaultValue={user?.displayName} placeholder="Your name" className="input input-sm input-bordered w-full max-w-full mb-3"/>
                    <input type="email" name="email" defaultValue={user?.email} placeholder="Your email" className="input input-sm input-bordered w-full max-w-full mb-3" disabled/>
                    <input type="text" name="phone" placeholder="Phone number" className="input input-sm input-bordered w-full max-w-full mb-3"/>

                    <input type="submit" value="Submit" className='btn btn-accent btn-sm w-full mt-3'/>
                </form>
            </div>
            </div>
        </>
    );
};

export default BookingModal;