import React, { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom';
import FoundationPrice from '../../FoundationPrice';
import FoundationsComparison from '../../FoundationsComparison';
import GetCatalog from '../../GetCatalog';
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
import Advantages from './../../Advantages';
import FoundationTypes from './../../FoundationTypes';

export default function ApplyTypeComponent({applicationTypes}) {
let [mountingMode, setOpenedMounting] = useState(false)
let [detailedMode, setDetailedMode] = useState(false)

function changeMountingMode() {
  setOpenedMounting(!mountingMode)
}

function changeDetailedMode() {
  setDetailedMode(!detailedMode)
}

let params = useParams()

  let applyingType = applicationTypes.reduce((total, elem) => 
    (elem.applyType === params.applyType ? elem : total), null) 

   if(!applyingType) {
    return <Navigate to ='/applying'/>
   }
  return (
    <div>
      <Breadcrumbs
      currentPage={applyingType.title}
      prevPage=' Применение ЖБ свай в строительстве ' 
      to='/applying'/>
      <div className='p-0'>
        <div className='row'>
            <div className='col-lg-6'>
                <img src={applyingType.imgSrc.large} className='mw-100' />
            </div>
            <div className='col-lg-6 pt-5 text-center'>
                <div className='h3 fw-bold text-center pt-4'>Ж/Б сваи для {applyingType.point}</div>
                <div className='w-50 blueLine p-3'></div>
                <div className='p-5'>{applyingType.mainDescription}</div>
                <button className='borderBlue  w-50 p-2 text-white fw-bold bg-blue' 
                  onClick={() => console.log('click')}>
                  Заказать расчет
                </button>
            </div>
           <ReadMore 
           mountingMode={mountingMode} 
           detailedMode={detailedMode} 
           changeMountingMode={changeMountingMode}
           changeDetailedMode={changeDetailedMode}
           point ={applyingType.point}
           description = {applyingType.mountingDescription}
           more = {applyingType.moreInfo}
           />
        </div>
    </div>
      <Advantages/>
      <FoundationsComparison/>
      <FoundationPrice/>
      <FoundationTypes/>
      <GetCatalog/>
    </div>
  )
}


function ReadMore(props) {
  let {point, more, description, mountingMode, detailedMode, changeMountingMode, changeDetailedMode} = props
  return(
    <div className='row px-3 pb-5'>
  <div className=' col-lg-10 py-0' style={{paddingLeft: '200px'}}>
    <div className='row p-3 w-100 openDescription'
    style={{borderTop: '1px solid #969696', borderBottom: '1px solid #969696',}}
    onClick={changeDetailedMode}>
      <div className='col-11 fw-bold h4'> Подробнее</div>
      {detailedMode ? 
      <>
       <div className=" col fa-solid fa-xmark p-0 h4"></div>
    <div>{more}</div>
      </>
    :  <div className="col fa-solid fa-plus p-0 h4"></div>
  }
    </div>
   
  </div>
  <div className=' col-lg-10 py-0' style={{paddingLeft: '200px'}}>
     <div className='row p-3 w-100 openDescription' style={{ borderBottom: '1px solid #969696',}}
    onClick={changeMountingMode}>
      <div className='col-11 fw-bold h4'> Монтаж ЖБ свай для {point}</div>
      {mountingMode ?
      <>
       <div className=" col fa-solid fa-xmark p-0 h4"></div>
      <div>{description}</div>
      </>
    : 
    <div className="col fa-solid fa-plus p-0 h4"></div>
    }
     </div>
  </div>
</div>
  )
  
}
