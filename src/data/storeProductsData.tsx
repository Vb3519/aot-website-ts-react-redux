import { v4 as uuidv4 } from 'uuid';

const images = require.context('../assets/images/store', false, /\.png$/);
const imagePaths = images.keys().map(images); // массив путей к изображениям

const storeProductsData = [
  {
    id: uuidv4(),
    img: imagePaths[0].default,
    name: 'Металлический значок "Эрен Йегер"',
    price: '370 Руб.',
    isAddedToCart: false,
    isFavourite: false,
    value: 1,
  },
  {
    id: uuidv4(),
    img: imagePaths[2].default,
    name: 'Металлический значок "Разведкорпус"',
    price: '250 Руб.',
    isAddedToCart: false,
    isFavourite: false,
    value: 1,
  },
  {
    id: uuidv4(),
    img: imagePaths[4].default,
    name: 'Сумка тканевая с принтом "Атака Титанов"',
    price: '1140 Руб.',
    isAddedToCart: false,
    isFavourite: false,
    value: 1,
  },
  {
    id: uuidv4(),
    img: imagePaths[5].default,
    name: 'Сумка-шоппер аниме "Атака Титанов"',
    price: '270 Руб.',
    isAddedToCart: false,
    isFavourite: false,
    value: 1,
  },
  {
    id: uuidv4(),
    img: imagePaths[6].default,
    name: 'Кружка "Атака Титанов"',
    price: '560 Руб.',
    isAddedToCart: false,
    isFavourite: false,
    value: 1,
  },
  {
    id: uuidv4(),
    img: imagePaths[9].default,
    name: 'Кружка "Атака Титанов"',
    price: '560 Руб.',
    isAddedToCart: false,
    isFavourite: false,
    value: 1,
  },

  {
    id: uuidv4(),
    img: imagePaths[11].default,
    name: 'Толстовка "Атака Титанов"',
    price: '1850 Руб.',
    isAddedToCart: false,
    isFavourite: false,
    value: 1,
  },
  {
    id: uuidv4(),
    img: imagePaths[12].default,
    name: 'Футболка "Атака Титанов"',
    price: '671 Руб.',
    isAddedToCart: false,
    isFavourite: false,
    value: 1,
  },
];

export default storeProductsData;
