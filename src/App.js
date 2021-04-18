import './App.css';
import Home from './components/Home/Home/Home';
import Navbar from './components/Shared/Navbar/Navbar';

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
import { createContext, useState } from 'react';
import LogIn from './components/LogIn/LogIn';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Reviews from './components/Customer/Reviews/Reviews'
import ManageServices from './components/AdminPanel/ManageServices/ManageServices';

export const  UserContext = createContext()

function App() {


  const [loggedInUser,setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={ [loggedInUser,setLoggedInUser] }>
    <Router>
      <Navbar name={loggedInUser.name}/>

      <Switch>

        <PrivateRoute path="/admin/rentList">
         <AllRents />
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

        <PrivateRoute path="/customer/rents">
          <Rents />
        </PrivateRoute>

        <PrivateRoute path="/customer/reviews">
          <Reviews />
        </PrivateRoute>

        
        <PrivateRoute path="/payment/:id">
          <Payment />
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
