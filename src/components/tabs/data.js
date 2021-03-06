export const slides = [
  {id: 0,
    name: 'deposit',
    tabName: 'Вклады',
    title: 'Вклады Лига Банка – это выгодная инвестиция в свое будущее',
    benefits: [{id: Math.random().toString(36), text: 'Проценты по вкладам до 7%'}, {id: Math.random().toString(36), text: 'Разнообразные условия'}, {id: Math.random().toString(36), text: 'Возможность ежемесячной капитализации или вывод процентов на банковскую карту'}],
    isButton: true,
  },
  {id: 1,
    name: 'credits',
    tabName: 'Кредиты',
    title: 'Лига Банк выдает кредиты под\u00A0любые цели',
    benefits: [{id: Math.random().toString(36), text: 'Ипотечный кредит'}, {id: Math.random().toString(36), text: 'Автокредит'}, {id: Math.random().toString(36), text: 'Потребительский кредит'}],
    isButton: false,
    text: 'Рассчитайте ежемесячный платеж и\u00A0ставку по кредиту воспользовавшись нашим ',
    linkText: 'кредитным калькулятором',
    link: 'calculator',
  },
  {id: 2,
    name: 'insurance',
    tabName: 'Страхование',
    title: 'Лига Страхование — застрахуем все\u00A0что захотите',
    benefits: [{id: Math.random().toString(36), text: 'Автомобильное страхование'}, {id: Math.random().toString(36), text: 'Страхование жизни и здоровья'}, {id: Math.random().toString(36), text: 'Страхование недвижимости'}],
    isButton: true,
  },
  {id: 3,
    name: 'services',
    tabName: 'Онлайн-сервисы',
    title: 'Лига Банк — это огромное количество онлайн-сервисов для\u00A0вашего удобства',
    benefits: [{id: Math.random().toString(36), text: 'Мобильный банк, который всегда под рукой'}, {id: Math.random().toString(36), text: 'Приложение Лига-проездной позволит вам оплачивать билеты по всему миру'}],
    isButton: true,
  },
];
