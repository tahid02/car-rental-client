import axios from "axios";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";

const center_item = {
    display:'flex',
    alignItems:'center'
}

   

    
const ManageServicesCard = ({service}) => {
    const [loggedInUser,setLoggedInUser,isAdmin,setIsAdmin,editService,setEditService] = useContext(UserContext)
        const { imageURL, type, price, description,_id } = service;




        const deleteProduct = (e, id) => {
            console.log(e.target.parentNode.parentNode, _id,type, price, imageURL)
    
            fetch(`https://evening-ocean-71187.herokuapp.com/delete/${id}`, {
                method:'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                if(data){
                    console.log(data)
                    e.target.parentNode.parentNode.style.display = 'none';
                }
            })
        }
        const editProduct = () => {
            setEditService(service)
        }

        

        
        return (
    
    
    <>
    
            <tr className=''>
                {/* <th scope="row">1</th> */}
                <td> {type}</td>
                <td>{price}</td>
                <td>
                    <Link to="/admin/editService">
                        <button className="btn btn-success" onClick={editProduct} >edit</button>
                    </Link>
                    
                    <button className="btn btn-danger" onClick={(e) =>deleteProduct( e, _id)}>delete</button>
                </td>
            </tr>

            
    
    </>
    
        );
    };
    
    export default ManageServicesCard;