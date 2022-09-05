import React from 'react'
import { NavLink } from 'react-router-dom'
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
import FoundationPrice from './../../FoundationPrice';
import GetCatalog from './../../GetCatalog';


export default function Products() {
  return (
    <div>
      <Breadcrumbs currentPage = 'Продукция'/>
        <FoundationPrice/>
        <GetCatalog/>
    </div>
  )
}
