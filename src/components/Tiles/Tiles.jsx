import { NavLink } from 'react-router-dom';

export default function Tiles({tileElements, to, title}) {
    return (
      <div className=''>
        <h3 className='fw-bold text-center py-4'>{title}</h3>
          <div className='row'>
            {tileElements.map(item =>
                <div className='col-3 p-3'>
                  <NavLink to={to + item.type} key={item.id} className='text-decoration-none text-dark'>
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

// Передаем массив объектов, формирующих плитку объектов или статей