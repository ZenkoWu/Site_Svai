import React from 'react'
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
import { Outlet, NavLink } from 'react-router-dom';
import { TypeOfApplication } from '../Applying/Applying';
import FoundationPrice from '../../Main/FoundationPrice';
import GetCatalog from '../../Main/GetCatalog';

export default function ExecutionTypes() {
  return (
      <Outlet/>
  )
}


export function AllExecution({executionTypes}) {
  return(
    <div className='mw-100'>
      <Breadcrumbs currentPage = 'Виды исполнения фундамента на ЖБ сваях'/>
      <h2 className='text-center fw-bold py-5'>Виды исполнения фундамента на ЖБ сваях</h2>
      <div className='row'>
        {executionTypes.map(item => {
                return (
                  <div className='content col-sm-6 col-md-4 col-lg-4 pt-5' key={item.id}>
                    <NavLink to={item.executionType} className='text-decoration-none'>
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
      <FoundationPrice/>
      <GetCatalog/>
    </div>
  )
}

