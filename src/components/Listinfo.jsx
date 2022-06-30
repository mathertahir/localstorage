import React, { useEffect, useLayoutEffect, useState } from 'react'
import Listcard from './Listcard'
import "./style.css"

const Listinfo = () => {
    let [data,setData]=useState([])
    useLayoutEffect(()=>{
        
        for (let [value] of Object.entries(localStorage)) {
            
           data.push((JSON.parse(localStorage.getItem(value))))
           

           
        }

       console.log(data);
        
         

    })
    
  return (
    <div className='container he'>
        <u><h1 >List Information</h1></u>
        
{data.map(n=>(<h1>{n.email}</h1>))}
        
      
        
    </div>
  )
}

export default Listinfo