import React from 'react'

export default function FoundationsComparison() {
  return (
    <div className='pb-5'>
        <div className='h2 fw-bold text-center'>
          Почему фундамент на Ж/Б сваях лучше?
        </div>
        <p className='col-6 text-center fs-5 mx-auto py-3'>
          Простое сравнение фундамента на Ж/Б Сваях с другими видами фундаментов
        </p>
        <div className='row'>
            <div className='col-4 text-center pt-4'>
              <div className='col border'>
                <img 
                src="https://thumb.tildacdn.com/tild3830-3765-4965-a563-653034623230/-/resize/150x/-/format/webp/vintovie-svai.png" alt="" 
                />
                <h3 className='fw-bold'>Фундамент на винтовых сваях</h3>
                <div className='px-2 fs-6'>
                  <div className='pt-3'>Время монтажа: 2-3 дня</div>
                  <div className='pt-4'>Сезонность: всесезонный</div>
                  <div className='pt-4'>Начало стройки: после усадки</div>
                  <div className='pt-4'>Тип грунта и перепады высот: все грунты за исключением каменистых и без перепада высот</div>
                  <div className='pt-4'>Нагрузка: 2-10 т. на каждую опору</div>
                  <div className='pt-4'>Срок службы: до 40 лет в сухих почвах</div>
                  <div className='pt-4'>Применение: здания без цокольного этажа</div>
                  <div className='pt-4'>Стоимость монтажа для здания 8х8</div>
                  <div className='pt-4'>от 110 000 ₽</div>
                </div>
              </div>
            </div>
            <div className='col-4 text-center'>
              <div className='col border py-3' style={{boxShadow:'0 0 15px grey'}}>
                <img 
                src="https://thumb.tildacdn.com/tild3039-3439-4634-b165-393739663636/-/resize/150x/-/format/webp/zhb-svai.png" alt="" />
                <h3 className='fw-bold'>Забивные Ж/Б сваи</h3>
                <div className='px-2 fs-6'>
                  <div className='pt-3'>Время монтажа: <strong>1 день</strong></div>
                  <div className='pt-4'>Сезонность:<strong>всесезонный</strong></div>
                  <div className='pt-4'>Начало стройки:<strong>сразу после монтажа</strong></div>
                  <div className='pt-4'>Тип грунта и перепады высот:<strong> все почвы и перепады высот</strong></div>
                  <div className='pt-4'>Нагрузка:<strong>до 40 т. на каждую сваю</strong></div>
                  <div className='pt-4'>Срок службы: <strong>от 100 лет</strong></div>
                  <div className='pt-4'>Применение: <strong>все типы малоэтажных зданий</strong></div>
                  <div className='pt-4'>Стоимость монтажа для здания 8х8</div>
                  <div className='pt-4'>
                    <p className='text-decoration-line-through'>от 110 000 ₽</p>
                    <strong>от 90 000 ₽</strong>
                  </div>
                  <div className='pt-3'>
                    <button className='greenButton p-2 col-8 text-center'>
                      Заказать расчет
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-4 text-center pt-4'>
              <div className='col border '>
                <img 
                src="https://thumb.tildacdn.com/tild3464-6334-4361-b235-633066643334/-/resize/150x/-/format/webp/lentochniy.png" alt="" />
                <h3 className='fw-bold pb-5'>Ленточный фундамент</h3>
                <div className='px-2 fs-6'>
                  <div>Время монтажа: 6-12 дней</div>
                  <div className='pt-4'>Сезонность: теплая и сухая погода</div>
                  <div className='pt-4'>Начало стройки: Через 21 день</div>
                  <div className='pt-4'>Тип грунта и перепады высот: сухие почвы высокой плотности, ровная местность</div>
                  <div className='pt-4'>Нагрузка: 5-15 т. на кв. метр</div>
                  <div className='pt-4'>Срок службы: <strong>90 лет</strong></div>
                  <div className='pt-4'>Применение: Ограниченный перечень</div>
                  <div className='pt-5'>Стоимость монтажа для здания 8х8</div>
                  <div className='pt-4'>от 200 000 ₽</div>
                </div>
              </div>
            </div>
        </div>
      </div>
  )
}
