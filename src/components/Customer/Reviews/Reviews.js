import axios from 'axios';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import DashboardName from "../../Shared/DashboardName/DashboardName";
import Fade from 'react-reveal/Fade';

const Reviews = () => {

    const { register, handleSubmit,  formState: { errors } } = useForm();

    const [imageURL, setIMageURL] = useState(null);


    const onSubmit = data => {
        console.log(data)
        const reviewData = {

            name: data.name,
            occupation: data.occupation,
            description: data.description,
            imageURL: imageURL
        };
        console.log('reviewData Data', reviewData)
        const url = `https://evening-ocean-71187.herokuapp.com/addReviews`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => console.log('server side response', res))
    };

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



    return (
        <section className="container-fluid">
             <div>
               <DashboardName name={'Reviews'} />
            </div>
            <div className="d-flex">
                <div className="">
                    <Sidebar />
                </div>
                <div className="">
                    
                    <form className="pay-form" onSubmit={handleSubmit(onSubmit)}>
                        <input  {...register("name", { required: true })} placeholder="Name" />
                        {
                        errors.name && <Fade bottom collapse>
                            <span className="error">name is required</span>
                        </Fade>
                        }

                        <input {...register("occupation", { required: true })} placeholder=" occupation" />
                        {errors.occupation && <span className="error">occupation is required</span>}

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

export default Reviews;