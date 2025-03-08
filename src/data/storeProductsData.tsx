const images = require.context('../assets/images/store', false, /\.png$/);
const imagePaths = images.keys().map(images); // массив путей к изображениям

const storeProductsData = [
  {
    img: imagePaths[0].default,
    name: 'Металлический значок "Эрен Йегер"',
    price: '370 Руб.',
  },
  {
    img: imagePaths[2].default,
    name: 'Металлический значок "Разведкорпус"',
    price: '250 Руб.',
  },
  {
    img: imagePaths[4].default,
    name: 'Сумка тканевая с принтом "Атака Титанов"',
    price: '1140 Руб.',
  },
  {
    img: imagePaths[5].default,
    name: 'Сумка-шоппер аниме "Атака Титанов"',
    price: '270 Руб.',
  },
  {
    img: imagePaths[6].default,
    name: 'Кружка "Атака Титанов"',
    price: '560 Руб.',
  },
  {
    img: imagePaths[9].default,
    name: 'Кружка "Атака Титанов"',
    price: '560 Руб.',
  },

  {
    img: imagePaths[11].default,
    name: 'Толстовка "Атака Титанов"',
    price: '1850 Руб.',
  },
  {
    img: imagePaths[12].default,
    name: 'Футболка "Атака Титанов"',
    price: '671 Руб.',
  },
];

export default storeProductsData;
