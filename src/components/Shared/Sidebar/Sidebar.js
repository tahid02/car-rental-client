
import { faCalendar, faCog,faHome, faGripHorizontal, faPrescription, faSignOutAlt, faUser, faUserPlus, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import './Sidebar.css'

const Sidebar = () => {




    const [loggedInUser, setLoggedInUser, isAdmin, setIsAdmin, editService, setEditService, serviceInfo, setServiceInfo, show, setShow] = useContext(UserContext)
    console.log('from sidebar', show)

    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const [isAdmin, setIsAdmin] = useState(null);

    // useEffect(() => {
    //     fetch('https://evening-ocean-71187.herokuapp.com/isAdmin', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify({ email: loggedInUser.email })
    //     })
    //         .then(res => res.json())
    //         .then(data => setIsAdmin(data) );
    // }, [])

    return (
        // <div className={  ((!show || mobile ) && 'd-none')|| ( (!mobile  || show) && 'd-block') }>
        // <Slide left spy={show}>
        <div className={show ? 'd-block mx-5 mb-3' : 'd-none'}  >

            <div className="panels">

                {/* <div> 
                        <Link to="/user/profile" className='link'>
                            <div><FontAwesomeIcon icon={faUser} /> Profile </div>
                        </Link>
                        <Link to="/customer/payment" className='link'>
                            <div><FontAwesomeIcon icon={faGripHorizontal} />Payment  </div>
                        </Link>
                    {
                        !isAdmin && <Link to="/customer/reviews" className='link'>
                            <div><FontAwesomeIcon icon={faGripHorizontal} />Reviews  </div>
                        </Link>
                    }    


                        <Link to="/customer/rents" className='link'>
                            <div > <FontAwesomeIcon icon={faUsers} /> Rents </div>
                        </Link>


              {

                    isAdmin  &&  <div>
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


              } 
              </div>   */}







































                <Link to="/user/profile" className='link'>
                    <div><FontAwesomeIcon icon={faUser} /> Profile </div>
                </Link>


                {
                    isAdmin ? (<div >
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
                        <Link to="/" className='link '>
                            <div><FontAwesomeIcon icon={faHome} /> Home</div>
                        </Link>


                    </div>

                    ) : (


                        <div >
                            <Link to="/customer/payment" className='link'>
                                <div><FontAwesomeIcon icon={faGripHorizontal} />Payment  </div>
                            </Link>
                            <Link to="/customer/reviews" className='link'>
                                <div><FontAwesomeIcon icon={faGripHorizontal} /> Reviews  </div>
                            </Link>


                            <Link to="/customer/rents" className='link'>
                                <div > <FontAwesomeIcon icon={faUsers} /> Rents </div>
                            </Link>

                            <Link to="/" className='link '>
                                <div><FontAwesomeIcon icon={faHome} /> Home</div>
                            </Link>


                        </div>
                    )
                }










            </div>

        </div>
        // </Slide>
    );
};

export default Sidebar;
