import React, { useState } from 'react'
import { useParams, Navigate } from 'react-router-dom';
import Advantages from './../../Advantages';
import FoundationsComparison from './../../FoundationsComparison';
import FoundationPrice from './../../FoundationPrice';
import GetCatalog from './../../GetCatalog';
import Breadcrumbs from './../../Breadcrumbs/Breadcrumbs';

export default function ExecutionTypeComponent({executionTypes}) {
    let [mountingMode, setOpenedMounting] = useState(false)
    let [detailedMode, setDetailedMode] = useState(false)
    
    function changeMountingMode() {
      setOpenedMounting(!mountingMode)
    }
    
    function changeDetailedMode() {
      setDetailedMode(!detailedMode)
    }
    
    let params = useParams()
    
      let executionType = executionTypes.reduce((total, elem) => 
        (elem.executionType === params.executionType ? elem : total), null) 
    
       if(!executionType) {
        return <Navigate to ='/executionTypes'/>
       }
      return (
        <div>
          <Breadcrumbs
          currentPage={executionType.title}
          prevPage='  Виды исполнения фундамента на ЖБ сваях' 
          to='/executionTypes'/>
          <div className='p-0'>
            <div className='row'>
                <div className='col-lg-6'>
                    <img src={executionType.imgSrc.large} className='mw-100' />
                </div>
                <div className='col-lg-6 pt-5 text-center'>
                    <div className='h3 fw-bold text-center pt-4'>{executionType.point}</div>
                    <div className='w-50 blueLine p-3'></div>
                    <div className='p-5'>{executionType.mainDescription}</div>
                    <button className='borderBlue  w-50 p-2 text-white fw-bold bg-blue' 
                      onClick={() => console.log('click')}>
                      Заказать расчет
                    </button>
                </div>
               {/* <ReadMore 
               mountingMode={mountingMode} 
               detailedMode={detailedMode} 
               changeMountingMode={changeMountingMode}
               changeDetailedMode={changeDetailedMode}
               point ={applyingType.point}
               description = {applyingType.mountingDescription}
               more = {applyingType.moreInfo}
               /> */}
            </div>
        </div>
          <Advantages/>
          <FoundationsComparison/>
          <FoundationPrice/>
          {/* <FoundationTypes/> */}
          <GetCatalog/>
        </div>
      )
}
