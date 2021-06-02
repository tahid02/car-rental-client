import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import './OurServices.css';

const OurServicesCard = ({ service }) => {


    console.log(service)
    const { imageURL, type, price, description, _id } = service;
    const [loggedInUser, setLoggedInUser, isAdmin] = useContext(UserContext);



    return (
        <div className="col-md-4 col-sm-6 col-12 service_card" >
            <div className="card h-100  " style={{border:'0px'}} >
                <div className="centerItem w-100">

                    <img src={imageURL} className="card-img-top  animation" alt="..." />
                </div>

                <div className=" text-center ">
                    <h3 className="card-title color type">{type}</h3>
                    <p className="card-text description"> {description} </p>


                </div>
                <div className="hover_part centerItem">


                    <div className='pb-1'>
                        <p className='mb-1'> {type} </p>
                       <p className='mb-1'>${price}/Hour</p> 
                        <Link to={isAdmin ? "/admin/rentList" : `/payment/${_id}`}>
                            <button className="btn  btn-warning bgColor" > Rent Now </button>
                        </Link>

                    </div>

                </div>
            </div>

        </div>








    );
};

export default OurServicesCard;