
import { faCalendar, faCog, faGripHorizontal, faPrescription, faSignOutAlt, faUserPlus, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
    return (
        <div>
            <div className="sidebar">

                <div className="panels">




                    <div>
                        <Link to="/admin/rentList" className='link'>
                            <div ><FontAwesomeIcon icon={faGripHorizontal} /> Rent List  </div>
                        </Link>



                        <Link to="/admin/addService" className='link'>
                            <div > <FontAwesomeIcon icon={faCalendar} /> Add Service </div>
                        </Link>


                        <Link to="/admin/addAdmin" className='link'>
                            <div  > <FontAwesomeIcon icon={faUsers} /> Add Admin  </div>
                        </Link>

                        <Link to="/admin/manageServices" className='link'>
                            <div  > <FontAwesomeIcon icon={faUsers} /> Manage your Services  </div>
                        </Link>
                    </div>



                </div>



                <Link to="/" className='link signOut'>
                    <div>
                        <FontAwesomeIcon icon={faSignOutAlt} /> Sign Out
                     </div>
                </Link>
                
            </div>
        </div>
    );
};

export default AdminSidebar;