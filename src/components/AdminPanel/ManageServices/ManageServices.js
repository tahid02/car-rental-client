import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import ManageServicesCard from './ManageServiceCard';

const ManageServices = () => {

    const [serviceList, setServiceList] = useState([])
    // const [loggedInUser,setLoggedInUser,isAdmin,editService] =  useContext(UserContext)

    useEffect(() => {
        fetch('https://evening-ocean-71187.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServiceList(data))
            .catch(err => console.log(err))
    }, [])


    return (
        <div className=''>

            <h5 className='my-3'>Manage Product </h5>


            <div className="row g-3">
                <div className="col-md-4">
                    <Sidebar />
                </div>
                <div className="col-md-7">
                    <table className="table table-hover text-start">
                        <thead>
                            <tr>
                                <th scope="col">Description</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                serviceList.map(service => <ManageServicesCard service={service} />)
                            }
                        </tbody>
                    </table>

                </div>
            </div>



        </div>
    );
};

export default ManageServices;