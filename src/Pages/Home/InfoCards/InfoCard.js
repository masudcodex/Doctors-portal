import React from 'react';
const InfoCard = ({card}) => {
    const {name, description, icon, bgClass} = card;
    return (
        <div className={`card md:card-side ${bgClass} mx-6 my-12 shadow-sm text-white`}>
            <figure className='ml-6 mt-6 md:mt-0'><img src={icon} alt=""/></figure>
            <div className="card-body items-center md:item-left">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;