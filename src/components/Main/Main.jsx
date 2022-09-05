import React from 'react'
import img from '../../imges/2022-09-01_18-22-28 (1).png'
import Advantages from './Advantages'
import FoundationPrice from './FoundationPrice'
import FoundationsComparison from './FoundationsComparison'
import GetCatalog from './GetCatalog'

export default function Main() {
  return (
    <div className=''>
      <div className=' mt-5 borderBlue' style={{ float: 'right', width: '75%', textAlign:'right', paddingLeft:'240px',}}>
        <div className='text-start p-4'>
          <h4 className='fw-bold'>Фундамент вашего дома на Ж/Б сваях «под ключ» за 1 день всего от 35 990 ₽!</h4>
          <p>
            Рассчитайте стоимость за 2 минуты ответив всего на 6
            простых вопроса и получите расчёт стоимости <strong>фундамента на Ж/Б сваях «под ключ»</strong>.
          </p>
          <p className='text-decoration-underline text-center'>а так же получите в подарок:</p>
          <div className='row pt-2 px-5'>
            <div className='col'>
              <p className='py-2 px-3 text-center bonusStyle'>
                PDF прайс-лист актуальных цен на 2022 год и примеры ж/б фундаментов для постройки дома
                или бани
              </p>
            </div>
            <div className='col'>
              <p className=' p-3 text-center bonusStyle'>
                Получите бесплатный замер участка + расчет свайного поля
              </p>
            </div>
          </div>
          <img src="https://thumb.tildacdn.com/tild3432-3565-4432-a239-663862326131/-/resize/88x/-/format/webp/arrow.png" 
            style={{maxHeight:'75px'}}
            className='px-4'/>
          <div className='text-center '>
            <button className=' col-8 bg-blue text-white fw-bold text-center fs-5' 
              style={{border:'none', height:'50px'}}>Рассчитать</button>
          </div>
        </div>
      </div>
      <img src={img} style={{ position: 'absolute'}}/>
      <div className='row py-5' style={{clear:'both'}}>
        <div className='col-6'>
          <img 
            className='w-100'
            src='https://thumb.tildacdn.com/tild3538-3964-4531-b763-666237333662/-/resize/600x400/-/format/webp/svai.jpg'/>
        </div>
        {/* Почему нужно выбрать Ж/Б сваи? */}
        <div className='col-6 text-center'>
          <div className='h3 fw-bold p-3'>Почему нужно выбрать Ж/Б сваи?</div>
          <div className='blueLine w-50'></div>
          <p className='p-4 lh-lg'>
            Забивные сваи – это изделие из железобетона в виде стержня с квадратным сечением 150х150, 200х200, 250х250 либо 300х300 мм. Для их производства используется бетон класса В 22,5 – В 25.
           <br/> Для повышения износостойкости внутри сваи устанавливается стальная арматура с рифленым профилем класса “А” диаметром от 1 см. Острый конец конструкции упрощает вхождение в почву и закрепление в ней.
          </p>
        </div>
      </div>
      <Advantages/>
      <FoundationsComparison/>
      <FoundationPrice/>
      {/* <FoundationTypes/> */}
      <GetCatalog/>
    </div>
  )
}
