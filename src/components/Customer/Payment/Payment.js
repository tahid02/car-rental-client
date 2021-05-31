

import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ProcessPayment from './ProcessPayment'
import './payment.css'
import { useParams } from 'react-router';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import { UserContext } from '../../../App';
import { useMediaQuery } from 'react-responsive';
import { Nav, Navbar } from 'react-bootstrap';


const Payment = () => {
  const [loggedInUser,setLoggedInUser,isAdmin,setIsAdmin,editService,setEditService,serviceInfo, setServiceInfo,show,setShow,isTabletOrMobile] = useContext(UserContext)

  const { id } = useParams()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [paymentData, setPaymentData] = useState(null)




  useEffect(() => {
    fetch(`https://evening-ocean-71187.herokuapp.com/checkOut/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log('service  data ', data)
        setServiceInfo(data);
      })
  }, [])



  console.log('mobile',isTabletOrMobile)
  console.log('show',show)
  
  



  const onSubmit = data => {
    console.log('user payment data', data)
    setPaymentData(data)
  };

  const handlePaymentSuccess = paymentId => {
    if (paymentData) {
      const orderDetails = {
        email: loggedInUser.email,
        serviceInfo,
        payment: paymentData,
        paymentId,
        orderTime: new Date().toDateString()
      }
      console.log('pay clicked', orderDetails);



      const url = `https://evening-ocean-71187.herokuapp.com/addRent`
      fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(orderDetails)
      })
        .then(res => console.log('server side response', res))
        .catch(err => console.log(err))




    }
    else {
      alert('please fill the data')
    }

  }














  return (
    <div className="row g-4">
     
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <div className='col-md-4'>
        <Sidebar show={show} mobile={isTabletOrMobile}/>
      </div>
        



      <div className="col-md-8 col-12" >
      <button onClick={()=>setShow(!show)}>
        hey
      </button>
    <div className="">
          <img src={serviceInfo.imageURL} alt="" />
          <h4> Car Type: {serviceInfo.type}</h4>
          <p> cost: ${serviceInfo.price}/Day </p>
        </div>

        <div className="row">

          <div className="col-md-6" >
            <form className="pay-form" onSubmit={handleSubmit(onSubmit)}>
              <input defaultValue={loggedInUser.name} {...register("name", { required: true })} placeholder="Your Name" />
              {errors.name && <span className="error">Name is required</span>}

              <input defaultValue={loggedInUser.email} {...register("email", { required: true })} placeholder="Your Email" />
              {errors.email && <span className="error">Email is required</span>}

              <input {...register("address", { required: true })} placeholder="Your Address" />
              {errors.address && <span className="error">Address is required</span>}

              <input {...register("phone", { required: true })} placeholder="Your Phone Number" />
              {errors.phone && <span className="error">Phone Number is required</span>}

              <input type="submit" value='save' />
            </form>
          </div>


          <div className="col-md-6" >
            <h2>Pay Here   </h2>
            <ProcessPayment handlePayment={handlePaymentSuccess} />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Payment;