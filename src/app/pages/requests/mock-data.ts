import { HumanRequest } from '../../shared/interfaces/request';

export const mockRequests: HumanRequest[] = [
  {
    id: '1111111',
    type: 'complaint',
    status: 'created',
    tags: ['скорость обслуживания'],
    title: 'Жалоба на сотрудника',
    description: 'Довожу до Вашего сведения, что на горячую линию обратился клиент (ФИО, тел. ) с жалобой на задержку выдачи результата.  Клиент обратился  в   ПЗ  для сдачи биоматериала на исследование «Коронавирус».   Клиент недоволен тем, что 13.05.2020 г. исследование  не было выполнено. Клиент считает, что лаборатория нарушает сроки выполнения исследования – 2 рабочих дня. Клиент просит разобраться и принять меры. Ждет   звонка администрации.',
    createdAt: new Date(),
    updatedAt: new Date(),
    city: 'Краснодар',
    institution: 'Краевая больница',
  },
  {
    id: '2222222',
    type: 'complaint',
    status: 'inProgress',
    tags: ['жалоба на сотрудника', 'некорректное общение', 'оскорбления'],
    title: 'Скорость обработки',
    description: 'Довожу до Вашего сведения, что на горячую линию обратился клиент (ФИО, тел. ) с жалобой на задержку выдачи результата.  Клиент обратился  в   ПЗ  для сдачи биоматериала на исследование «Коронавирус».   Клиент недоволен тем, что 13.05.2020 г. исследование  не было выполнено. Клиент считает, что лаборатория нарушает сроки выполнения исследования – 2 рабочих дня. Клиент просит разобраться и принять меры. Ждет   звонка администрации.',
    createdAt: new Date(),
    updatedAt: new Date(),
    city: 'Краснодар',
    institution: 'Краевая больница',
  },
  {
    id: '33333333',
    type: 'complaint',
    status: 'created',
    tags: ['некорректные результаты работы', 'оскорбления'],
    title: 'Качество обслуживания',
    description: 'Довожу до Вашего сведения, что на горячую линию обратился клиент (ФИО, тел. ) с жалобой на задержку выдачи результата.  Клиент обратился  в   ПЗ  для сдачи биоматериала на исследование «Коронавирус».   Клиент недоволен тем, что 13.05.2020 г. исследование  не было выполнено. Клиент считает, что лаборатория нарушает сроки выполнения исследования – 2 рабочих дня. Клиент просит разобраться и принять меры. Ждет   звонка администрации.',
    createdAt: new Date(),
    updatedAt: new Date(),
    city: 'Краснодар',
    institution: 'Краевая больница',
  },
  {
    id: '444444',
    type: 'complaint',
    status: 'reject',
    tags: ['скорость обработки', 'дети', 'жалоба на сотрудника'],
    title: 'Очень долго',
    description: 'Довожу до Вашего сведения, что на горячую линию обратилась клиент с жалобой на ПЗ.  Клиент  обратилась в указанный ПЗ для сдачи биоматериала на исследование «Копрограмма» своему ребенку. Клиенту пришлось ожидать в общей очереди около часа по причине того, что в ПЗ велся прием биоматериала на COVID-19 по предварительной записи. Клиент недовольна тем, что в ПЗ не размещена информация об ограничениях по времени в приеме биоматериала на стандартные исследования. Клиент считает, что филиалы лаборатории должны принимать биоматериал в рабочие часы без ограничений «через одного».  Клиент просит разобраться и принять меры.   ',
    createdAt: new Date(),
    updatedAt: new Date(),
    city: 'Краснодар',
    institution: 'Краевая больница',
  },
  {
    id: '555555',
    type: 'complaint',
    status: 'reject',
    tags: ['скорость обработки', 'дети', 'жалоба на сотрудника'],
    title: 'Дети и радуга',
    description: 'Довожу до Вашего сведения, что на горячую линию обратилась клиент с жалобой на ПЗ.  Клиент  обратилась в указанный ПЗ для сдачи биоматериала на исследование «Копрограмма» своему ребенку. Клиенту пришлось ожидать в общей очереди около часа по причине того, что в ПЗ велся прием биоматериала на COVID-19 по предварительной записи. Клиент недовольна тем, что в ПЗ не размещена информация об ограничениях по времени в приеме биоматериала на стандартные исследования. Клиент считает, что филиалы лаборатории должны принимать биоматериал в рабочие часы без ограничений «через одного».  Клиент просит разобраться и принять меры.   ',
    createdAt: new Date(),
    updatedAt: new Date(),
    city: 'Краснодар',
    institution: 'Краевая больница',
  },
];

