import React, { useState } from 'react'

export default function ReadMore({point, more, description}) {
let [mountingMode, setOpenedMounting] = useState(false)
let [detailedMode, setDetailedMode] = useState(false)

function changeMountingMode() {
  setOpenedMounting(!mountingMode)
}

function changeDetailedMode() {
  setDetailedMode(!detailedMode)
}

    return(
      <div className='row px-3 pb-5'>
        <div className=' col-lg-10 py-0' style={{paddingLeft: '200px'}}>
          <div className='row p-3 w-100 openDescription'
            style={{borderTop: '1px solid #969696', borderBottom: '1px solid #969696',}}
            onClick={changeDetailedMode}>
              <div className='col-11 fw-bold h4'>Подробнее</div>
              {detailedMode ? 
                <>
                  <div className=" col fa-solid fa-xmark p-0 h4"></div>
                  <div>{more}</div>
                </>
              : <div className="col fa-solid fa-plus p-0 h4"></div>
              }
          </div>
        </div>
        {point ? 
        <div className=' col-lg-10 py-0' style={{paddingLeft: '200px'}}>
          <div className='row p-3 w-100 openDescription' style={{ borderBottom: '1px solid #969696',}}
            onClick={changeMountingMode}>
            <div className='col-11 fw-bold h4'>{point}</div>
            {mountingMode ?
              <>
                <div className=" col fa-solid fa-xmark p-0 h4"></div>
                <div>{description}</div>
              </>
            : <div className="col fa-solid fa-plus p-0 h4"></div>
            }
         </div>
        </div>
        : null}
      </div>
    )
  }
