import { Link } from "react-router-dom";

import './OurServices.css'

const OurServicesCard = ({ service }) => {
    const { imageURL, type, price, description,_id } = service;

    console.log('our services card' ,_id)
    return (
        <div className="col-md-4 col-sm-6 col-12">
            <div className="card h-100">
                <div className="centerItem">
                    <img src={imageURL} className="card-img-top w-25 animation" alt="..." />
                </div>
                
                <div className="card-body text-center">
                    <h3 className="card-title">{type}</h3>
                    ${price}/Day
                    <p className="card-text"> {description}</p>
                </div>
                <div className="card-footer centerItem">
                  <Link to={`/payment/${_id}`}> 
                   <button className="btn  btn-warning bgColor" > Rent Now </button>
                  </Link> 
                </div>
            </div>

        </div>
    );
};

export default OurServicesCard;