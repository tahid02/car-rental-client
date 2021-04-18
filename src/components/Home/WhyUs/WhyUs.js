
import happyCustomer from '../../../images/customer-giving-quality-feedback.jpg'
import sedan from '../../../images/sedan-car-model.png'

const WhyUs = () => {
    return (
      <section className="">
          <div className="svgReverse">
                <svg  viewBox="0 0 1440 320">
                    <path fill="#fb9e00" fillOpacity="1" d="M0,32L60,32C120,32,240,32,360,53.3C480,75,600,117,720,122.7C840,128,960,96,1080,80C1200,64,1320,64,1380,64L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
                </svg>
            </div>
          <div className="container-fluid">
              <div className="row">
                <div className="col-md-7 col-sm-12 col-12">
                    <img src={happyCustomer} alt="" className='w-100'/>
                </div>
                <div className="col-md-5 col-sm-12 col-12">

                    <div className="text">
                         <h2> Why Us? </h2>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque omnis laboriosam quod, eligendi voluptatum beatae fugit quia quasi at quibusdam laudantium optio libero nulla totam reprehenderit quis iste. Provident, accusantium?</p>
                    </div>

                    <div className="infos text-center d-flex justify-content-around flex-wrap">
                        <div className=''>
                            icon <br/>
                            5000+ <br/> customers
                        </div>
                        <div className=''>
                      
                        icon <br/>
                            3000+ <br/> Services
                        </div>
                        <div className=''>
                       
                        icon <br/>
                            safety <br/> first
                        </div>
                        
                    </div>
                   
                </div>
              </div>
          </div>

      </section>
    );
};

export default WhyUs;