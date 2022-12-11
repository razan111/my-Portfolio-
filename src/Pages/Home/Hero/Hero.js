import React from 'react';
import { FaLinkedin, FaFacebook } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import me from '../../../image/me.png'
import { Typewriter } from 'react-simple-typewriter'
import 'animate.css';

const Hero = () => {
    return (
        // <div className="hero h-[90vh]">
            <div className="hero mb-12">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={me} alt='me' className="lg:w-1/2  w-full rounded-lg" />
                    <div>

                        <h1 className="text-5xl font-bold">Hi I am <span style={{ color: 'blue', fontWeight: 'bold' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Razan Sarker Santa', 'A MERN stack web Developer', 'A React Developer', 'Programmer!']}
                                loop={15}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            // onLoopDone={handleDone}
                            // onType={handleType}
                            />
                        </span></h1>
                        <p className="py-6 text-xl">I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
                        <div className='flex justify-center' animate__animated animate__bounce>
                            <button className='text-4xl mr-3 p-3 bg-gray-300 rounded-full shadow-md'><a href='https://www.linkedin.com/in/razan-sarker/' target='blank'><FaLinkedin /></a></button>
                            <button className='text-4xl mr-3 p-3 bg-gray-300 rounded-full shadow-md'><a href='https://github.com/razan111' target='blank'><AiFillGithub /></a></button>
                            <button className='text-4xl mr-3 p-3 bg-gray-300 rounded-full shadow-md'><a href='https://www.facebook.com/razan.sarker.7/' target='blank'><FaFacebook /></a></button>

                        </div>
                        <div className='flex justify-center mt-4'>
                            <a href='Razan_Sarker_santa_Final_Resume.pdf' download='Razan Sarker.pdf' className='btn'>Resume</a>
                        </div>

                    </div>
                </div>
            </div>
        // </div>
    );
};

export default Hero;