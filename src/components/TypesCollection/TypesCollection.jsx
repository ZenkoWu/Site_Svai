import { NavLink } from 'react-router-dom';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import FoundationPrice from '../FoundationPrice';
import GetCatalog from '../GetCatalog/GetCatalog';
import Tiles from '../Tiles/Tiles';
import ShowAllButton from './../ShowAllButton/ShowAllButton';


export default function TypesCollection({types, title, articles, objects}) {
  return(
    <div className='mw-100'>
      <Breadcrumbs currentPage = {title}/>
      <h2 className='text-center fw-bold py-5'>{title}</h2>
      <div className='row'>
        {types.map(item => {
          return (
            <div className='content col-sm-6 col-md-4 col-lg-4 pt-5' key={item.id}>
              <NavLink to={item.type} className='text-decoration-none'>
                <img src={item.imgSrc.small} alt="" className='w-100 pb-3' style ={{maxHeight:'313px'}}/>
                <div className='text-center fw-bold fs-6 colorGrey'>{item.title}</div>
                <div className='text-center p-4'>
                  <button className='borderBlue w-50 p-2 colorBlue fw-bold'>Подробнее</button>
                </div>
              </NavLink>
            </div>
          )}
        )}
      </div>
      <FoundationPrice/>
      <Tiles tileElements ={articles} to='/articles/' title='Полезные статьи о Ж/Б сваях'/>
      <ShowAllButton to='/articles' all='статьи'/>
      <GetCatalog/>
      <Tiles tileElements={objects} to='/objects/' title='Наши выполненные объекты'/>
      <ShowAllButton to='/objects' all='объекты'/>
    </div>
  )
}
 
// Коллекция/каталог видов исполнения и применения 