import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";


const App = () => {

  const [user, setUser ] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const Authdata = useContext(AuthContext)
  
  // useEffect(() => {
  //   if(Authdata){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // }, [Authdata]);

  const handleLogin = (email, password) => {
    if(email == 'ajay@me.com' && password == 123){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role : 'admin'}))
    }else if(Authdata){
      const employee = Authdata.employees.find((e) => e.email == email && e.password == password)
      if(employee){
        setUser('employee')
        setloggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role : 'employee'}))
      }
    }else{
      alert("Invalid Credential !")
    }
  }


  return (
    <>
      {!user ? <Login handleLogin = {handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard/> : (user == 'employee' ? <EmployeeDashboard data={loggedInUserData} /> : null) }
    </>
  )
}

export default App;