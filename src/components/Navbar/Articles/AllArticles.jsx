import FoundationPrice from '../../Main/FoundationPrice';
import Breadcrumbs from './../../Breadcrumbs/Breadcrumbs';
import GetCatalog from './../../Main/GetCatalog';
import { NavLink } from 'react-router-dom';

export default function AllArticles({articles}) {
    return (
    <div>
    <Breadcrumbs currentPage = 'Статьи о забивных ЖБ сваях'/>
      <h2 className='fw-bold text-center py-5'>Полезные статьи о забивных ЖБ сваях</h2>
      <div className='row'>
        {articles.map(article =>
            <div className='col-3 p-3'>
              <NavLink to={article.type} key={article.id} className='text-decoration-none text-dark'>
              <img src={article.imgSrc.small} alt="" className='w-100'/>
              <p className='fw-bold pt-2'>{article.title}</p>
              <p>{article.description}</p>
              <p>{article.postDate}</p>
              </NavLink>
            </div>
          )}
      </div>
      <FoundationPrice/>
      <GetCatalog/>
  </div>
    )
}
