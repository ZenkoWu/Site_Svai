import React from 'react'

export default function FoundationPrice() {
  return (
    <div className='py-5'>
      <div className='row'>
        <div className='col-7'>
          <img 
          style={{maxWidth:'100%'}}
          src='https://hgwipn3sa-res.cloudinary.com/image/upload/w_auto,f_auto,q_auto,g_auto,c_fill,h_650,dpr_1/opnpchbt5evaioplsk3n.jpg'/>
        </div>
        <div className='col-4 px-4'>
          <h3 className='fw-bold'>
            Узнайте стоимость фундамента на забивных сваях всего за 2 минуты!
          </h3>
          <p className='fs-6'>
            Ответьте всего на 6 простых вопроса и получите расчёт стоимости фундамента на Ж/Б сваях «под ключ».
          </p>
          <button className='bg-blue borderBlue text-white p-2 fs-5'>Приступить</button>
          <p className='pt-3'>БОНУСЫ ПОСЛЕ ПРОХОЖДЕНИЯ ТЕСТА</p>
          <div className='row'>
            <div className='col-6 p-3 border rounded-3 text-end'>
              PDF прайс-лист актуальных цен
            </div>
            <div className='col-6 p-2 border rounded-3 text-end'>
              Расчет свайного поля
            </div>
            <div className='py-5'>
              <img 
              style={{maxWidth:'13px'}}
              src="https://quiz.marquiz.ru/img/marquiz.6c626418.svg" alt="" />
              Сделано в 
              <a
              className='text-black text-decoration-none'
              href='https://www.marquiz.ru/?utm_source=widget&utm_content=603368eda7c83a0044737caa'> Marquiz</a>
            </div>
          </div>
        </div>
    </div>
</div>
  )
}
