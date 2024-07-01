import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function MidHandler() {

  

    const { strMeal } = useParams();
    var a=strMeal;
    console.log(a)
    const Navigate = useNavigate();
    useEffect(() => {
        Navigate(`/main/${strMeal}`)
    
     }, );
   
  function a()
   {
    
   }
  return (
    <div className='MidHandler'  onClick={() => {Navigate(`/main/${a}`) }} >
    </div>
  )
}

export default MidHandler