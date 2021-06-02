import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import ManageServicesCard from './ManageServiceCard';
import DashboardName from "../../Shared/DashboardName/DashboardName";


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

            <div>
                <DashboardName name = {'Manage Services'}/>
            </div>


            <div className="d-flex">
                <div className="">
                    <Sidebar />
                </div>
                <div className="">
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