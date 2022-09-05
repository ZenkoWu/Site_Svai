import { Navigate, useParams } from 'react-router-dom';
import FoundationPrice from '../Main/FoundationPrice';
import FoundationsComparison from '../Main/FoundationsComparison';
import GetCatalog from '../Main/GetCatalog';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Advantages from '../Main/Advantages';
import FoundationTypes from '../Main/FoundationTypes';
import DescriptionCard from '../DescriptionСard/DescriptionСard';
import ReadMore from '../ReadMore/ReadMore';

export default function OneTypeFromCollection({collectionOfTypes, prevPage, to}) {

let params = useParams()

  let oneType = collectionOfTypes.reduce((total, elem) => 
    (elem.type === params.type ? elem : total), null) 

   if(!oneType) {
    return <Navigate to ={to}/>
   }

   let descriptionCard = {
    button:'true',
    linePadding:'p-3',
      titlePadding: 'pt-4',
      pPadding:'py-5',
      description: oneType.mainDescription,
      title:`Ж/Б сваи для ${oneType.point}`,
      src:oneType.imgSrc.large,
   }
  return (
    <div>
      <Breadcrumbs
      currentPage={oneType.title}
        prevPage={prevPage} 
        to={to}/>
      <DescriptionCard {...descriptionCard}/>
        <ReadMore
          point ={`Монтаж ЖБ свай для ${oneType.point}`}
          description = {oneType.mountingDescription}
          more = {oneType.moreInfo}
        />
      <Advantages/>
      <FoundationsComparison/>
      <FoundationPrice/>
      <FoundationTypes/>
      <GetCatalog/>
    </div>
  )
}



