import React from 'react'
import { Header } from '../common/Header'
import TaskListNumber from '../common/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data}) => {
  
  return (
    <div className='p-15 bg-[#1c1c1c] h-screen'>
         {/* <h1>{data.id}</h1> */}
        <Header data = {data} />
        <br /> <br />
        <TaskListNumber data = {data} />
        <TaskList data = {data} />
    </div>
  )
}

export default EmployeeDashboard