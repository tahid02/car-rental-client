


const TestimonialCard = ({description,imageURL,name,occupation}) =>{

    return(
        <div className='  col-md-4 col-sm-12 col-12'>

        <div className=' mt-5'>
            {description}
        </div>
        <div className='d-flex mt-5'>
            <div className='centerItem'>
                <img src={imageURL} alt="" style={{ width: '60%' }} />
            </div>
            <div className="text-center">
                
                    <h7 className='cyan'> {name} </h7>
                    <p>
                        <small> {occupation} </small>
                    </p>
                
            </div>
        </div>

    </div>
    
    )
}

export default TestimonialCard;