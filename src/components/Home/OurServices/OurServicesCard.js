import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
 
 // pick up : https://png.pngtree.com/png-vector/20190622/ourlarge/pngtree-realistic-illustration-of-black-pickup-trucks-vector-illustration-png-image_1506356.jpg
 // sedan car: https://png.pngtree.com/png-vector/20190607/ourlarge/pngtree-realistic-black-sedan-vector-car-template-flat-vector-vector-png-image_1247295.jpg
import './OurServices.css'

const OurServicesCard = ({ service }) => {


    console.log(service)
    const { imageURL, type, price, description,_id } = service;
    const [loggedInUser, setLoggedInUser,isAdmin ] = useContext(UserContext);
   


    return (
        <div className="col-md-4 col-sm-6 col-12 services_card" >
            <div className="card h-100">
                <div className="centerItem w-100">
                    {/* <img src='https://i.ibb.co/D1k34Np/draw-awesome-cartoon-style-for-your-car-removebg-preview.png' className="card-img-top w-75 animation" alt="..." /> */}
                    {/* <img src='https://png.pngtree.com/png-vector/20190622/ourlarge/pngtree-realistic-illustration-of-black-pickup-trucks-vector-illustration-png-image_1506356.jpg' className="card-img-top w-75 animation" alt="..." /> */}
                    {/* <img src='https://png.pngtree.com/png-vector/20190607/ourlarge/pngtree-realistic-black-sedan-vector-car-template-flat-vector-vector-png-image_1247295.jpg' className="card-img-top w-75 animation" alt="..." /> */}
                    <img src={imageURL} className="card-img-top w-75 animation" alt="..." />
                </div>
                
                <div className="card-body text-center">
                    <h3 className="card-title color">{type}</h3>
                    ${price}/Hour
                    <p className="card-text"> {description} </p>
                </div>
                <div className="card-footer centerItem">
                  <Link to={ isAdmin ? "/admin/rentList" : `/payment/${_id}`}> 
                   <button className="btn  btn-warning bgColor" > Rent Now </button>
                  </Link> 
                  {/* <Link to={ `/Dashboard/${_id}`}> 
                   <button className="btn  btn-warning bgColor" > Rent Now </button>
                  </Link>  */}
                  {/* <Link to={ `/payment/${_id}`}> 
                   <button className="btn  btn-warning bgColor" > Rent Now </button>
                  </Link>  */}
                 
                </div>
            </div>

        </div>
    );
};

export default OurServicesCard;