import React from 'react';
import GradientWaves from './NewCarousel/GradientWaves';
import "./heroSection.css";

const HeroSection = () => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    return (
        <div className='heroContainer'>
            {/* Gradient wave background */}
            <div className='heroWave'>
                <GradientWaves
                    horizonColor="#0f2027"
                    waveColor="#2c5364"
                    crestColor="#fbc45e"
                    speed={0.3}
                    amplitude={2}
                    grain={0}
                    quality={isMobile ? 'low' : 'medium'}
                    dpr={isMobile ? 1 : 1.5}
                    mouseInteraction={false}
                    swellOnClick={false}
                    intro={false}
                />
            </div>

            {/* Overlay content, unchanged */}
            <div className='contentOverlay'>
                <h1 className='headline'>
                    <span>Entrepreneurship Cell</span><br />
                    <span>IIT Palakkad</span>
                </h1>
                <p className='subText'>
                    The Entrepreneurship Cell connects innovators, builders, and strategists.
                </p>
            </div>
        </div>
    );
};

export default HeroSection;