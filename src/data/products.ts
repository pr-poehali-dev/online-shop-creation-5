export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  discount: number;
  category: string;
  description?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Смартфон Ultra Pro',
    price: 89990,
    rating: 4.8,
    reviews: 234,
    image: 'https://cdn.poehali.dev/projects/a81e2cee-ea46-43ba-918a-0aeedf6146e1/files/c8dbbeb6-fc15-4963-baa5-515cd27e9f16.jpg',
    discount: 15,
    category: 'Электроника',
    description: 'Современный смартфон с мощным процессором и отличной камерой'
  },
  {
    id: 2,
    name: 'Беспроводные наушники',
    price: 12990,
    rating: 4.6,
    reviews: 567,
    image: 'https://cdn.poehali.dev/projects/a81e2cee-ea46-43ba-918a-0aeedf6146e1/files/dbcd906d-a106-4cca-a790-a45f9efe7149.jpg',
    discount: 20,
    category: 'Аудио',
    description: 'Качественный звук и активное шумоподавление'
  },
  {
    id: 3,
    name: 'Кроссовки Sport Max',
    price: 8990,
    rating: 4.9,
    reviews: 892,
    image: 'https://cdn.poehali.dev/projects/a81e2cee-ea46-43ba-918a-0aeedf6146e1/files/f5420642-8be4-4eb9-9d59-92444709ba49.jpg',
    discount: 25,
    category: 'Одежда',
    description: 'Удобные спортивные кроссовки для бега и тренировок'
  },
  {
    id: 4,
    name: 'Умные часы Series X',
    price: 24990,
    rating: 4.7,
    reviews: 456,
    image: 'https://cdn.poehali.dev/projects/a81e2cee-ea46-43ba-918a-0aeedf6146e1/files/c8dbbeb6-fc15-4963-baa5-515cd27e9f16.jpg',
    discount: 10,
    category: 'Электроника',
    description: 'Умные часы с множеством функций для здоровья и фитнеса'
  },
  {
    id: 5,
    name: 'Портативная колонка',
    price: 5990,
    rating: 4.5,
    reviews: 321,
    image: 'https://cdn.poehali.dev/projects/a81e2cee-ea46-43ba-918a-0aeedf6146e1/files/dbcd906d-a106-4cca-a790-a45f9efe7149.jpg',
    discount: 30,
    category: 'Аудио',
    description: 'Компактная колонка с мощным звуком'
  },
  {
    id: 6,
    name: 'Рюкзак Premium',
    price: 6990,
    rating: 4.8,
    reviews: 178,
    image: 'https://cdn.poehali.dev/projects/a81e2cee-ea46-43ba-918a-0aeedf6146e1/files/f5420642-8be4-4eb9-9d59-92444709ba49.jpg',
    discount: 15,
    category: 'Аксессуары',
    description: 'Вместительный рюкзак из качественных материалов'
  },
  {
    id: 7,
    name: 'Игровая консоль',
    price: 45990,
    rating: 4.9,
    reviews: 672,
    image: 'https://cdn.poehali.dev/projects/a81e2cee-ea46-43ba-918a-0aeedf6146e1/files/c8dbbeb6-fc15-4963-baa5-515cd27e9f16.jpg',
    discount: 0,
    category: 'Игрушки',
    description: 'Новейшая игровая консоль с потрясающей графикой'
  },
  {
    id: 8,
    name: 'Фитнес-браслет',
    price: 3990,
    rating: 4.4,
    reviews: 289,
    image: 'https://cdn.poehali.dev/projects/a81e2cee-ea46-43ba-918a-0aeedf6146e1/files/c8dbbeb6-fc15-4963-baa5-515cd27e9f16.jpg',
    discount: 20,
    category: 'Спорт',
    description: 'Отслеживание активности и показателей здоровья'
  },
  {
    id: 9,
    name: 'Набор косметики',
    price: 7990,
    rating: 4.7,
    reviews: 543,
    image: 'https://cdn.poehali.dev/projects/a81e2cee-ea46-43ba-918a-0aeedf6146e1/files/f5420642-8be4-4eb9-9d59-92444709ba49.jpg',
    discount: 35,
    category: 'Красота',
    description: 'Профессиональный набор косметики'
  },
  {
    id: 10,
    name: 'Умный пылесос',
    price: 19990,
    rating: 4.6,
    reviews: 412,
    image: 'https://cdn.poehali.dev/projects/a81e2cee-ea46-43ba-918a-0aeedf6146e1/files/c8dbbeb6-fc15-4963-baa5-515cd27e9f16.jpg',
    discount: 25,
    category: 'Дом',
    description: 'Робот-пылесос с умным управлением'
  },
  {
    id: 11,
    name: 'Спортивная куртка',
    price: 12990,
    rating: 4.8,
    reviews: 234,
    image: 'https://cdn.poehali.dev/projects/a81e2cee-ea46-43ba-918a-0aeedf6146e1/files/f5420642-8be4-4eb9-9d59-92444709ba49.jpg',
    discount: 15,
    category: 'Одежда',
    description: 'Легкая ветрозащитная куртка'
  },
  {
    id: 12,
    name: 'Планшет Pro',
    price: 54990,
    rating: 4.9,
    reviews: 389,
    image: 'https://cdn.poehali.dev/projects/a81e2cee-ea46-43ba-918a-0aeedf6146e1/files/c8dbbeb6-fc15-4963-baa5-515cd27e9f16.jpg',
    discount: 10,
    category: 'Электроника',
    description: 'Мощный планшет для работы и развлечений'
  }
];
