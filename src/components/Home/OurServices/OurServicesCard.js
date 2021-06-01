import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import { Slide } from 'react-reveal/Slide';
import './OurServices.css';
// pick up : https://png.pngtree.com/png-vector/20190622/ourlarge/pngtree-realistic-illustration-of-black-pickup-trucks-vector-illustration-png-image_1506356.jpg
// sedan car: https://png.pngtree.com/png-vector/20190607/ourlarge/pngtree-realistic-black-sedan-vector-car-template-flat-vector-vector-png-image_1247295.jpg
import './OurServices.css'

const OurServicesCard = ({ service }) => {


    console.log(service)
    const { imageURL, type, price, description, _id } = service;
    const [loggedInUser, setLoggedInUser, isAdmin] = useContext(UserContext);



    return (
        <div className="col-md-4 col-sm-6 col-12 service_card" >
            <div className="card h-100 ">
                <div className="centerItem w-100">

                    <img src={imageURL} className="card-img-top w-75 animation" alt="..." />
                </div>

                <div className=" text-center ">
                    <h3 className="card-title color">{type}</h3>
                    <p className="card-text description"> {description} </p>


                </div>
                <div className="hover_part centerItem">


                    <div className=''>
                        <p> {type} </p>
                       <p>${price}/Hour</p> 
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