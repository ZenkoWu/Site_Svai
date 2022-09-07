import React from 'react'
import { useParams, Navigate, NavLink } from 'react-router-dom';

export default function OneObject({objects}) {
  let params = useParams()

  let object = objects.reduce((total, elem) => 
    (elem.type === params.type ? elem : total), null) 

   if(!object) {
    return <Navigate to ='/objects'/>
   }
   return (
    <div>
      <NavLink to='/objects' className='text-dark text-decoration-none fs-5'>
        <i class="fa-solid fa-arrow-left fs-4"></i> Все объекты
        </NavLink>
        <h2 className='fw-bold text-center pt-3'>{object.title}</h2>
        <div className='col-8 mx-auto'>
          {object.imgSrc.imgCollection.map(item  => 
            <div className=' text-center'>
              <img src={item} alt="" className='py-3 w-100' />
            </div> 
          )}
          <p className=''>{object.postDate}</p>
        </div>
        
    </div>
  )
}
