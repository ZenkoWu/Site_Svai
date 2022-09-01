import React, { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom';
import Breadcrumbs from '../Breadcrumbs';

export default function ApplyTypeComponent() {
  let params = useParams()

  let mainContent=[
    {id: 1, 
      applyType: 'for-building-a-datcha', 
      src: 'https://thumb.tildacdn.com/tild3266-6535-4733-b534-646636386135/-/resize/560x/-/format/webp/house.jpg',
      title: 'Ж/Б сваи для строительства загородного дома',
      description: `Фундамент на железобетонных сваях современное и практичное решение
       при возведении дома. Не требует проведения земляных работ и экономит на строительстве.
        Выбор технологии определяется на основании геологии. Установка занимает в среднем 1 день. 
        Сразу после возведения фундамента можно приступать к дальнейшему строительству дома.
      `,
      currentPage:'Для строительства загородного дома',
    },
    {id: 2, 
    applyType: 'for-building-a-bath', 
    src: 'https://thumb.tildacdn.com/tild3964-3535-4164-b938-323435636436/-/resize/560x/-/format/webp/banya.jpg',
    title: 'Ж/Б сваи для строительства бани',
    description:  `ЖБ фундамент подходит не только для легких деревянных бань, 
    но массивных кирпичных построек. В ситуациях сложного, влажного и пучинистого грунта 
    ЖБ сваи будут идеальным вариантом. Установка начинается с геологической разведки. По ее 
    результатам забивается необходимое количество свай. После производится облицовка.
    `,
    currentPage:'Для строительства бани',
  },
  {id: 3, 
    applyType: 'for-building-a-fence', 
    src: 'https://thumb.tildacdn.com/tild6438-3963-4931-b234-336139336633/-/resize/560x/-/format/webp/zabor.jpg',
    title: 'Ж/Б сваи для возведения забора',
    description:  `Железобетонные сваи для строительства забора надежный и выгодный вариант.
     Установка не занимает много времени, производится при любых погодных условиях,
      подходит для различного вида грунта. Порядок возведения фундамента на ЖБ сваях:
       очистка от мусора, натягивание троса, забивка опор, монтирование материала для изгороди.
    `,
    currentPage:'Для возведения забора',
  },
  {id: 4, 
    applyType: 'for-building-a-porch-and-terrace', 
    src: 'https://thumb.tildacdn.com/tild3166-3063-4061-b264-313732353963/-/resize/560x/-/format/webp/terace.jpg',
    title: 'Ж/Б сваи для строительства террасы',
    description:  `Терраса — небольшое сооружение, расположенное в передней или задней части дома, 
    используется как зона отдыха. Не требует мощной основы. Железобетонный свайный фундамент популярный 
    вариант для возведения террасы. Он прост в установке, долговечен, доступен на любом грунте, не 
    подвержен коррозии и высокой влажности.
    `,
    currentPage:'Для строительства террасы',
  },
  {id: 5, 
    applyType: 'for-building-a-arbor', 
    src: 'https://thumb.tildacdn.com/tild3162-6263-4134-a239-626233623138/-/resize/560x/-/format/webp/besedka.jpg',
    title: 'Ж/Б сваи для для строительства беседки',
    description:  `Сейчас невозможно представить загородный дом, дачу или коттедж без беседки. 
    Это место для отдыха и дружеских посиделок. Несмотря на то, что конструкция довольно легкая по весу, 
    строительство фундамента требует тщательного подхода. На решение влияет размер строения, рельеф 
    местности и состав почвы.
    `,
    currentPage:'Для строительства беседки',
  },
  {id: 6, 
    applyType: 'for-building-a-pier-and-jetty', 
    src: 'https://thumb.tildacdn.com/tild3061-6330-4732-b064-356363333333/-/resize/560x/-/format/webp/pirs.jpg',
    title: 'Ж/Б сваи для строительства причала',
    description:  `Строительство пирса или причала позволяет не только обустроить удобство 
    подъезда водного транспорта, но и это отличное место отдыха для рыбалки, купаний, релакса.
     Возведение фундамента для причала имеет ряд особенностей. Для установки ЖБ свай требуется
      тщательное обследование подводного грунта и береговой линии. А так же необходимо учесть 
      сезонные изменения.
    `,
    currentPage:'Для строительства причала',
  },
  
  ]

  let applyingType = mainContent.reduce((total, elem) => 
    (elem.applyType === params.applyType ? elem : total), null) 

  
  if(!applyingType) {
    return <Navigate to ='/applying'/>
   }
  return (
    <div>
      <Breadcrumbs
      currentPage={applyingType.currentPage}
      prevPage=' Применение ЖБ свай в строительстве ' 
      to='/applying'/>
    <div className='p-0'>
        <div className='row'>
          <div className='col-lg-6'>
            <img src={applyingType.src} className='mw-100' />
          </div>
          <div className='col-lg-6 pt-5 text-center'>
            <div className='h3 fw-bold text-center pt-4'>{applyingType.title}</div>
            <div className='w-50 blueLine p-3'></div>
            <div className='p-5'>{applyingType.description}</div>
            <button className='borderBlue  w-50 p-3 text-white fw-bold bg-blue' onClick={() => console.log('click')}>Заказать расчет</button>
          </div>
        </div>
    </div>
    </div>
  )
}
