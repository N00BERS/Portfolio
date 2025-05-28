// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'
import Service from './components/Service'
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import './App.css'; // Ensure the path is correct
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Service />
            <Projects />
            <Testimonials />
            <Contact />
            <Footer/>
        </div>
    );
}

export default App;
