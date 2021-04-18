

import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';



const Testimonial = () => {

    const [reviewsData,setReviewsData] = useState([])


    useEffect( () => {
        fetch('https://evening-ocean-71187.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setReviewsData(data)
        })
    },[])
    return (
        <section className="container my-5">
            <div className='d-flex align-items-center'>
                <div className="">
                <h6 className="cyan">Testimonials </h6>
                <h2>What Our Customers Says </h2>
            </div>
            <div className=" ms-auto cyan " style={{fontSize:'6rem',opacity:'.4'}}>
                <FontAwesomeIcon  icon={faQuoteLeft}/>
            </div>
            </div>
            

            <div className="row ">
                {
                    reviewsData.map(testimonial => <TestimonialCard {...testimonial}/>)
                }
            </div>
        </section>
    );
};

export default Testimonial;