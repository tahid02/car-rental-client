


import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
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
            <h4 className='text-center'> Rents </h4>
            <div className="row g-3">
                <div className="col-md-4">
                    <Sidebar />
                </div>
                <div className="col-md-8">
                    
                        {
                            userRents.map(rent => <RentsCard {...rent} />)
                        }
                    

                </div>
            </div>

        </div>
    );
};

export default Rents;