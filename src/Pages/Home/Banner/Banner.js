import React from 'react';
import bgimage from '../../../assets/images/bg.png';
import image from '../../../assets/images/chair.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
const Banner = () => {
    return (
        <div className="hero" style={{ backgroundImage: `url("${bgimage}")` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={image} alt=" " className='lg:w-1/2 md:px-9 md:py-20'/>
                <div className='mx-13 mt-5 md:mt-0'>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;