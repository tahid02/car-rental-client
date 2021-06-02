


const TestimonialCard = ({description,imageURL,name,occupation}) =>{

    return(
        // <div className='  col-md-4 col-sm-12 col-12'>
        <div className='swiper-lazy'>
        <div className=''>
            {description}
        </div>
        <div className='d-flex flex-row mt-3'>
            <div className='centerItem w-25'>
                <img src={imageURL} alt="" style={{ width: '100%' }} />
            </div>
            <div className="text-center w-75 centerItem ">
                <div className="">
                    <p className='cyan mb-0'> {name} </p>
                    <p className='mb-0'>
                        <small> {occupation} </small>
                    </p>
                </div>
                    
                
            </div>
        </div>
</div>
    // </div>
    
    )
}

export default TestimonialCard;