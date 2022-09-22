import React from 'react'

export default function DescriptionCard(props) {
let {src, title, description, padding, titlePadding, lh, pPadding, linePadding, button, imgTopP} = {...props}
  return (
    <div className={`row pb-5 clear ${padding}`}>
      <div className='col-6'>
        <img 
          className={`w-100 ${imgTopP}`}
          src={src}/>
      </div>
      <div className='col-6 pt-5 text-center'>
        <div className={`h3 fw-bold ${titlePadding}`}>{title}</div>
        <div className={`blueLine w-50 ${linePadding}`}></div>
        <p className={`${pPadding} ${lh}`} >
          {description}
        </p>
          {button ?
           <button className='borderBlue w-50 p-2 text-white fw-bold bg-blue'>Заказать расчет</button> 
          : null }
      </div>
    </div>
  )
}
// Карточка - блок с картинкой и текстом-описанием рядом, кнопка является опциональной и
//  указывается в передаваемом объекте; в объекте также указываются определенные стили в зависимости 
// от места использования карточки