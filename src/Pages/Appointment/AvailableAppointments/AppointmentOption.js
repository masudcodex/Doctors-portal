import React from 'react';

const AppointmentOption = ({option, setTreatment}) => {
    const {name, slots, price} = option;
    return (
        <div className="card mx-6 my-12 shadow-xl text-neutral">
            <div className="card-body items-center font-semibold">
                <h2 className="card-title text-md text-primary">{name}</h2>
                <p className='text-sm mt-2'>
                    {slots?.length ? slots[0] : 'Try another day'}
                </p>
                <p className='text-sm'>
                    {slots.length} {slots.length > 1 ? 'spaces' : 'space'} available
                </p>
                <p className='text-sm'>Price: ${price}</p>
                <label 
                    disabled= {slots.length === 0}
                    onClick={()=> setTreatment(option)}
                    htmlFor="booking-modal" 
                    className="btn btn-primary uppercase text-white mt-4"
                    >Book Appointment
                </label>
            </div>
        </div>
    );
};

export default AppointmentOption;