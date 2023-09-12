import React from 'react';
import './Break.css';

export default function Break() {
  return (
    <div className='break position-relative text-white'>
        <div className='break-1 position-absolute bg-white'></div>
        <i className="fa-solid fa-star"></i>
        <div className='break-2 position-absolute bg-white'></div>
      </div>
  )
}
