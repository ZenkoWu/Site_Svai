import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  let blocks = [
    {text:'Продукция', to:'products'},
    {text:' Виды исполнения', to:'executionTypes'},
    {text:'Применение', to:'applying'},
    {text:'Объекты', to:'objects'},
    {text:'Статьи', to:'articles'},
    {text:'Контакты', to:'contacts'},
  ]
  return (
    <>
      {blocks.map((item, index)=>
        <div className='text-center col px-1 py-3' key = {item.index}>
        <NavLink to={item.to} className='text-decoration-none text-dark fw-bolder text-nowrap'>
        <div className=' borderBlue2 text-center py-1 activated px-1'>
        {item.text}
      </div>
        </NavLink>
      </div>)}
    </>
    
  )
}
