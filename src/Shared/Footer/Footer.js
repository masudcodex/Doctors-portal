import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../../assets/images/footer.png';

const Footer = () => {
    return (
        <footer className='text-neutral' style={{
            background: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            }}>
            <div className="footer p-10">
                <div>
                    <span className="footer-title">Services</span> 
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </div> 
                <div>
                    <span className="footer-title">Company</span> 
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </div> 
                <div>
                    <span className="footer-title">Legal</span> 
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
            </div>
            <div className='text-center mt-4'>
                <p>Copyright © Doctors Portal 2022 - All right reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;