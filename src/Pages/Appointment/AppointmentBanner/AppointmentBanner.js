import React from 'react';
import bgImage from '../../../assets/images/bg.png';
import image from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    
    return (
        <div className="hero" style={{ backgroundImage: `url("${bgImage}")` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={image} alt="Dentist Chair" className='lg:w-1/2 md:px-9 md:py-20'/>
                <div className='card shadow-xl mx-13 mt-5 md:mt-0'>
                    <DayPicker 
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;