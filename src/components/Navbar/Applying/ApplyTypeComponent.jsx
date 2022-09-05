import React, { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom';
import FoundationPrice from '../../Main/FoundationPrice';
import FoundationsComparison from '../../Main/FoundationsComparison';
import GetCatalog from '../../Main/GetCatalog';
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
import Advantages from '../../Main/Advantages';
import FoundationTypes from './../../Main/FoundationTypes';
import DescriptionCard from '../../DescriptionСard/DescriptionСard';

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

   let descriptionCard = {
    button:'true',
    linePadding:'p-3',
      titlePadding: 'pt-4',
      pPadding:'py-5',
      description: applyingType.mainDescription,
      title:`Ж/Б сваи для ${applyingType.point}`,
      src:applyingType.imgSrc.large,
   }
  return (
    <div>
      <Breadcrumbs
      currentPage={applyingType.title}
      prevPage=' Применение ЖБ свай в строительстве ' 
      to='/applying'/>
      <DescriptionCard {...descriptionCard}/>
        <ReadMore 
           mountingMode={mountingMode} 
           detailedMode={detailedMode} 
           changeMountingMode={changeMountingMode}
           changeDetailedMode={changeDetailedMode}
           point ={applyingType.point}
           description = {applyingType.mountingDescription}
           more = {applyingType.moreInfo}
           />
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
