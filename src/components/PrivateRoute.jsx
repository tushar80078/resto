import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const data=useSelector(state=>state.restoSlice.contents);
  
         
     if(data.length<2)
     {
      alert("Please Add Atlist 2 Items For Checkout")
     }

     return <div>
      

     {
      data.length>=2? children : <Navigate to={"/"}/>
     }

     </div>
     
    

 
}

export default PrivateRoute