import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import FoundationPrice from '../../Main/FoundationPrice';
import GetCatalog from '../../Main/GetCatalog';
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';

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
          <div className='fw-bold text-center h1'>
            Применение ЖБ свай в строительстве
          </div>
          <div className='row'>
            {applicationTypes.map(item => {
              return (
                <div className='content col-sm-6 col-md-4 col-lg-4 pt-5' key={item.id}>
                  <NavLink to={item.applyType} className='text-decoration-none'>
                    <img src={item.imgSrc.small} alt="" className='w-100 pb-3' style ={{maxHeight:'313px'}}/>
                    <div className='text-center fw-bold fs-6 colorGrey'>{item.title}</div>
                    <div className='text-center p-4'>
                      <button className='borderBlue w-50 p-2 colorBlue fw-bold'>Подробнее</button>
                    </div>
                  </NavLink>
                </div>
              )
            }
            )}
          </div>
      </div>
      <FoundationPrice/>
      <GetCatalog/>
  </div>
  )
}





