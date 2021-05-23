import axios from "axios";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";
import Sidebar from "../../Shared/Sidebar/Sidebar"

const EditServices = () => {

    const { register, handleSubmit,  formState: { errors } } = useForm();
    const [loggedInUser,setLoggedInUser,isAdmin,setIsAdmin,editService,setEditService] = useContext(UserContext)
    const { imageURL, type, price, description,_id } = editService;
    const [editImageURL, setEditIMageURL] = useState(imageURL); // you can use this in context API . so that, if you go other tab without saving edit you probably won't lost changes or edition  you have made in service
console.log('editService',editService);

    const handleEditedImageUpload = event => {
        event.preventDefault();
        console.log('btn clicked ')
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'a574dcbb50717480e9f504d58b7b8a0a');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                console.log(response.data.data.display_url)
                setEditIMageURL(response.data.data.display_url);
                console.log('image uploaded successfully')
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    const onSubmit = (data) => {
        
        
        console.log(data)
        const serviceData = {

            type: data.type,
            price: data.price,
            description: data.description,
            imageURL: editImageURL
        };
        console.log('service Data', serviceData)

        fetch(`https://evening-ocean-71187.herokuapp.com/update/${_id}`,{
            method:'PATCH',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(serviceData)
        })
        .then(res => res.json())
        .then( result => {
            console.log(result);
            if (result) {
                console.log('updated successfully')
            
            }
        })
    };


    console.log('image',imageURL);
    return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <Sidebar />
                </div>
                <div className="col-md-4">
                    <img src={editImageURL} alt="service" className='w-25'/>
                    <form className="pay-form" onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue={type} {...register("type", { required: true })}  />
                        {errors.type && <span className="error">service type is required</span>}

                        <input defaultValue={price} type='number' {...register("price", { required: true })}  />
                        {errors.price && <span className="error">price is required</span>}

                        <input defaultValue={description} {...register("description", { required: true })} />
                        {errors.description && <span className="error">description is required</span>}

                        <input type="file" onChange={event => handleEditedImageUpload(event)} name="image" required/>

                        <input type="submit" value=' Save Edit' />
                    </form>
                    
                    
                    
                </div>
            </div>
        </div>
    );
};

export default EditServices;