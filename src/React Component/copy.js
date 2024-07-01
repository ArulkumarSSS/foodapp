import React from 'react'
import {Outlet, useParams} from 'react-router-dom'
import Footer from './Footer Component/footer';
import Header from './Header/Header';
import Main from './Main/Main';
function Copy() {
  const {strCategory} = useParams();
  console.log({strCategory})
  return (
   
    <div>
      "adsfvgcbv"
      {strCategory}
      </div>
  )
}

export default Copy;