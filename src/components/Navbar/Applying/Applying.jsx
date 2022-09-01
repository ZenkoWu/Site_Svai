import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import Breadcrumbs from '../Breadcrumbs';

export default function Applying(props) {
  return (
    <Outlet/>
  )
};

 export function AllApplication({applicationTypes}) {
  return(
    <div className='mw-100'>
    <Breadcrumbs currentPage = 'Применение ЖБ свай в строительстве'/>
    <div className='pt-5'>
      <div>
        <div className='fw-bold text-center h1'>
        Применение ЖБ свай в строительстве
        </div>
        <div className='row'>
          {applicationTypes.map(item => 
          <TypeOfApplication key={item.id} to={item.applyType} src={item.imgSrc.small} title ={item.title}/>)}
        </div>
      </div>
    </div>

  </div>
  )
}

function TypeOfApplication (props) {
  return (
    <div className='content col-sm-6 col-md-4 col-lg-4 pt-5'>
      <NavLink to={props.to} className='text-decoration-none'>
        <img src={props.src} alt="" className='w-100 pb-3' style ={{maxHeight:'313px'}}/>
        <div className='text-center fw-bold fs-6 colorGrey'>{props.title}</div>
        <div className='text-center p-4'>
          <button className='borderBlue text-center w-50 p-2 colorBlue fw-bold'>Подробнее</button>
        </div>
      </NavLink>
    </div>
  )
}





