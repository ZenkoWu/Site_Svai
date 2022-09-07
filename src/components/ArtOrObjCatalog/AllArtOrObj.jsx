import { NavLink } from 'react-router-dom';

export default function AllArtOrObj({artOrObj}) {
    return (
    <div>
      <div className='row'>
        {artOrObj.map(item =>
            <div className='col-3 p-3'>
              <NavLink to={item.type} key={item.id} className='text-decoration-none text-dark'>
              <img src={item.imgSrc.small} alt="" className='w-100'/>
              <p className='fw-bold pt-2'>{item.title}</p>
              <p>{item.description}</p>
              <p>{item.postDate}</p>
              </NavLink>
            </div>
          )}
      </div>
  </div>
    )
}
