import React, { useEffect, useRef } from "react";
import "./home.css";
import UserCard from "./UserCard";
import Footer from "./Footer";
import Carousel from "./Carousel.jsx";
import RightNavBar from "./RightNavBar.jsx";
import Spline from '@splinetool/react-spline';
// Import Assets - Ensure these paths match your folder structure
import arrow from "../src/assets/arrow2.svg";
import ecellHome from '../src/assets/ecell_home2.png';

// Import Data
import teamData from "../Backend/teamData26.js";
import HeroSection from "./HeroSection.jsx";
import EventFeed from "./EventFeed.jsx";

function Home(){
    const introContent = useRef(null);

    function handleClick(){
        if(introContent.current){
            introContent.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    useEffect(() => {
        const elements = document.querySelectorAll('.slideUpElt');
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('isVisible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(element => observer.observe(element));
        return () => observer.disconnect();
    }, []);

    return (
    <div className="home">
        <div className="home-overlay">
            <HeroSection/>
                {/* <div className="hero-left">
                    <h1 className="slide-up-text">
                        <span>Entrepreneurship Cell</span><br />
                        <span>IIT Palakkad</span>
                    </h1>
                </div>
                
                <div className="hero-right">
                    <img id="ecellHome" src={ecellHome} alt="E-Cell Illustration" />//////////
                </div> */}
                
                <img src={arrow} alt="Scroll" className="arrow" onClick={handleClick}/>
            {/* <section className="hero-split">
                
            </section> */}

            <div className="intro slideUpElt" ref={introContent} >
                <h1>About Us</h1>
                <p className="text">
                    E-Cell IIT Palakkad is a student-driven initiative that nurtures the spirit of entrepreneurship through events, mentorship, and hands-on support.
                    At the core is <b>SURGE</b> ("Startup Upscaling and Resource Growth Engine")—a dynamic team of students, faculty, alumni, and experts dedicated to turning ideas into startups.
                </p>
                <h2>Got an idea? SURGE will help you:</h2>
                <div className="list">
                    <ul className="text">
                        <li> Build Your Team – Connect with coders, designers, and doers.</li>
                        <li> Get Mentored – Guidance from industry pros, professors, and alumni.</li>
                        <li> Develop an MVP – Shape your idea into a working prototype.</li>
                        <li> Pitch to Investors – Gain access to funding and incubation.</li>
                    </ul>
                 </div>
            </div>
            
            <div className="vision slideUpElt">
                <h1>Our Vision</h1> 
                <p className="text">
                    The Entrepreneurship Cell of IIT Palakkad envisions building a thriving entrepreneurial ecosystem within the institute. We aim to empower students by providing them with real-world exposure, mentorship, and resources necessary to transform ideas into impactful ventures.
                </p>
            </div>

            <div className="events-activities slideUpElt">
                <h1>Events & Activities</h1>
                <Carousel/>
            </div>

            <div className="events slideUpElt">
                {/* <div id="calendar-in-mainpage">
                    <h1>Events Calendar</h1>
                    <RightNavBar/>
                </div> */}
                <EventFeed/>
            </div>

            <div className="team slideUpElt">
                <h1>Our Team</h1>
                <div className="team-grid">
                    {teamData && teamData.map((member, index) => (
                        <UserCard
                            key={index}
                            name={member.name}
                            role={member.role}
                            image={member.image}
                            mail={member.mail}
                            linkedin={member.linkedin}
                            loading={index > 3 ? "lazy" : "eager"}
                        />
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    </div>
    );
}

export default Home;
