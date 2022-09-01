import React from 'react'
import { NavLink } from 'react-router-dom';

export default function NotFounded() {
  return (
    <div className='text-center'>
        <div className='text-center'>
            <img src="https://stihi.ru/pics/2018/11/25/6536.jpg" alt="" className='w-75' />
        </div>
        <NavLink to='/' className='bg-blue text-white p-2 borderBlue text-decoration-none'>Вернуться на главную страницу</NavLink>
        <div>
        
        </div>
    </div>
  )
}
