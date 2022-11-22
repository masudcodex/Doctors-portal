import React from 'react';
import image1 from '../../../assets/images/fluoride.png';
import image2 from '../../../assets/images/cavity.png';
import image3 from '../../../assets/images/whitening.png';
import serviceImage from '../../../assets/images/treatment.png';
import ServiceCard from './ServiceCard';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const ServiceCards = () => {
    const serviceCardData = [
        {
            id: 1,
            name: "Fluoride Treatment",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sapiente.",
            image: image1
        },
        {
            id: 2,
            name: "Cavity Filling",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sapiente.",
            image: image2
        },
        {
            id: 3,
            name: "Teeth Whitening",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sapiente.",
            image: image3
        },
    ]
    return (
        <div className='my-7'>
            <div className='text-center mb-7'>
                <h2 className='text-xl font-bold uppercase text-primary mb-3'>Our Service</h2>
                <p className='text-2xl font-semibold text-neutral'>Services We Provide</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    serviceCardData.map(service=> <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
            <div className="hero lg:w-10/12 mx-auto">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={serviceImage} className="lg:max-w-md rounded-lg" alt=''/>
                    <div className='lg:w-1/2 mx-20 text-neutral'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCards;