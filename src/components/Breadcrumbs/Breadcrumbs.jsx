import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Breadcrumbs({currentPage, prevPage,to}) {
  return (
    <div className='p-3'>
      <NavLink to ='/' className='px-2 text-decoration-none'>
        <span className='colorGrey'>Главная</span>
      </NavLink>
      {prevPage ?  
      <>
        <span class="fa-solid fa-arrow-right-long px-2"></span>
        <NavLink to={to} className='px-2 text-decoration-none'>
          <span className='colorGrey'>{prevPage}</span>
        </NavLink>
        <span class="fa-solid fa-arrow-right-long px-2"></span>
        <span className='fw-bold'>{currentPage}</span> 
      </> 
      : 
      <>
        <span class="fa-solid fa-arrow-right-long px-2"></span>
        <span className='fw-bold'>{currentPage}</span>
      </> 
      }  
  </div>
  )
}
