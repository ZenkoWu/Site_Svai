import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  let blocks = [
    {text:'Продукция', to:'products'},
    {text:' Виды исполнения', to:'performanceType'},
    {text:'Применение', to:'applying'},
    {text:'Объекты', to:'objects'},
    {text:'Статьи', to:'articles'},
    {text:'Контакты', to:'contacts'},
  ]
  return (
    <>
      {blocks.map((item, index)=>
        <div className='text-center col px-1' key = {item.index}>
        <NavLink to={item.to} className='text-decoration-none text-dark' style={{}}>
        <div style={{border: '2px solid #1f2a80',}} className='text-center py-1 activated'>
        {item.text}
      </div>
        </NavLink>
      </div>)}
    </>
    
  )
}
