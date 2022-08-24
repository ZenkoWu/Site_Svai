import React from 'react'
import Navbar from './../Navbar/Navbar';

export default function Header() {
const BLUE = '#1f2a80'
const GRAY = '#373737'

  return (
    <div class="container">
      <div class="row">
        <div class="col-sm-8">
          <div className='row'>
              <div className='col-sm-7'>
                  <div className='row'>
                    <div className='col-sm-3 p-0'  style={{ width:'115px'}}>
                      <a href='/'>
                        <img 
                        src='https://thumb.tildacdn.com/tild6638-3066-4333-a637-663961376662/-/resize/140x/-/format/webp/__.png'
                        className='w-100'
                        />
                      </a>
                    </div>
                    <div className='col-sm-5 pt-1'>
                      Фундамент вашего дома на забивных Ж/Б сваях «под ключ» в СПб и ЛО
                    </div> 
                  </div> 
              </div>
              <div className='col-sm-5'>
                  <div className='row'>
                    <div class="col-sm-1 pt-1 fs-7">
                      <i class="fa-solid fa-location-dot fa-2x" style={{color: BLUE}}></i>
                    </div>
                    <div class="col-sm px-3">
                      г. Санкт-Петербург, Южное шоссе, дом 37, корпус 4
                    </div>
                    </div>
                  <div className='row'>
                    <div class="col-sm-1 fs-4">
                      <i class="fa-solid fa-envelope fa-2x" style={{color: BLUE, fontSize: '23px'}}></i>
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
        <div class="col-sm pt-1 " style={{paddingLeft:'25px'}}>
          <div className='row text-end '>
            <div class="col-sm-1 pt-1">
              <a href='/' style={{color: BLUE}}><i class="fa-brands fa-viber fs-3"></i></a>
            </div>
            <div class="col-sm-1 pt-1">
              <a href='/' style={{color: BLUE}}><i class="fa-solid fa-paper-plane fs-4"></i></a>
            </div>
            <div class="col-sm-1 pt-1">
              <a href='/' style={{color: BLUE}}> <i class="fa-solid fa-phone fs-4" ></i></a>
            </div>
            <div class="col-sm-9 fs-4 fw-bold p-0">
                <span>8 (812) 500-05-54</span>
            </div>
          </div>
          <div className='row pt-3 text-end' style={{paddingLeft:'80px'}}>
            <a href='/'style={{ width: '280px'}} className=' text-decoration-none'>
              <div className='text-white text-center fs-6'
              style={{ width: '100%', height: '40px', backgroundColor: BLUE, 
              paddingTop: '7px',  fontFamily: "'Gilroy',Arial,sans-serif"}}>
                Получить консультацию
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

  )
}
