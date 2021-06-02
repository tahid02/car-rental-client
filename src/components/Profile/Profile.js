import { useContext } from "react";
import { UserContext } from "../../App";
import Sidebar from "../Shared/Sidebar/Sidebar"
import DashboardName from "../Shared/DashboardName/DashboardName"




const Profile = () => {

    const [loggedInUser] = useContext(UserContext);
console.log(loggedInUser);
const {photoURL, email, name} = loggedInUser;
    
    return (
        <div>
             <div>
                <DashboardName name = {'Profile'}/>
            </div>
            <div className="d-flex">
                <div className="">
                    <Sidebar />
                </div>
                <div className="">
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