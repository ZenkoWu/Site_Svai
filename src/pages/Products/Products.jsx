import React from 'react'
import { NavLink } from 'react-router-dom'
import Breadcrumbs from './../../components/Breadcrumbs/Breadcrumbs';
import DescriptionCard from '../../components/DescriptionCard/DescriptionCard';
import ReadMore from './../../components/ReadMore/ReadMore';
import FoundationPrice from './../../components/FoundationPrice';
import GetCatalog from '../../components/GetCatalog/GetCatalog';
import Tiles from '../../components/Tiles/Tiles';


export default function Products(props) {

  let descriptionCard = {
    button: 'true',
    pPadding:'p-3',
    titlePadding: 'pb-2',
    lh:'lh-md',
    padding:'pb-5',
    description:`Фундамент на забивных ж/б сваях — это железобетонная конструкция, 
    служащая основанием для возведения здания. Необходимость в применении фундаментов на жб сваях 
    возникает при проведении строительства на участках с проблемными грунтами, в условиях которых 
    никакое другое основание не будет обладать требуемой несущей способностью и устойчивостью к 
    эксплуатационным нагрузкам.`,
    title:'Забивные железобетонные ЖБ сваи', 
    src:'https://thumb.tildacdn.com/tild3538-3964-4531-b763-666237333662/-/resize/600x400/-/format/webp/svai.jpg'
  }
  let more = `Фундаменты на забивных железобетонных сваях, среди всех видов оснований,
   отличаются максимальной несущей способностью — они не имеют ограничений по массогабаритным 
   характеристикам возводимых зданий, на таких фундаментах могут строиться даже тяжелые многоэтажные 
   сооружения из кирпича с железобетонными перекрытиями. Фундаменты на забивных ж/б сваях показывают 
   превосходные показатели надежности, долговечности и обладают отличной несущей способностью.`
  return (
    <div>
      <Breadcrumbs currentPage = 'Продукция'/>
        <DescriptionCard {...descriptionCard}/>
        <ReadMore more={more}/>
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
          <Tiles tileElements ={props.articles} to='/articles/' title='Полезные статьи о Ж/Б сваях'/>
          <div className='p-5 text-center'>
          <NavLink to='/articles'> 
            <button className='borderBlue p-3 px-5 text-white fw-bold bg-blue'>Все статьи</button>
          </NavLink>
          </div>
        <GetCatalog/>
        <Tiles tileElements={props.objects} to='/objects/' title='Наши выполненные объекты'/>
        <div className='p-5 text-center'>
          <NavLink to='/objects'> 
            <button className='borderBlue p-3 px-5 text-white fw-bold bg-blue'>Все объекты</button>
          </NavLink>
        </div>
    </div>
  )
}
