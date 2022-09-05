import React from 'react'
import { NavLink } from 'react-router-dom'
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
import FoundationPrice from './../../FoundationPrice';
import GetCatalog from './../../GetCatalog';


export default function Products() {
  return (
    <div>
      <Breadcrumbs currentPage = 'Продукция'/>
        <div className='row pb-5'>
          <div className='col-6'>
            <img 
              className='w-100'
              src='https://thumb.tildacdn.com/tild3538-3964-4531-b763-666237333662/-/resize/600x400/-/format/webp/svai.jpg'/>
          </div>
          <div className='col-6 text-center'>
            <div className='h3 fw-bold p-3 pb-2'>Забивные железобетонные ЖБ сваи</div>
            <div className='blueLine w-50'></div>
            <p className='p-3 lh-md'>
              Фундамент на забивных ж/б сваях — это железобетонная конструкция, служащая основанием для возведения здания. Необходимость в применении фундаментов на жб сваях возникает при проведении строительства на участках с проблемными грунтами, в условиях которых никакое другое основание не будет обладать требуемой несущей способностью и устойчивостью к эксплуатационным нагрузкам.
            </p>
            <button className='borderBlue w-50 p-2 text-white fw-bold bg-blue'>Заказать расчет</button>
          </div>
        </div>
        {/* <div>readmore</div> */}
        <div className='text-center'>
          <h2 className='fw-bold'>Сколько стоят ЖБ сваи?</h2>
          <h5>Выберите интересующее вас сечение ЖБ сваи для открытия цены</h5>
          <div className='row justify-content-center fs-5 '>
            <div className='text-center col-2 px-2 py-3'>
              <NavLink to='' className='text-decoration-none  fw-bold colorBlue'>
                <div className='borderBlue2 text-center py-2'>
                  150x150
                </div>
              </NavLink>
            </div>
            <div className='text-center col-2 px-2 py-3'>
              <NavLink to='' className='text-decoration-none fw-bold colorBlue'>
                <div className='borderBlue2 text-center py-2'>
                  200x200
                </div>
              </NavLink>
            </div>
            <div className='text-center col-2 px-2 py-3'>
              <NavLink to='' className='text-decoration-none fw-bold colorBlue'>
                <div className='borderBlue2 text-center py-2'>
                  250x250
                </div>
              </NavLink>
            </div>
            <div className='text-center col-2 px-2 py-3'>
              <NavLink to='' className='text-decoration-none fw-bold colorBlue'>
                <div className='borderBlue2 text-center py-2'>
                  300x300
                </div>
              </NavLink>
            </div>
          </div>
          <div className='py-4'>
            <div className='border'></div>
          </div>
        </div>
        <FoundationPrice/>
        <GetCatalog/>
    </div>
  )
}
