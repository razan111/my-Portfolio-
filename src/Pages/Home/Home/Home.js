import React from 'react';
import About from '../../About/About';
import Blogs from '../../Blogs/Blogs';
import Myprojects from '../../MyProjects/Myprojects';
import ContactForm from '../ContactForm/ContactForm';
import Hero from '../Hero/Hero';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Myprojects></Myprojects>
            <Blogs></Blogs>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;