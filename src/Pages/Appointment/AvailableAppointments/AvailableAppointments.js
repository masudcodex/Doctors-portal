import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({selectedDate}) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, "PP");

    const {data: appointmentOptions = [], refetch, isLoading} = useQuery({
        queryKey: ["appointmentOptions", date],
        queryFn: ()=> fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
        .then(res=> res.json())
    })
    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <section className='my-16'>
            <div>
                <p className='text-secondary font-semibold text-center'>Available Appointments on {format(selectedDate, 'PP')}</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointmentOptions.map(option=> <AppointmentOption 
                        key={option._id} 
                        option={option}
                        setTreatment={setTreatment}
                        ></AppointmentOption>)
                }
            </div>
            {treatment && 
            <BookingModal 
            treatment={treatment}
            setTreatment = {setTreatment}
            selectedDate = {selectedDate}
            refetch={refetch}
            >
            </BookingModal>}
        </section>
    );
};

export default AvailableAppointments;