import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FooterCard from "./FooterCard";


const footerData = [
    {
        title: 'Emergency ',
        data: ['Emergency rent', ' rent', 'Emergency ', 'Emergency rent', 'Emergency rent'],

    },
    {
        title: 'Spacial services',
        data: ['Emergency rent', 'Emergency ', ' rent', 'Tooth extraction', 'Check Up', 'Emergency ', 'Check up', 'Treatment ', 'Emergency rent', 'Emergency '],
    },
    {
        title: 'Our Offers',
        data: ['Emergency rent', 'Emergency ', 'Emergency ', 'Tooth extraction', 'Check Up', 'Emergency Dental Care', 'Check up', 'Treatment Of Personal Diseases', 'rent', 'Emergency rent'],
    },

]

const Footer = () => {

    
    
    return (
        <footer className=" bg-dark">
            <div className="row my-5">

                {/* first three columns */}
                {

                    footerData.map(footer => <FooterCard  {...footer} />)
                }


                    {/* last column */}
                <div className="col-md-3 p-3 ">
                    <div className="address">
                        <h6 className="cyan">Address </h6>
                        <small className="place">Naw York City, Birk Shiree street ,Road 102</small>
                        <div className="icons  fs-4 mt-4">
                            <FontAwesomeIcon icon={faFacebook} className='text-white'/>
                            <FontAwesomeIcon icon={faYoutube} className='mx-3 text-white' />
                            <FontAwesomeIcon icon={faTwitter} className='text-white'/>
                        </div>

                    </div>
                    <div className="call mt-5">
                        <small className="callNow d-block">Call Now</small>
                        <button className="bgColor btn btn-warning">+102920209</button>
                    </div>
                </div>

            </div>
            <div className="text-center">
                @Copyright {new Date().getFullYear()}. All right reserves
            </div>
        </footer>

    );
};

export default Footer;