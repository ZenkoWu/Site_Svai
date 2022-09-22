import React from 'react'
import img from '../../images/2022-09-01_18-22-28 (1).png'
import DescriptionCard from '../../components/DescriptionCard/DescriptionCard'
import Advantages from '../../components/Advantages/Advantages'
import FoundationPrice from '../../components/FoundationPrice'
import FoundationsComparison from '../../components/FoundationsComparison/FoundationsComparison'
import GetCatalog from '../../components/GetCatalog/GetCatalog'
import Carousel from '../../components/Carousel/Carousel';
import { NavLink } from 'react-router-dom';
import Tiles from '../../components/Tiles/Tiles';

export default function Main(props) {

  let descriptionCard = {
    pPadding:'p-4',
    titlePadding:'p-3',
    lh:'lh-lg',
    padding:'py-5',
    description:`Забивные сваи – это изделие из железобетона в виде стержня с квадратным 
    сечением 150х150, 200х200, 250х250 либо 300х300 мм. Для их производства используется бетон 
    класса В 22,5 – В 25.
    Для повышения износостойкости внутри сваи устанавливается стальная арматура с рифленым профилем 
    класса “А” диаметром от 1 см. Острый конец конструкции упрощает вхождение в почву и 
    закрепление в ней.`,
    title:'Почему нужно выбрать Ж/Б сваи?',
    src:'https://thumb.tildacdn.com/tild3538-3964-4531-b763-666237333662/-/resize/600x400/-/format/webp/svai.jpg'
  }

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
            <button className='col-8 bg-blue text-white fw-bold text-center fs-5' 
              style={{border:'none', height:'50px'}}>Рассчитать</button>
          </div>
        </div>
      </div>
      <img src={img} style={{ position: 'absolute'}}/>
      {/* Почему нужно выбрать Ж/Б сваи? */}
      <DescriptionCard {...descriptionCard}/>
      <Advantages/>
      <FoundationsComparison/>
      <FoundationPrice/>
      <Carousel 
        carouselItems={props.executionTypes} 
        to = '/executionTypes/'
        title ='Виды фундаментов на Ж/Б сваях'
      /> 
      <GetCatalog/>
      <Carousel 
        carouselItems={props.applicationTypes} 
        to = '/applying/'
        title ='Применение Ж/Б свай в строительстве'
      /> 
        <Tiles tileElements={props.tileElements} to='/objects/' title='Наши выполненные объекты'/>
        <div className='p-5 text-center'>
          <NavLink to='/objects'> 
            <button className='borderBlue p-3 px-5 text-white fw-bold bg-blue'>Все объекты</button>
          </NavLink>
        </div> 
    </div>
  )
}
