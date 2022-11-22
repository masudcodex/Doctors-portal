import React from 'react';

const ServiceCard = ({service}) => {
    const {name, image, description} = service;
    return (
        <div className="card mx-6 my-12 shadow-xl text-neutral">
            <figure className=''><img src={image} className="w-15" alt=""/></figure>
            <div className="card-body items-center font-semibold">
                <h2 className="card-title">{name}</h2>
                <p className='text-center'>{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;