import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  let blocks = [
    {text:'Продукция', to:'products'},
    {text:' Виды исполнения', to:'executionTypes'},
    {text:'Применение', to:'applying'},
    {text:'Объекты', to:'objects'},
    {text:'Статьи', to:'articles'},
    {text:'Контакты', to:'contacts'},
  ]
  return (
    <div class="container App">
      <div class="row">
        <div class="col-sm-8">
          <div className='row'>
              <div className='col-sm-7'>
                  <div className='row'>
                    <div className='col-sm-3 p-0' style={{ width:'115px'}}>
                      <a href='/'>
                        <img alt='/'
                        src='https://thumb.tildacdn.com/tild6638-3066-4333-a637-663961376662/-/resize/140x/-/format/webp/__.png'
                        className='w-100'
                        />
                      </a>
                    </div>
                    <div className='col-sm-6 pt-1' >
                      Фундамент вашего дома на забивных Ж/Б сваях «под ключ» в СПб и ЛО
                    </div> 
                  </div> 
              </div>
              <div className='col-sm-5'>
                  <div className='row'>
                    <div class="col-sm-1 pt-1 fs-7">
                      <i class="fa-solid fa-location-dot fa-2x colorBlue"></i>
                    </div>
                    <div class="col-sm px-3 lh-sm">
                      г. Санкт-Петербург, Южное шоссе, дом 37, корпус 4
                    </div>
                    </div>
                  <div className='row'>
                    <div class="col-sm-1 fs-7">
                      <i class="fa-solid fa-envelope fa-2x colorBlue"></i>
                    </div>
                    <div class="col-sm px-3 fs-5">
                      info@svayagrup.ru
                    </div>
                  </div>
              </div>
          </div>
          <div className='row'>
          {blocks.map((item, index)=>
            <div className='text-center col px-1 py-3' key = {item.index}>
              <NavLink to={item.to} className='text-decoration-none text-dark fw-bolder text-nowrap'>
            <div className=' borderBlue2 text-center py-1 activated px-1'>
              {item.text}
            </div>
              </NavLink>
            </div>)}  
          </div>
        </div>
        <div class="col-sm pt-1 ps-4 text-end">
          <div className='row'>
          <div class="col-lg-1"></div>
            <div class="col-lg-2 col-sm-4 pt-1 p-1">
              <a href='/'><i class="fa-brands fa-viber fs-3 colorBlue"></i></a>
            </div>
            <div class="col-lg-1 col-sm-4 pt-1 p-1">
              <a href='/'><i class="fa-solid fa-paper-plane fs-4 colorBlue"></i></a>
            </div>
            <div class="col-lg-1 col-sm-4 pt-1 p-1">
              <a href='/'> <i class="fa-solid fa-phone fs-4 colorBlue" ></i></a>
            </div>
            <div class="col-lg-7 fw-bold p-0">
                <span style={{fontSize:'24px'}}>8 (812) 500-05-54</span>
            </div>
          </div>
          <div className='row pt-3 d-flex justify-content-end'>
            <button className='text-white fs-6 fw-bolder w-75'
              style={{ height: '45px', backgroundColor: '#1f2a80', border:'none' }}>
              Получить консультацию
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
