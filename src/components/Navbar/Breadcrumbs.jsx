import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Breadcrumbs({currentPage}) {
  return (
    <div className='p-3'>
        <NavLink to ='/' className='px-2'>
          <i class="fa-solid fa-house fs-6" style={{color: '#1f2a80'}}></i>  
        </NavLink>
       <span class="fa-solid fa-arrow-right-long px-2"></span>
     <span className='fw-bold'>{currentPage}</span>
  </div>
  )
}
