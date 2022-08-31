import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import Breadcrumbs from '../Breadcrumbs';

export default function Applying(props) {
  return (
    <Outlet/>
  )
};


 export function AllApplication() {
  let modes = [
    {to:'/', 
    src:'https://thumb.tildacdn.com/tild3634-3965-4337-b562-303138666631/-/cover/360x300/center/center/-/format/webp/house.jpg',
    title:'Для строительства загородного дома',
  },
    {to:'for-building-a-bath', 
    src:'https://thumb.tildacdn.com/tild6535-3261-4333-a361-343466613666/-/cover/360x300/center/center/-/format/webp/banya.jpg',
    title:'Для строительства бани',
  },
    {to:'/', 
    src:'https://thumb.tildacdn.com/tild6462-6436-4333-a532-303466653531/-/cover/360x300/center/center/-/format/webp/zabor.jpg',
    title:'Для строительства забора',
  },
    {to:'/', 
      src:'https://thumb.tildacdn.com/tild6661-3636-4838-b737-363064303437/-/format/webp/terace.jpg',
      title:'Для строительства крыльца или террасы',
    },
    {to:'/', 
      src:'https://thumb.tildacdn.com/tild3632-6232-4263-b237-643037383538/-/cover/360x300/center/center/-/format/webp/besedka.jpg',
      title:'Для строительства беседки',
    },
    {to:'/', 
      src:'https://static.tildacdn.com/tild3465-3465-4836-b362-636563663931/pirs.jpg',
      title:'Для строительства пирса или причала',
    },
  ]

  return(
    <div className='mw-100'>
    <Breadcrumbs currentPage = 'Применение ЖБ свай в строительстве'/>
    <div className='pt-5'>
      <div>
        <div className='fw-bold text-center h1'>
        Применение ЖБ свай в строительстве
        </div>
        <div className='row'>
          {modes.map(item => <ModeOfApplication key={item.key} to={item.to} src={item.src} title ={item.title}/>)}
        </div>
      </div>
    </div>

  </div>
  )
}

function ModeOfApplication (props) {
  return (
    <div className='content col-sm-6 col-md-4 col-lg-4 pt-5'>
      <NavLink to={props.to} className='text-decoration-none'>
        <img src={props.src} alt="" className='w-100 pb-3' style ={{maxHeight:'313px'}}/>
        <div className='text-center fw-bold fs-6 colorGrey'>{props.title}</div>
        <div className='text-center p-4'>
          <button className='borderBlue text-center w-50 p-2 colorBlue fw-bold'>Подробнее</button>
        </div>
      </NavLink>
    </div>
  )
}





