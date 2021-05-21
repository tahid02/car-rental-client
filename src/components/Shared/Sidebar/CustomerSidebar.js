import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCog, faGripHorizontal, faPrescription, faSignOutAlt, faUserPlus, faUsers } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import { Link } from 'react-router-dom';

const CustomerSidebar = () => {
    return (
        <div>
            <div className="sidebar">

                <div className="panels">

                    <div>
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

export default CustomerSidebar;