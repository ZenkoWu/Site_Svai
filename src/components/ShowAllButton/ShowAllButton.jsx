import React from 'react'
import { NavLink } from 'react-router-dom';

export default function ShowAllButton({all, to}) {
  return (
    <div className='p-5 text-center'>
      <NavLink to='/objects'> 
        <button className='borderBlue p-3 px-5 text-white fw-bold bg-blue'>Все {all}</button>
      </NavLink>
    </div> 
  )
}
