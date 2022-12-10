import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaFacebook } from 'react-icons/fa';
import {  AiFillGithub } from 'react-icons/ai';
import me from '../../../image/me.jpg'

const Hero = () => {
    return (
        <div className="hero h-[90vh]">
            <div className="hero-content grid grid-cols-1">
                <div className="avatar mx-auto">
                    <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={me} alt='me' />
                    </div>
                </div>
                {/* <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" /> */}
                <div>
                   
                        <h1 className="text-5xl font-bold">Hi I am Razan Sarker Santa</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className='flex justify-center'>
                            <button className='text-4xl mr-3'><Link><FaLinkedin/></Link></button>
                            <button className='text-4xl mr-3'><Link><AiFillGithub/></Link></button>
                            <button className='text-4xl mr-3'><Link><FaFacebook/></Link></button>
                            
                        </div>
                        <button className="btn btn-primary">Resume</button>
               
                </div>
            </div>
        </div>
    );
};

export default Hero;