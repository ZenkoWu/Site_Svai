import React from 'react'

export default function Component1({src, title, description}) {
  return (
    <div>
         <div className='p-0'>
        <div className='row'>
            <div className='col-lg-6'>
                <img src={src} className='mw-100' />
            </div>
            <div className='col-lg-6 pt-5 text-center'>
                <div className='h3 fw-bold text-center pt-4'>{title}</div>
                <div className='w-50 blueLine p-3'></div>
                <div className='p-5'>{description}</div>
                <button className='borderBlue  w-50 p-3 text-white fw-bold bg-blue' onClick={() => console.log('click')}>Заказать расчет</button>
            </div>
        </div>
    </div>
    </div>
  )
}
