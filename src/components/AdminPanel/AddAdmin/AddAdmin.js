import { useForm } from "react-hook-form";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import DashboardName from "../../Shared/DashboardName/DashboardName";


const AddAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
            console.log(data)

            
      const url = `https://evening-ocean-71187.herokuapp.com/addAdmin`
      fetch(url, {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(data)
      })
          .then(res => console.log('server side response', res))
          .catch(err => console.log(err))


    };

    return (
        <section className="container-fluid">
            <div>
                <DashboardName name = {'Add Admin'}/>
            </div>
            <div className="d-flex">
                <div className="">
                    <Sidebar />
                </div>
                <div className="">
                    <form className="" onSubmit={handleSubmit(onSubmit)}>

                        <input {...register("email", { required: true })} placeholder="Your Email" className='d-block w-50'/>
                        {errors.email && <span className="text-danger">Email is required</span>}
                            <br/>
                        <input type="submit" />

                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddAdmin;