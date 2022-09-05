import React from 'react'
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
import { Outlet, NavLink } from 'react-router-dom';
import { TypeOfApplication } from '../Applying/Applying';
import FoundationPrice from '../../FoundationPrice';
import GetCatalog from '../../GetCatalog';

export default function ExecutionTypes() {
  return (
      <Outlet/>
  )
}


export function AllExecution() {
  return(
    <div className='mw-100'>
      <Breadcrumbs currentPage = 'Виды исполнения фундамента на ЖБ сваях'/>
      <FoundationPrice/>
      <GetCatalog/>
    </div>
  )
}

