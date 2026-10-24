import React, { useEffect, useRef } from "react";
import "../components/home.css";
import UserCard from "./UserCard";
import Footer from "./Footer";
import Carousel from "./Carousel.jsx";
import Spline from '@splinetool/react-spline';
// Import Assets - Ensure these paths match your folder structure
import arrow from "../assets/arrow2.svg";
import ecellHome from '../assets/ecell_home2.png';

// Import Data
import teamData from "../teamData26.js";
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
                    <b>One Powerful Idea Can Change the World. Your Journey Starts Here.</b>
                    The Entrepreneurship Cell (E-Cell) at IIT Palakkad is where ideas find direction, ambition meets opportunity, and innovation takes its first step toward reality.
                    At the core is <b>SURGE</b> ("Startup Upscaling and Resource Growth Engine")—a dynamic team of students, faculty, alumni, and experts dedicated to turning ideas into startups.
                </p>
                <h2>Got an idea? SURGE will help you:</h2>
                <div className="list">
                    <ul className="text">
                        <li> Build a Team – Connect with coders, designers, and doers.</li>
                        <li> Get Mentorship – Guidance from industry pros, professors, and alumni.</li>
                        <li> Develop an MVP – Shape your idea into a working prototype.</li>
                        <li> Pitch to Investors – Gain access to funding and incubation.</li>
                    </ul>
                 </div>
            </div>
            
            <div className="vision slideUpElt">
                <h1>Our Vision</h1> 
                <p className="text">
                    The Entrepreneurship Cell of IIT Palakkad envisions building a thriving entrepreneurial ecosystem within the institute. We aspire to empower students to think beyond the ordinary, challenge the status quo, and turn their ideas into ventures that create meaningful impact.                </p>
            </div>

            <div className="events-activities slideUpElt">
                <h1>Events & Activities</h1>
                <Carousel/>
            </div>

            <div className="events slideUpElt">
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
