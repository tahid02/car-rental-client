
import axios from 'axios';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import DashboardName from "../../Shared/DashboardName/DashboardName";

const AddServices = () => {

    const { register, handleSubmit,  formState: { errors } } = useForm();

    const [imageURL, setIMageURL] = useState(null);



    const handleImageUpload = event => {
        console.log('btn clicked ')
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'a574dcbb50717480e9f504d58b7b8a0a');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                console.log(response.data.data.display_url)
                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const onSubmit = data => {
        console.log(data)
        const serviceData = {

            type: data.type,
            price: data.price,
            description: data.description,
            imageURL: imageURL
        };
        console.log('service Data', serviceData)
        const url = `https://evening-ocean-71187.herokuapp.com/addServices`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => console.log('server side response', res))
            .catch(err => console.log('update error',err))
    };


    return (
        <section className="container-fluid">
            <div>
                <DashboardName name = {'Add Admin'}/>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <Sidebar />
                </div>
                <div className="col-md-8">
                    <form className="pay-form" onSubmit={handleSubmit(onSubmit)}>
                        <input  {...register("type", { required: true })} placeholder="service Name" />
                        {errors.type && <span className="error">service type is required</span>}

                        <input type='number' {...register("price", { required: true })} placeholder="service price" />
                        {errors.price && <span className="error">price is required</span>}

                        <input {...register("description", { required: true })} placeholder="service description" />
                        {errors.description && <span className="error">description is required</span>}

                        <input type="file" onChange={event => handleImageUpload(event)} name="image" required/>

                        <input type="submit" value='Add' />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddServices;