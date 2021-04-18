import { useState,useEffect } from "react";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import AllRentsCard from "./AllRentsCard";


const AllRents = () => {


    const [allRents,setAllRents] = useState([])


    useEffect( () => {
        fetch('https://evening-ocean-71187.herokuapp.com/allRents')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setAllRents(data)
        })
    },[])



    // {
    //     _id: 607b0e808265a10394b46770,
    //     email: 'tanzim1463@gamil.com',
    //     serviceInfo: {
    //       _id: '607aca417202d403404c9b51',
    //       type: 'Jeep',
    //       price: '280',
    //       description: 'A coupe is classically defined as a closed two-door car with a fixed roof. Considered sporty by nature, it generally gets just 2 seats or
    // with a smaller-than-average rear.',
    //       imageURL: 'https://i.ibb.co/G5f4ZzB/jeep.png'
    //     },
    //     payment: {
    //       name: 'tanzim',
    //       email: 'tanzim1463@gamil.com',
    //       address: 'uttara dhaka',
    //       phone: '01873864478'
    //     },
    //     paymentId: 'pm_1IhH86Cg8x03sdelnLT9feog',
    //     orderTime: 'Sat Apr 17 2021'
    //   }


    console.log('all rents',allRents)
    return (
        <section className="container-fluid">
        <div className="row">
            <div className="col-md-4">
                <Sidebar />
            </div>
            <div className="col-md-8">
            {
                    allRents.map(rent => <AllRentsCard {...rent} />)
                }
            </div>
        </div>
    </section>
    );
};

export default AllRents;