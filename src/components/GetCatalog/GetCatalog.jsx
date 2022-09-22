import React from 'react'

export default function GetCatalog() {
  return (
    <div className='py-5'>
         <h3 className='fw-bold text-center'>Получите каталог нашей продукции</h3>
         <h5 className='text-center'>Отправим на мессенджер PDF каталог с продукцией и примерами фундаментов на Ж/Б сваях</h5>
         <div className='row'>
          <div className='col-7 text-center'>
            <img 
            className=' h-100'
            src='https://thumb.tildacdn.com/tild6132-3961-4837-b336-643963373037/-/resize/444x/-/format/webp/mock-up-price.png'/>
          </div>
          <div className='col-4 pt-4'>
            <input type="text" placeholder='Ваше имя' class="form-control mb-3"/>
            <input type="number" class="form-control" placeholder='+7 (999)-999-99-99'/>
            <p className='pt-3 text-start fw-bold'>Куда отправить каталог?</p>
            <div className='row'>
              <div className='col-3'> 
                <img 
                src="https://static.tildacdn.com/tild3836-6538-4765-b433-643037376665/whatsapp.svg" alt="" />
               <p>WhatsApp</p>
              </div>
              <div className='col-3'> 
                <img 
                src="https://static.tildacdn.com/tild3637-6133-4338-b162-363664303062/viber.svg" alt="" />
                 <p>Viber</p>
              </div>
            </div>
            <button className='col-8 borderBlue text-white bg-blue p-2 fs-4'>получить</button>
          </div>
         </div>
      </div>
  )
}
