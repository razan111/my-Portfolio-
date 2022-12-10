import React from 'react';
import { Link } from 'react-router-dom';

import doctor_portal from '../../image/doctor_portal.png'

const Myprojects = () => {
    return (
        <div>
            <div className="hero my-5">
                <div className="hero-content flex-col lg:flex-row">
                    <a href='https://doctors-portal-b3ae6.web.app/' target='blank'>
                    <img src={doctor_portal} alt='' className="rounded-lg shadow-2xl" />
                    </a>
                    <div>
                        <h1 className="text-5xl font-bold">Doctor's Portal</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Myprojects;