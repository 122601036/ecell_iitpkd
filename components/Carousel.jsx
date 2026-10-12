import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ideathon1 from '../src/assets/ideathon1.webp';
import hackathon2 from '../src/assets/hackathon2.webp';
import startTank from '../src/assets/startTank2.webp';
import productLaunch from  "../src/assets/productLaunchChallenge.webp"
// import rocket from "../src/assets/rocket.mp4";
// import idea from "../src/assets/ideathon.mp4";
import readMore from "../src/assets/read-more.mp4";
// import hackathonVideo from "../src/assets/hackathon.mp4";
// import ideathon from '../src/assets/ideathon1.jpg'
import './carousel.css';
const Carousel = () => {
  return (
     <div id="carousel-container">
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
      autoplay={{
        delay:1500,
        disableOnInteraction:false,
        pauseOnMouseEnter:true
      }}
      loop={true}
    >
      <SwiperSlide >
            {/* <video src={rocket} className='car-card' autoPlay loop muted playsInline></video> */}
                <img id='carouselImg' src={startTank} alt="" />
                <div className="car-desc">
                   <h1>Start Tank</h1> 
                    <p>A live startup pitching event where participants present ideas to investors and the audience. Each audience member gets virtual currency to bid on ideas they like. The idea with the highest audience investment wins a prize. If that idea later launches and its share value crosses a set threshold, early audience backers receive proportional shares.</p>
                </div>
      </SwiperSlide>
      <SwiperSlide >
            {/* <video src={idea} className='car-card' autoPlay loop muted playsInline></video> */}
            {/* <img src={ideathon} alt="" /> */}
                <img id='carouselImg' src={ideathon1} alt="" />

                <div className="car-desc">
                    <h1>Ideathon</h1>
                    <p>Following up on a problem statement teams will have 24 hours to thrive and come up with a proper scratch to product plan and also how the
company might sustain in the market. Teams simulate running the startup, making real-time business decisions.</p>
                </div>
      </SwiperSlide>
      <SwiperSlide >
                <img id='carouselImg' src={hackathon2} alt="" />
        
        {/* <video src={hackathonVideo} className='car-card' autoPlay loop muted playsInline></video> */}
        <div className="car-desc">
                    <h1>Hackathon</h1>
                    <p>Teams will work on building prototypes and MVPs of innovative solutions.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide >
        {/* <video src={readMore} className='car-card' autoPlay loop muted playsInline></video> */}
                <img id='carouselImg' src={productLaunch} alt="" />

                <div className="car-desc read-more">
                    {/* <h1></h1> */}
                    <p>For all the events check out Events page.</p>
                </div>
      </SwiperSlide>
      ...
    </Swiper>
     </div>
    
  )
}

export default Carousel
