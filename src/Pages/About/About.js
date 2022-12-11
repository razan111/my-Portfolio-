import React, { useContext } from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { themeContext } from '../../Context/Context';
import about from '../../image/about.jpg'

const About = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;


    return (
        <div className='my-12'>

            <div className='flex flex-row justify-end items-center my-5'>
                <div className="avatar placeholder mr-2">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-3 h-3">
                    </div>
                </div>
                <div className="avatar placeholder mr-2">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-3 h-3">
                    </div>
                </div>

                <div className="divider w-2/3 text-slate-600">

                </div>
            </div>


            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={about} alt='About me' className="w-full md:max-w-full lg:w-1/3 rounded-lg shadow-2xl" />
                    <div>
                        <h2 className="text-5xl font-semibold"><span style={{
                            background: darkMode ? "black" : "",
                            color: darkMode ? "white" : "",
                        }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Who I am...']}
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
                        <p className="py-6 text-xl">My name is Razan Sarker Santa. I'm a web designer and developer based in Dhaka, Bangladesh.</p>
                        <p className="py-6 text-xl">I am a professional and passionate programmer in my daily life. A quick learner with a self-learning attitude. I love to learn and explore new technologies and am Passionate about Problem Solving. Love almost all the stacks of Web developer. My current stack includes React,   Bootstrap, Tailwind, Material UI, Nodejs, MongoDB, Mysql, Firebase, etc.</p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;