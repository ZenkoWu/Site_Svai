import React from 'react'
import { NavLink, useNavigate} from 'react-router-dom';

export default function NotFounded() {
  const back = useNavigate()
  const goBack = () => back(-1)

  return (
    <div className='text-center pb-5'>
      <div className='text-center'>
        <img src="https://stihi.ru/pics/2018/11/25/6536.jpg" alt="" className='w-75' />
      </div>
      <div className='row justify-content-center gx-4'>
        <div className=' col-lg-3 col-sm-6 '>
          <div className='col-12 bg-blue p-2 borderBlue'>
            <NavLink to='/' className=' text-white text-decoration-none'>Вернуться на главную страницу</NavLink>
          </div>
        </div>
        <div className=' col-lg-3 col-sm-6 '>
          <button onClick={goBack} className='col-12 bg-blue text-white p-2 borderBlue text-decoration-none'>
            Вернуться назад
          </button>
        </div>
      </div> 
    </div>
  )
}
