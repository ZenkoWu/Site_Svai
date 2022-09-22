import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

export default function Carousel({carouselItems, to, title}) {
  const [offset, setOffset] = useState(0)
  let itemsCount = 4
  
  return (
    <div className='pb-5'>
      <h3 className='fw-bold text-center'>{title}</h3>
      <div className='d-flex justify-content-between align-items-center'>
        <div>
          <i 
            className='fas fa-chevron-left fs-5 font-bold'
            style={{cursor:'pointer'}}
            onClick={() => setOffset(prev => prev - 1) }/>
        </div>
        <div className='d-flex justify-content-center align-items-top w-100 border'>
          {
            carouselItems
              .filter((el, i, arr) =>  offset <= i && i < itemsCount + offset)
              .map(el => (
                <div style={{width: 'calc(100% / ' + itemsCount + ')'}}>
                  <div className='p-2'>
                    <div className='p-2'>
                      <NavLink to={to + el.type} className='text-decoration-none text-muted'>
                        <div className='border border-secondary rounded-3 text-center'> 
                          <img 
                            style={{maxHeight:'300px'}}
                            className='mw-100'
                            src={el.imgSrc.small} 
                          />
                          <h6 className='fw-bold border'>{el.title}</h6>
                          <div className='p-4'>
                          <button className='borderBlue w-50 p-2 colorBlue fw-bold'>Подробнее</button>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  </div> 
                </div>
              ))
          }
        </div>
        <div>
          <i 
            className='fas fa-chevron-right fs-5 font-bold'
            style={{cursor:'pointer'}}
            onClick={() => setOffset(prev => prev == carouselItems.length - 4 ? prev = 0 : prev + 1)}
          />
        </div>
    </div>   
    </div>
     
  )
}
