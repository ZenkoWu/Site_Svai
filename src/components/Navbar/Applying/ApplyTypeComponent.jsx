import React, { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom';
import FoundationPrice from '../../Main/FoundationPrice';
import FoundationsComparison from '../../Main/FoundationsComparison';
import GetCatalog from '../../Main/GetCatalog';
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
import Advantages from '../../Main/Advantages';
import FoundationTypes from './../../Main/FoundationTypes';
import DescriptionCard from '../../DescriptionСard/DescriptionСard';
import ReadMore from '../../ReadMore/ReadMore';

export default function ApplyTypeComponent({applicationTypes}) {

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
          point ={`Монтаж ЖБ свай для ${applyingType.point}`}
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



