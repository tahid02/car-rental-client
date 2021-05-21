import { useContext } from "react";
import { UserContext } from "../../App";
import Sidebar from "../Shared/Sidebar/Sidebar"




const Profile = () => {

    const [loggedInUser] = useContext(UserContext);
console.log(loggedInUser);
const {photoURL, email, name} = loggedInUser;
    
    return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <Sidebar />
                </div>
                <div className="col-md-4">
                    <img src={photoURL} alt="user img" />
                    {name}
                    <p>
                        {email}
                    </p>
                    <button className="btn btn-danger">Sign Out </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;