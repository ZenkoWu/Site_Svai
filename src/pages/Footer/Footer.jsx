import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <footer>
        <div className='w-100 bgGrey colorGrey py-4' >
          <div className='row py-5'>
            <div className='col ps-5'>
              <div className='col-5'>
                <a href='/'>
                  <img 
                    src='https://thumb.tildacdn.com/tild6638-3066-4333-a637-663961376662/-/resize/140x/-/format/webp/__.png'
                    className='w-100'
                  />
                </a>
              </div>
              <div style={{fontSize:'12px'}}>
                ххххххххх
              </div>
            </div>
            <div className='col pt-1'>
              <div>
                <NavLink className='text-decoration-none text-muted fw-bold' to='/'>
                   ГЛАВНАЯ СТРАНИЦА
                </NavLink>
              </div>
              <div className='pt-3'>
                <div><NavLink className='text-decoration-none text-muted' to=''>Продукция</NavLink></div>
                <div><NavLink className='text-decoration-none text-muted' to=''>Объекты</NavLink></div>
                <div><NavLink className='text-decoration-none text-muted'to=''>Статьи</NavLink></div>
                <div><NavLink className='text-decoration-none text-muted'to=''>Контакты</NavLink></div>
              </div>
            </div>
            <div className='col pt-1'>
              <div>
                <NavLink className='text-decoration-none text-muted fw-bold' to='/'>ПРИМЕНЕНИЕ</NavLink>
              </div>
              <div className='pt-3'>
                <div><NavLink className='text-decoration-none text-muted' to=''>Для загородного дома</NavLink></div>
                <div><NavLink className='text-decoration-none text-muted' to=''>Для бани</NavLink></div>
                <div><NavLink className='text-decoration-none text-muted' to=''>Для забора</NavLink></div>
                <div><NavLink className='text-decoration-none text-muted' to=''>Для пирса и причала</NavLink></div>
                <div><NavLink className='text-decoration-none text-muted' to=''>Для производственных зданий</NavLink></div>
                <div><NavLink className='text-decoration-none text-muted' to=''>Для гаража</NavLink></div>
                <div><NavLink className='text-decoration-none text-muted' to=''>Для беседки</NavLink></div>
                <div><NavLink className='text-decoration-none text-muted' to=''>Для фонарных столбов</NavLink></div>
              </div>
            </div>
            <div className='col pt-1'>
              <div>
                <NavLink className='text-decoration-none text-muted fw-bold' to='/'>ВИДЫ ИСПОЛНЕНИЯ</NavLink>
              </div>
              <div className='pt-3'>
                <div><NavLink className='text-decoration-none text-muted' to=''>С ленточным ростверком</NavLink></div>
                <div><NavLink className='text-decoration-none text-muted' to=''>С обвязкой из бруса</NavLink></div>
                <div><NavLink className='text-decoration-none text-muted'to=''>С обвязкой швеллером</NavLink></div>
                <div><NavLink className='text-decoration-none text-muted' to=''>Для участков с уклоном</NavLink></div>
                <div><NavLink className='text-decoration-none text-muted' to=''>С установкой анкеров</NavLink></div>
                <div><NavLink className='text-decoration-none text-muted' to=''>С выпуском арматуры</NavLink></div>
                <div><NavLink className='text-decoration-none text-muted' to=''>Для мачт освещения</NavLink></div>
                <div><NavLink className='text-decoration-none text-muted' to=''>Для террасы или крыльца</NavLink></div>
              </div>
            </div>
          </div> 
        </div>
      </footer>
    </div>
  )
}
