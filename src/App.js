import React from 'react';
import './App.css';
import HomeScreen from "./screens/HomeScreen.js";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { useEffect } from "react" ; 
import { auth } from './firebase';
import { useDispatch , useSelector } from "react-redux";
import { login, logout , selectUser } from "./features/userSlice" ; 
import ProfileScreen from './screens/ProfileScreen';





function App() {
  
  const user = useSelector(selectUser) ;   
  const dispatch = useDispatch();
  
  useEffect(() => {
   
       const unsubscibe = auth.onAuthStateChanged(userAuth =>{
         if(userAuth)
         {
            // Logged in 
            dispatch(login({
              uid: userAuth.uid ,
              email: userAuth.email,
            }));                

         }
         else{
          //  Logged out 
           dispatch(logout());
         }
       })

       return unsubscibe ; 

  }, [dispatch])
  
  return (
    <div className="app">

                    <Router>
                     
                     {!user ? ( <LoginScreen /> ) :
                    
                    (<Switch>
                          
                        <Route path="/profile">
                           <ProfileScreen />
                        </Route>

                        <Route exact path="/">
                          <HomeScreen/>
                        </Route>
                     </Switch> )}
                 
                  </Router>

    </div>
  );
}

export default App;