export const mockAnswers: string[] = [
  'Ответ на Вашу служебную записку (ФИО, тел) с жалобой на качество обслуживания' +
  ' ПЗ Сочи. По обращению пациента проведено служебное расследование, в ходе' +
  ' которого просмотрены записи с камеры видеонаблюдения.' +
  ' При просмотре подтверждено, что медсестра ведет диалог' +
  ' с пациентом неприветливо и недружелюбно. Не использует' +
  ' слов вежливости при просьбе что-либо выполнить пациента' +
  ' (надеть бахилы, обработать руки, предоставить паспорт,' +
  ' заполнить договор). Разрешила воспользоваться уборной только' +
  ' после объяснения пациентом, что в этом есть крайняя необходимость' +
  ' по состоянию здоровья. Сотруднику выдана обратная связь по произошедшему' +
  ' инциденту, проведена беседа по сервисному обслуживанию.' +
  ' Пациенту принесены извинения от лица компании за доставленные неудобства.',


  'Ответ на Вашу служебную записку от (дата)  (ФИО, телефон)' +
  ' с жалобой на ПЗ Сочи. По обращению пациента проведено' +
  ' служебное расследование, в ходе которого' +
  ' просмотрены записи с камер видеонаблюдения.' +
  ' Установлено, что в начале диалога медсестра' +
  ' отвечает на все вопросы клиента дружелюбно и вежливо. Проинформировала,' +
  ' что идет разделение пациентопотока, что в первую половину дня, возможно,' +
  ' сдать все анализы, интересующие клиента, кроме Коронавируса. Прием анализов на CоVid начинается с 12:00. После, у пациентки возник вопрос на иные комплексы. На камере видно, что медсестра перезагружает компьютер, начинает нервничать и сообщает, что по причине того, что компьютер «завис», не может более предоставить никакой информации и рекомендует обратиться на горячую линию по всем вопросам. Обратная связь по произошедшему инциденту сотруднику выдана. Пациенту принесены извинения от лица компании за сложившуюся ситуацию. Предложено было подобрать удобное время для записи на анализы. Относительно принятия лекарственных препаратов перед сдачей анализов по щитовидной железе, предложен перезвон врача-консультанта для предоставления полной информации. Пациент поблагодарила за обратную связь, относительно сдачи анализов в нашей лаборатории пока подумает. ',

  'По обращению пациента проведено служебное расследование, в результате которого установлено, что график работы указанного пункта забора зависит от режима работы клиники, в котором он расположен («Клиницист»). Информирования о выходном дне от администрации учреждения не поступало, по данной причине сотрудники филиала с утра присутствовали на рабочем месте, где им сообщили о том, что клиника не работает, как соответственно и пункт забора.  Вследствие этого медсестра была вынуждена отказать в приеме биоматериала, предложив обратиться пациенту в ближайший филиал лаборатории. Связаться с пациентом не удалось, на звонки по контактному номеру телефона не отвечает.',

  'По обращению пациента проверена информация. Установлено, что медсестра фотографировала паспорт пациента для отправки в ОЭБ согласно предоставленной ранее инструкции по оформлению пациентов на CoVid 19. Пациент проинформирован, что в заказ все персональные данные внесены успешно. Задержек в выполнении исследования по данной причине быть не может. Предоставлены пояснения, что паспортные данные необходимы по требованию Роспотребнадзора, т.к. в случае положительного результата вся информация передается в Роспотребнадзор, в случае отрицательного результата копии документа пациента удаляются. Клиенту принесены извинения от лица компании за возникшее недопонимание. Претензий пациент более не имеет.',

];

