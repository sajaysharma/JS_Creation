import React from 'react'

const TaskList = ({data}) => {
    // console.log(data)
  return (
    <div id='taskList' className='flex overflow-x-auto items-center justify-start gap-10  flex-nowrap h-[55%] w-full py-5  mt-10'>
        <div className='h-full flex-shrink-0 w-[300px] bg-red-400 p-6 rounded-xl'>
            <div className='flex items-center justify-between '>
                <h3 className='bg-red-600 text-sm rounded-xl px-3 py-1 font-bold'>High</h3>
                <h4>25 Sep 2025</h4>
            </div>
            <h2 className='mt-5 text-3xl font-semibold'>Make a self introduction video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore minima beatae commodi quo 
                provident dicta magni vel officiis harum ab ratione.
            </p>
        </div>
        <div className='h-full flex-shrink-0 w-[300px] bg-green-400 p-6 rounded-xl'>
            <div className='flex items-center justify-between '>
                <h3 className='bg-red-600 text-sm rounded-xl px-3 py-1 font-bold'>High</h3>
                <h4>25 Sep 2025</h4>
            </div>
            <h2 className='mt-5 text-3xl font-semibold'>Make a self introduction video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore minima beatae commodi quo 
                provident dicta magni vel officiis harum ab ratione.
            </p>
        </div>
        <div className='h-full flex-shrink-0 w-[300px] bg-blue-400 p-6 rounded-xl'>
            <div className='flex items-center justify-between '>
                <h3 className='bg-red-600 text-sm rounded-xl px-3 py-1 font-bold'>High</h3>
                <h4>25 Sep 2025</h4>
            </div>
            <h2 className='mt-5 text-3xl font-semibold'>Make a self introduction video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore minima beatae commodi quo 
                provident dicta magni vel officiis harum ab ratione.
            </p>
        </div>
        <div className='h-full flex-shrink-0 w-[300px] bg-yellow-400 p-6 rounded-xl'>
            <div className='flex items-center justify-between '>
                <h3 className='bg-red-600 text-sm rounded-xl px-3 py-1 font-bold'>High</h3>
                <h4>25 Sep 2025</h4>
            </div>
            <h2 className='mt-5 text-3xl font-semibold'>Make a self introduction video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore minima beatae commodi quo 
                provident dicta magni vel officiis harum ab ratione.
            </p>
        </div>
       
    </div>
  )
}

export default TaskList