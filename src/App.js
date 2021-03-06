import './App.css';
import Home from './components/Home/Home/Home';
import Navigationbar from './components/Shared/Navbar/Navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllRents from './components/AdminPanel/AllRents/AllRents';
import AddServices from './components/AdminPanel/AddServices/AddServices';
import AddAdmin from './components/AdminPanel/AddAdmin/AddAdmin';
import Payment from './components/Customer/Payment/Payment';
import Rents from './components/Customer/Rents/Rents';
import { createContext, useEffect, useLayoutEffect, useState } from 'react';
import LogIn from './components/LogIn/LogIn';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Reviews from './components/Customer/Reviews/Reviews'
import ManageServices from './components/AdminPanel/ManageServices/ManageServices';
import EditServices from './components/AdminPanel/ManageServices/EditServices';
import Profile from './components/Profile/Profile';
// import { useMediaQuery } from 'react-responsive';

export const  UserContext = createContext()

function App() {


  const [loggedInUser,setLoggedInUser] = useState(false )
  const [isAdmin, setIsAdmin] = useState(false);
  const [editService,setEditService] = useState({});
  const [serviceInfo, setServiceInfo] = useState({});
  const [show, setShow] = useState(false)


  // const handleMediaQueryChange = (matches) => {
  //   console.log('mobile',matches)
  //   // setShow(!matches)
  //   console.log('show',show)
    
  // }
  // const isTabletOrMobile  = useMediaQuery(
  //   { maxWidth: 920 }, undefined,  handleMediaQueryChange
  // );
  // console.log('mobile or table size',isTabletOrMobile )


console.log('see show',show)

  useEffect(() => {
    fetch('https://evening-ocean-71187.herokuapp.com/isAdmin', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email: loggedInUser.email })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
           setIsAdmin(data);
        });
}, [loggedInUser?.email])


  return (
    <UserContext.Provider value={ [loggedInUser,setLoggedInUser,isAdmin,setIsAdmin,editService,setEditService,serviceInfo, setServiceInfo,show,setShow] }>
    <Router>
      

      <Switch>

      <Route path="/payment/:id">
          <Payment />
        </Route>

        <PrivateRoute path="/admin/rentList" >
         <AllRents/>
        </PrivateRoute>
        
        <PrivateRoute path="/admin/addService">
         <AddServices />
        </PrivateRoute>

        <PrivateRoute path="/admin/addAdmin">
          <AddAdmin />
        </PrivateRoute>

        <PrivateRoute path="/admin/manageServices">
          <ManageServices />
        </PrivateRoute>
        <PrivateRoute path="/admin/editService">
          <EditServices />
        </PrivateRoute>

        <PrivateRoute path="/customer/rents">
          <Rents />
        </PrivateRoute>
        <PrivateRoute path="/customer/payment">
          <Payment />
        </PrivateRoute>

        <PrivateRoute path="/customer/reviews">
          <Reviews />
        </PrivateRoute>

        <PrivateRoute path="/user/profile">
          <Profile />
        </PrivateRoute>



        
        

        <Route path="/login">
          <LogIn />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

    </Router>

</UserContext.Provider>
  );
}

export default App;
