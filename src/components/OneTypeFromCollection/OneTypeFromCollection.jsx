import { Navigate, useParams } from 'react-router-dom';
import FoundationPrice from '../FoundationPrice';
import FoundationsComparison from '../FoundationsComparison/FoundationsComparison';
import GetCatalog from '../GetCatalog/GetCatalog';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Advantages from '../Advantages/Advantages';
import DescriptionCard from '../DescriptionCard/DescriptionCard';
import ReadMore from '../ReadMore/ReadMore';
import Carousel from './../Carousel/Carousel';
import ArticleText from '../../pages/Articles/ArticleText';

export default function OneTypeFromCollection({collectionOfTypes, prevPage, to}) {

let params = useParams()

  let oneType = collectionOfTypes.reduce((total, elem) => 
    (elem.type === params.type ? elem : total), null) 

   if(!oneType) {
    return <Navigate to={to}/>
   }

   let descriptionCard = {
    imgTopP: oneType.point ? null : 'pt-5' ,
    button: oneType.point ? true : false,
    linePadding:'p-3',
      pPadding:'py-5',
      description: oneType.mainDescription,
      title:`${oneType.point ? oneType.point : oneType.title}`,
      src:oneType.imgSrc.large,
   }
  return (
    <div>
      <Breadcrumbs
        currentPage={oneType.title}
        prevPage={prevPage} 
        to={to}
      />
      <DescriptionCard {...descriptionCard}/>
      { oneType.more ?
        <ReadMore
          point ={`Монтаж ${oneType.point}`}
          description = {oneType.mountingDescription}
          more = {oneType.moreInfo}
        />
        : oneType.text ? <ArticleText text = {oneType.text}/> 
        : null
      }
      <Advantages/>
      <FoundationsComparison/>
      <FoundationPrice/>
      <Carousel 
        carouselItems={collectionOfTypes}
        to = '/executionTypes/'
        title = 'Виды фундаментов на Ж/Б сваях'
      />
      <GetCatalog/>
    </div>
  )
}



