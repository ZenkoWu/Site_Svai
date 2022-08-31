import React from 'react'
import Breadcrumbs from '../Breadcrumbs'
import Component1 from './Component1';

export default function ApplyTypeComponent() {
  let description = `ЖБ фундамент подходит не только для легких деревянных бань, 
  но массивных кирпичных построек. В ситуациях сложного, влажного и пучинистого грунта 
  ЖБ сваи будут идеальным вариантом. Установка начинается с геологической разведки. По ее 
  результатам забивается необходимое количество свай. После производится облицовка.
  `
  return (
    <div>
      <Breadcrumbs 
      currentPage='Для строительства бани' 
      prevPage=' Применение ЖБ свай в строительстве ' 
      to='/applying'/>
      <div>
        <Component1 
          src='https://static.tildacdn.com/tild3964-3535-4164-b938-323435636436/banya.jpg'
          title='Ж/Б сваи для строительства бани'
          description = {description}
        />
      </div>
    </div>
  )
}
