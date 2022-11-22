import React from 'react';
import doctor from '../../../assets/images/doctor-small.png';
import bgImage from '../../../assets/images/appointment.png';  
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const AppointmentHome = () => {
    return (
        <section className='mt-32' style={{background: `url(${bgImage})`}}>
            <div className="hero my-7">
                <div className="hero-content flex-col lg:flex-row pb-0">
                    <img src={doctor} className="-mt-32 hidden lg:block lg:w-1/2 rounded-lg shadow-2xl" alt=''/>
                    <div>
                    <h2 className='text-xl font-bold text-primary mb-3'>Appointment</h2>
                    <h3 className="text-4xl font-semibold text-white">Make an appointment Today</h3>
                    <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentHome;