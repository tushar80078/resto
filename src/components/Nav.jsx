import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Nav = () => {
    const navigate=useNavigate();

    useEffect(()=>{

        if(true)
        {
          
        }
        
    },[]);
  return (
    <div>
         <nav style={{height:"5rem"}} className="navbar navbar-expand-lg bg-body-tertiary">
        
        <a className="navbar-brand mx-4" href="#"> <h3>Delicious Resto</h3></a>
        <div className='pt-5 ' style={{display:"flex",marginLeft:"22rem"}}>
            <Link style={{textDecoration:"none",color:"black"}} to="/"><h3>Home</h3></Link>
            
        <Link style={{textDecoration:"none",color:"black"}} to="/checkout"><h3 className='mx-5'>Checkout</h3></Link> 
        </div>
    </nav>
    </div>
  )
}

export default Nav