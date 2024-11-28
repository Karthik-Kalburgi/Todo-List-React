'use client'

import React, { useState } from 'react'

const page = () => {
  const [title,settitle] = useState('');
  const [desc,setdesc] = useState('');
  const submitHandler=(e)=>{
    
    e.preventDefault();
    console.log(title);
    
    settitle('')
    setdesc('')
    
    
  }

  return (
    <>
    
    <h1 className='bg-black py-3 text-white text-center text-3xl font-bold '>Karthik Todo List</h1>
    <form onSubmit={submitHandler}>
    <input className='-full p-4 text-xl border-8 border-green-400 mb-5 mt-10 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500  hover:border-blue-400 transition-all pe-8 m-8 py-2 px-8  ' value={title}  onChange={(e)=>{
        settitle(e.target.value);
    }}    type='text' placeholder='Enter the Title'></input>
    
    <input className='-full p-4 text-xl border-8 border-green-400 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500  hover:border-blue-400 transition-all   m-8 py-2 px-8 ' value={desc} onChange={(e)=>{
      setdesc(e.target.value);
    }} type='text' placeholder='Enter the Description'></input>
    <button className='bg-black text-white text-4xl border rounded-lg p-2.5'>Add Task</button>
    </form>




    </>
  )
}

export default page