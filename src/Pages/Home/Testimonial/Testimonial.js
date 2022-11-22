import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
    const testimonialData = [
        {
            id: 1,
            name: "Winson Herry",
            location: "California",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people1
        },
        {
            id: 2,
            name: "Marie Firmin",
            location: "California",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people2
        },
        {
            id: 3,
            name: "Bianca Flavia",
            location: "California",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people3
        }
    ]
    return (
        <section>
            <div className='flex justify-between mx-14 mb-22 items-center'>
                <span>
                    <h2 className='text-xl font-bold text-primary mb-3'>Testimonial</h2>
                    <p className='text-2xl font-semibold text-neutral'>What Our Patients Says</p>
                </span>
                <img src={quote} alt="" className='w-24 lg:w-40'/>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    testimonialData.map(test=> <TestimonialCard key={test.id} test={test}></TestimonialCard>)
                }
            </div>
        </section>
    );
};

export default Testimonial;