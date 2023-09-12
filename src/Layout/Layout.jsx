import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Layout.css';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className=' pt-5'>
        <Navbar/>
        <div>
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}
