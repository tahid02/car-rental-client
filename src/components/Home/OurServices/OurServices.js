import { useEffect } from "react";
import { useState } from "react";
import OurServicesCard from "./OurServicesCard";


const OurServices = () => {

    const [servicesData,setServicesData] = useState([])

    useEffect( () => {
        fetch('https://evening-ocean-71187.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setServicesData(data)
        })
    },[])
    return (
        <section className=" bgColor " style={{ marginTop: '-4%' }}>

            <section className="container-fluid">


                <h3 className="text-center">Our Services </h3>
                <div className="row g-4">
                    {
                        servicesData.map(service => <OurServicesCard service={service} />)
                    }
                </div>
            </section>
            
        </section>
    );
};

export default OurServices;