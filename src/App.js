import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { login, logout, selectUser } from "./features/userSlice"
import './App.css';

// Components
import Login from './Login';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { auth } from './firebase';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
        }))
      } else {
        // user is logged out
        dispatch(logout())
      }
    })
  })

  return (
    <div className="app">      
      <Header />
      
      {!user ? (
      <Login />
      ) : (
        <div className="app_body">
          <Sidebar />
          <Feed />
           {/* // Widgets */}
        </div> 
      )}
    </div>    
  );
}

export default App;



var twoSum = function(nums, target) {
  const newNums = [];
  nums.forEach(num => {
      if (num < target) {
          newNums.push(num)            
      };
      const div = target - num;
      newNums.forEach(num => {
       if (num === div) {
           return [num, div]
       }
  })});  
};