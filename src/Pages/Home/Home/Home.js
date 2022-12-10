import React from 'react';
import Myprojects from '../../MyProjects/Myprojects';
import ContactForm from '../ContactForm/ContactForm';
import Hero from '../Hero/Hero';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Myprojects></Myprojects>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;