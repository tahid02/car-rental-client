


import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import DashboardName from '../../Shared/DashboardName/DashboardName';
import RentsCard from './RentsCard';

const Rents = () => {

    const [loggedInUser] = useContext(UserContext)
    const [userRents, setUserRents] = useState([])


    useEffect(() => {

        fetch(`https://evening-ocean-71187.herokuapp.com/userRents?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {
                console.log('user rented data ',data)
                setUserRents(data)
            })
    }, [])




    console.log('userRents', userRents)
    return (
        <div className='mt-3'>
            <div>
                <DashboardName name = {'payment'}/>
            </div>
            <div className="d-flex">

            <div className=' ' style={{height:'100vh'}}>
                <Sidebar />
            </div>

                <div className="">
                
                        {
                            userRents.map(rent => <RentsCard {...rent} />)
                        }
                    

                </div>
            </div>

        </div>
    );
};

export default Rents;