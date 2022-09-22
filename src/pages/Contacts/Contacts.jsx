import React from 'react'
import GetCatalog from '../../components/GetCatalog/GetCatalog';
import Breadcrumbs from './../../components/Breadcrumbs/Breadcrumbs';
import Tiles from '../../components/Tiles/Tiles';

export default function Contacts({articles}) {
  return (
    <div>
      <Breadcrumbs currentPage = 'Контакты'/>
      <h2 className='text-center fw-bold'>Контакты компании «СВАЯ групп»</h2>
      <div className='py-5'>
        <div className='col-5 border p-4'>
          <h4>Контакты</h4>
          <h6 className='py-3'>8 812 500-05-54</h6>
          <h6 className='py-3'>info@svayagrup.ru</h6>
          <h6 className='py-3'>Санкт-Петербург, Южное шоссе, дом 37, корпус 4</h6>
        </div>
       </div>
       <Tiles tileElements={articles} to = '/articles/' title='Наши выполненные объекты'/>
       <GetCatalog/>
    </div>
  )
}
