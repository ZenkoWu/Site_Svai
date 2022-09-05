import React from 'react'

export default function Advantages() {
    let advantages = [
        {title: 'Сроки монтажа',
         img:'https://static.tildacdn.com/tild6430-6431-4234-a530-303636383633/sroki-montazha.svg', 
         description:`Свайное поле забивается за одну рабочую смену.
          И сразу по окончании установки можно начинать строительство.` },
        {title: 'Экономия', 
        img:'https://static.tildacdn.com/tild6563-3935-4337-b432-386534666232/ehkonomiya.svg', 
        description:'Фундамент на забивных ЖБ сваях обойдется до 50% дешевле аналогов.' },
        {title: 'Соответствие ГОСТу', 
        img:'https://static.tildacdn.com/tild3534-3935-4234-b938-623166356434/sootvetstvie-gostu.svg', 
        description:`Используем ЖБ сваи согласно ГОСТу 19804-2012 
        «Сваи железобетонные заводского изготовления», что подтверждено сертификатом.` },
        {title: 'Долговечность', 
        img:'https://static.tildacdn.com/tild3430-3130-4837-b737-346237363430/dolgovechnost.svg', 
        description:`ЖБ сваи изготавливаются в соответствии с государственным стандартам качества,
         поэтому не подвергаются коррозии, выдерживают значительную нагрузку и служат более 100 лет.` },
        {title: 'Несущая способность', 
        img:'https://static.tildacdn.com/tild3661-3166-4561-b330-326234373463/nesushchaya-sposobno.svg', 
        description:`В зависимости от грунта максимальная величина нагрузки, способная выдерживать свая
         не подтвергаясь деформации, достигает 50 тонн` },
        {title: 'Устойчивость к пучению', 
        img:'https://static.tildacdn.com/tild3266-3761-4364-b364-353438623763/ustojchivost-k-puche.svg', 
        description:'Благодаря установке железобетонных стержней ниже глубины замерзания земли, пучение грунта исключено.' },
        {title: 'Влагостойкость', 
        img:'https://static.tildacdn.com/tild6665-3961-4766-a239-313861356331/vlagostojkost.svg', 
        description:`Железобетонные армированные столбы — устойчивы к процессам разрушения и гниения и 
        идеально подходят для возведения вблизи водоемов.` },
        {title: 'Прочность', 
        img:'https://static.tildacdn.com/tild3131-6538-4164-b561-373365343863/prochnost.svg', 
        description:'Наличие камней и валунов в грунте не станет преградой при забивке сваи.' },
    ]
  return (
    <div className='pb-5'>
      <div className='h2 fw-bold text-center'>
        Преимущества фундамента на забивных железобетонных сваях
      </div>
      <div className='row p-5'>
        {advantages.map((item, index) => 
          (<div className='col-3 '>
              <img src={item.img} className='w-25'/>
              <span className='fw-bold fs-6'>{item.title}</span>
              <p>{item.description}</p>
            </div>))
        }
      </div>
    </div>
  )
}

