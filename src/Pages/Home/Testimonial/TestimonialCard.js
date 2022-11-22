import React from 'react';

const TestimonialCard = ({test}) => {
    const {name, location, description, img} = test;
    return (
        <div className="card mx-6 my-12 shadow-xl text-neutral">
            <div className="card-body items-center font-semibold">
                <p className='text-center'>{description}</p>
            </div>
            <div className='flex justify-center items-center mb-8'>
                <figure className='mr-4 border-solid border-2 rounded-full border-primary'><img src={img} className="w-12" alt=""/></figure>
                <span className='font-semibold'>
                    <h2>{name}</h2>
                    <p>{location}</p>
                </span>
            </div>
        </div>
    );
};

export default TestimonialCard;