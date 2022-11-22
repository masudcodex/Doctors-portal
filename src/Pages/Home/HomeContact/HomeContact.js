import React from 'react';
import bgImage from '../../../assets/images/appointment.png';


const HomeContact = () => {
    return (
        <div className='py-16' style={{backgroundImage: `url(${bgImage})`}}>
            <div className='text-center mb-10'>
                <h2 className='text-xl font-bold text-primary mb-3'>Contact Us</h2>
                <p className='text-3xl font-semibold text-white'>Stay connected with us</p>
            </div>
            <form className='w-4/5 md:w-1/2 lg:w-2/5 mx-auto'>
                <div className="form-control mb-3">
                    <input type="text" placeholder="Email Address" className="input input-bordered" />
                </div>
                <div className="form-control mb-3">
                    <input type="text" placeholder="Subject" className="input input-bordered" />
                </div>
                <div className="form-control mb-3">
                    <textarea name="textarea" className='textarea textarea-bordered' placeholder="Your Message" ></textarea>
                </div>
                <div className='text-center'>
                    <input type="submit" value="Submit" className='btn btn-primary text-white'/>
                </div>
            </form>
        </div>
    );
};

export default HomeContact;