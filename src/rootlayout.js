import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from './Footer Component/footer';
import Header from './Header/Header';
import Main from './Main/Main';
function Rootlayout() {
  return (
    <div>
      <Outlet/>
      <Footer/>
      </div>
  )
}

export default Rootlayout;