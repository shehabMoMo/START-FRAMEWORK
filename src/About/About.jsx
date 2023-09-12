import React from 'react';
import './About.css';
import Break from '../Break/Break';

export default function About() {
  return (<div className='bg-page py-5'>
    <div className=' w-50 mx-auto text-center mt-5 pt-5'>
      <h2 className='fs-1 fw-bold mt-5'>ABOUT COMPONENT</h2>
      <div className='break position-relative text-white'>
        <div className='break-1 position-absolute bg-white'></div>
        <i className="fa-solid fa-star"></i>
        <div className='break-2 position-absolute bg-white'></div>
      </div>
      </div>
      <div className='w-75 mx-auto row g-3 text-start mt-2 my-5 pb-5'>
      <div className='col-md-6 mt-2'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
      <div className='col-md-6 mt-2'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
      </div>
    
    </div>
  )
}
