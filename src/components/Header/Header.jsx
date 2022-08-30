import React from 'react'
import Navbar from './../Navbar/Navbar';

export default function Header() {
  return (
    <div class="container">
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
            <Navbar/>  
          </div>
        </div>
        <div class="col-sm pt-1 ps-4 text-end">
          <div className='row'>
          <div class="col-sm-1"></div>
            <div class="col-sm-2 pt-1 p-1">
              <a href='/'><i class="fa-brands fa-viber fs-3 colorBlue"></i></a>
            </div>
            <div class="col-sm-1 pt-1 p-1">
              <a href='/'><i class="fa-solid fa-paper-plane fs-4 colorBlue"></i></a>
            </div>
            <div class="col-sm-1 pt-1 p-1">
              <a href='/'> <i class="fa-solid fa-phone fs-4 colorBlue" ></i></a>
            </div>
            <div class="col-sm-7 fw-bold p-0">
                <span style={{fontSize:'24px'}}>8 (812) 500-05-54</span>
            </div>
          </div>
          <div className='row pt-3 d-flex justify-content-end'>
            <a href='/'style={{ width: '300px'}} className=' text-decoration-none'>
              <div className='text-white text-center fs-6 fw-bolder ms-3'
              style={{ width: '100%', height: '45px', backgroundColor: '#1f2a80', 
              paddingTop: '9px', }}>
                Получить консультацию
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

  )
}
