import { Link } from "react-router-dom";
import './Navbar.css'

import { useContext } from "react";
import { UserContext } from "../../../App";
import { Nav, Navbar } from "react-bootstrap";


const Navigationbar = () => {

    const [loggedInUser, setLoggedInUser, isAdmin] = useContext(UserContext);

    return (
        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <div className="container-fluid navContainer">
        //         <div>
        //             <a className="navbar-brand" href="#">Navbar</a>
        //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-icon ms-auto navBtn"></span>
        //             </button>
        //         </div>

        //         <div className="collapse navbar-collapse " id="navbarNav">
        //             <ul className="navbar-nav ms-auto">
        //                 <li className="nav-item">
        //                 <Link  to="/" className="nav-link active" >Home </Link>
        //                 </li>
        //                 <li className="nav-item">
        //                 <Link  to="/" className="nav-link active" >Services</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link  to="/" className="nav-link active" >Testimonial</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                 <Link  to="/" className="nav-link active" >contact us</Link>
        //                 </li>
        //                 { isAdmin && <li className="nav-item">
        //                 <Link  to="/admin/rentList"  className="nav-link active" > Admin </Link>
        //                 </li>}
        //                 <li className="nav-item">
        //                    <Link to='/login'> <button className="nav-link btn btn-success active">Log in</button></Link>
        //                    {loggedInUser.name && <span> {loggedInUser.name} </span>}
        //                 </li>

        //             </ul>
        //         </div>
        //     </div>

        // </nav>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" className='d-flex justify-content-between'>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className=" justify-content-end">
                <Nav  >
                    <Nav.Link href="#" className='centerItem'>
                        <Link to="/" className="nav-link active " >Home </Link>
                    </Nav.Link>
                    <Nav.Link href="#services" className='centerItem'>
                        Services
                    </Nav.Link>
                    <Nav.Link href="#testimonial" className='centerItem'>
                        Testimonial
                    </Nav.Link>
                    <Nav.Link href="#contact" className='centerItem'>
                        Contact
                    </Nav.Link>

                    {
                        isAdmin && <Nav.Link>
                            <Link to="/admin/rentList" className="nav-link centerItem" >Admin</Link>
                        </Nav.Link>
                    }

                    <Nav.Link>
                        <Link to='/login'> <button className="nav-link btn btn-success active centerItem">Log in</button></Link>
                        {loggedInUser.name && <span> {loggedInUser.name} </span>}
                    </Nav.Link>


                </Nav>

            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigationbar;

