
import { faCalendar, faCog, faGripHorizontal, faPrescription, faSignOutAlt, faUserPlus, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import './Sidebar.css'

const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://evening-ocean-71187.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])
    return (
        <div className="sidebar">

            <div className="panels">


                {
                    !isAdmin && <div>
                        <Link to="/customer/payment" className='link'>
                            <div><FontAwesomeIcon icon={faGripHorizontal} />Payment  </div>
                        </Link>
                        <Link to="/customer/reviews" className='link'>
                            <div><FontAwesomeIcon icon={faGripHorizontal} />Reviews  </div>
                        </Link>

                        <Link to="/customer/rents" className='link'>
                            <div > <FontAwesomeIcon icon={faUsers} /> Rents </div>
                        </Link>
                    </div>
                }



                {
                    isAdmin && <div>
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
                            <div  > <FontAwesomeIcon icon={faUsers} /> Manage Services  </div>
                        </Link>
                    </div>
                }








            </div>
            <Link to="/" className='link signOut'>
                <div>
                    <FontAwesomeIcon icon={faSignOutAlt} /> Sign Out
                </div>
            </Link>
        </div>
    );
};

export default Sidebar;
