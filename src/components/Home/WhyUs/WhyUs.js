
import { faRoad, faTasks, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import happyCustomer from '../../../images/customer-giving-quality-feedback.jpg'
import sedan from '../../../images/sedan-car-model.png'

const WhyUs = () => {
    return (
        <section className="">
            <div className="svgReverse">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fb9e00" fill-opacity="1" d="M0,288L20,245.3C40,203,80,117,120,112C160,107,200,181,240,176C280,171,320,85,360,58.7C400,32,440,64,480,112C520,160,560,224,600,218.7C640,213,680,139,720,112C760,85,800,107,840,138.7C880,171,920,213,960,229.3C1000,245,1040,235,1080,213.3C1120,192,1160,160,1200,149.3C1240,139,1280,149,1320,160C1360,171,1400,181,1420,186.7L1440,192L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></path></svg>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-7 col-sm-12 col-12">
                        <img src={happyCustomer} alt="" className='w-100' />
                    </div>
                    <div className="col-md-5 col-sm-12 col-12">

                        <div className="text">
                            <h2> Why Us? </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque omnis laboriosam quod, eligendi voluptatum beatae fugit quia quasi at quibusdam laudantium optio libero nulla totam reprehenderit quis iste. Provident, accusantium?</p>
                        </div>

                        <div className="infos text-center d-flex justify-content-around flex-wrap">
                            <div className=''>
                                <FontAwesomeIcon icon={faUsers} /> <br />
                            5000+ <br /> customers
                        </div>
                            <div className=''>

                                <FontAwesomeIcon icon={faTasks} /> <br />
                            3000+ <br /> Services
                        </div>
                            <div className=''>

                                <FontAwesomeIcon icon={faRoad} /> <br />
                            safety <br /> first
                        </div>

                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default WhyUs;