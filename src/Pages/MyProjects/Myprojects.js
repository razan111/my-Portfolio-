import React from 'react';
import { Typewriter } from 'react-simple-typewriter'

import doctor_portal from '../../image/doctor_portal.png'
import wedding_photography from '../../image/wedding-photograpy.png'
import resale from '../../image/resale.png'

const Myprojects = () => {
    return (
        <div className='lg:px-32 md:px-12 px-1'>
            <h2 className="text-5xl font-semibold text-center mb-12"><span style={{ color: 'black', fontWeight: 'bold' }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                    words={['My Projects']}
                    loop={3}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                // onLoopDone={handleDone}
                // onType={handleType}
                />
            </span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                <div className="card bg-base-100 shadow-xl image-full" data-aos="fade-right"
                    data-aos-offset="400"
                    data-aos-easing="ease-in-sine">
                    <figure className='blur-sm'><img src={doctor_portal} alt="Doctor's Portal" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-4xl">Doctor's Portal</h2>
                        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                        <li>Show appointment slots according to calendar date.</li>
                        <li>Firebase authentication, Responsive, routing and private route with login security.</li>
                        <li>Admin panel to add a new doctor or make a new admin.</li>
                        <div className="flex justify-end mt-24">
                            <button className="badge badge-outline"><a href='https://doctors-portal-b3ae6.web.app/' target='blank'>Live Site</a></button>
                        </div>
                    </div>
                </div>


                <div className="card bg-base-100 shadow-xl image-full" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <figure className='blur-sm'><img src={wedding_photography} alt="Doctor's Portal" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-4xl">Wedding Photography</h2>
                        <li>Users can see various type of packages.</li>
                        <li>Users can give his/her review and see others' reviews.</li>
                        <li>User can add any service as desired.</li>
                        <div className="flex justify-end mt-24">
                            <button className="badge badge-outline hover:bg-red-600"><a href='https://wedding-photographer-53d25.web.app/' target='blank'>Live Site</a></button>
                        </div>
                    </div>
                </div>


                <div className="card bg-base-100 shadow-xl image-full" data-aos="fade-right"
                    data-aos-offset="400"
                    data-aos-easing="ease-in-sine">
                    <figure className='blur-sm'><img src={resale} alt="Doctor's Portal" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-4xl">Resale Market</h2>
                        <li>Buyers can see all the products, and he/she orders and pays for them.</li>
                        <li>The seller can post for his/her products, advertise own product and manage his/her products.</li>
                        <li>The admin manage all Buyers and Sellers</li>
                        <div className="flex justify-end mt-24">
                            <button className="badge badge-outline hover:bg-red-600"><a href='https://resale-market-e557b.web.app/' target='blank'>Live Site</a></button>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Myprojects;