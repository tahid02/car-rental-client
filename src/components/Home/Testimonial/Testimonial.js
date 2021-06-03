

import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import TestimonialCard from './TestimonialCard';

import SwiperCore, {Lazy, Autoplay,Keyboard, Pagination,Navigation  } from 'swiper/core';


// install Swiper modules
SwiperCore.use([Lazy,Autoplay,Keyboard, Pagination,Navigation]);



const Testimonial = () => {

    const [reviewsData, setReviewsData] = useState([])


    useEffect(() => {
        fetch('https://evening-ocean-71187.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviewsData(data)
            })
    }, [])
    return (
        <section className="container my-5" id="testimonial">
            <div className='d-flex align-items-center'>
                <div className="">
                    <h6 className="cyan">Testimonials </h6>
                    <h2>What Our Customers Says </h2>
                </div>
                <div className=" ms-auto cyan " style={{ fontSize: '6rem', opacity: '.4' }}>
                    <FontAwesomeIcon icon={faQuoteLeft} />
                </div>
            </div>

            {/* 
            <div className="row ">
                {
                    reviewsData.map(testimonial => <TestimonialCard {...testimonial}/>)
                }
            </div> */}



            <Swiper
                style={{
                    '--swiper-navigation-color': '#ff0000',
                    '--swiper-pagination-color': '#000'
                }}
                slidesPerView={1}
                spaceBetween={10}
                // loop={true}
                keyboard={{
                    "enabled": true
                }}
                autoHeight={true}
                pagination={{
                    "clickable": true
                }}
                navigation={true}
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }}
                lazy={true}
                breakpoints={{
                    "640": {
                        "slidesPerView": 2,
                        "spaceBetween": 20
                    },
                    "768": {
                        "slidesPerView": 4,
                        "spaceBetween": 40
                    },
                    "1024": {
                        "slidesPerView": 5,
                        "spaceBetween": 50
                    }
                }} className="mySwiper">
                {
                    reviewsData.map(testimonial => {
                        return <SwiperSlide>
                            <TestimonialCard {...testimonial} />
                            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                        </SwiperSlide>

                    })
                }

            </Swiper>



        </section>
    );
};

export default Testimonial;


