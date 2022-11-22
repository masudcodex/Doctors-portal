import React from 'react';
import AppointmentHome from '../AppointmentHome/AppointmentHome';
import Banner from '../Banner/Banner';
import HomeContact from '../HomeContact/HomeContact';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
          <Banner></Banner>
          <InfoCards></InfoCards>
          <Services></Services>
          <AppointmentHome></AppointmentHome>
          <Testimonial></Testimonial>
          <HomeContact></HomeContact>
        </div>
    );
};

export default Home;