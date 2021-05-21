import { Link } from "react-router-dom";
import './Navbar.css'

import { useContext } from "react";
import { UserContext } from "../../../App";


const Navbar = () => {

        const [loggedInUser, setLoggedInUser,isAdmin ] = useContext(UserContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid navContainer">
                <div>
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon ms-auto navBtn"></span>
                    </button>
                </div>

                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                        <Link  to="/" className="nav-link active" >Home </Link>
                        </li>
                        <li className="nav-item">
                        <Link  to="/" className="nav-link active" >Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link  to="/" className="nav-link active" >Testimonial</Link>
                        </li>
                        <li className="nav-item">
                        <Link  to="/" className="nav-link active" >contact us</Link>
                        </li>
                        { isAdmin && <li className="nav-item">
                        <Link  to="/admin/rentList"  className="nav-link active" > Admin </Link>
                        </li>}
                        <li className="nav-item">
                           <Link to='/login'> <button className="nav-link btn btn-success active">Log in</button></Link>
                           {loggedInUser.name && <span> {loggedInUser.name} </span>}
                        </li>
                        
                    </ul>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;