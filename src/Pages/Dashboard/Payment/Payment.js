import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import Loading from '../../../Shared/Loading/Loading';



const stripePromise = loadStripe(process.env.REACT_APP_stripepk);

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    const {price, appointmentDate, slot} = booking;
    if(navigation.state === 'loading'){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-3xl">Payment for {booking.treatment}</h2>
            <p className='text-md my-3'>Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
            <div className='w-96 my-12 p-8 border rounded-md'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm 
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;