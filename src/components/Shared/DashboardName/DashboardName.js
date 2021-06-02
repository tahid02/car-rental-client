
 import React, { useContext } from 'react';
 import { UserContext } from '../../../App';
 


const DashboardName = ({name})=>{

    const [loggedInUser,setLoggedInUser,isAdmin,setIsAdmin,editService,setEditService,serviceInfo, setServiceInfo,show,setShow] = useContext(UserContext)

    return (
        <div className=''>

            <button onClick={()=>setShow(!show)}>
              toggle   
            </button>

            <span> {name} </span>
        </div>
        
    )
}

export default DashboardName;