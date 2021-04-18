import { Link } from "react-router-dom";



const OurServicesCard = ({ service }) => {
    const { imageURL, type, price, description,_id } = service;

    console.log('our services card' ,_id)
    return (
        <div className="col-md-4 col-sm-6 col-12">
            <div class="card h-100">
                <div className="centerItem">
                    <img src={imageURL} class="card-img-top w-25" alt="..." />
                </div>
                
                <div class="card-body text-center">
                    <h3 class="card-title">{type}</h3>
                    ${price}/Day
                    <p class="card-text"> {description}</p>
                </div>
                <div class="card-footer centerItem">
                  <Link to={`/payment/${_id}`}> 
                   <button className="btn  btn-warning bgColor" > Rent Now </button>
                  </Link> 
                </div>
            </div>

        </div>
    );
};

export default OurServicesCard;