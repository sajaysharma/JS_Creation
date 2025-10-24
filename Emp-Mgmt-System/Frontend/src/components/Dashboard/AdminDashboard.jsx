import React from 'react'
import { Header } from '../common/Header'
import CreateTask from '../common/CreateTask'
import AllTask from '../common/AllTask'

const AdminDashboard = () => {
   return (
      <>
         <div className=' h-screen w-full p-7'>
            <Header />
            <CreateTask/>
            <AllTask/>
         </div>
      </>
   )
}

export default AdminDashboard