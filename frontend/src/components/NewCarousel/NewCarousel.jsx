import React from 'react';
import GradientWaves from './GradientWaves';
import Carousel from '../Carousel.jsx';
import './NewCarousel.css';

const NewCarousel = () => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    return (
        <section className="newcarousel-section">
            {/* Background only */}
            <div className="newcarousel-bg">
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

            {/* Everything from the old section, unchanged */}
            <div className="newcarousel-content slideUpElt">
                <h1>Events &amp; Activities</h1>
                <Carousel />
            </div>
        </section>
    );
};

export default NewCarousel;