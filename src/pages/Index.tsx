import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: 'Смартфон Ultra Pro',
    price: 89990,
    rating: 4.8,
    reviews: 234,
    image: 'https://cdn.poehali.dev/projects/a81e2cee-ea46-43ba-918a-0aeedf6146e1/files/c8dbbeb6-fc15-4963-baa5-515cd27e9f16.jpg',
    discount: 15,
    category: 'Электроника'
  },
  {
    id: 2,
    name: 'Беспроводные наушники',
    price: 12990,
    rating: 4.6,
    reviews: 567,
    image: 'https://cdn.poehali.dev/projects/a81e2cee-ea46-43ba-918a-0aeedf6146e1/files/dbcd906d-a106-4cca-a790-a45f9efe7149.jpg',
    discount: 20,
    category: 'Аудио'
  },
  {
    id: 3,
    name: 'Кроссовки Sport Max',
    price: 8990,
    rating: 4.9,
    reviews: 892,
    image: 'https://cdn.poehali.dev/projects/a81e2cee-ea46-43ba-918a-0aeedf6146e1/files/f5420642-8be4-4eb9-9d59-92444709ba49.jpg',
    discount: 25,
    category: 'Одежда'
  },
  {
    id: 4,
    name: 'Умные часы Series X',
    price: 24990,
    rating: 4.7,
    reviews: 456,
    image: 'https://cdn.poehali.dev/projects/a81e2cee-ea46-43ba-918a-0aeedf6146e1/files/c8dbbeb6-fc15-4963-baa5-515cd27e9f16.jpg',
    discount: 10,
    category: 'Электроника'
  },
  {
    id: 5,
    name: 'Портативная колонка',
    price: 5990,
    rating: 4.5,
    reviews: 321,
    image: 'https://cdn.poehali.dev/projects/a81e2cee-ea46-43ba-918a-0aeedf6146e1/files/dbcd906d-a106-4cca-a790-a45f9efe7149.jpg',
    discount: 30,
    category: 'Аудио'
  },
  {
    id: 6,
    name: 'Рюкзак Premium',
    price: 6990,
    rating: 4.8,
    reviews: 178,
    image: 'https://cdn.poehali.dev/projects/a81e2cee-ea46-43ba-918a-0aeedf6146e1/files/f5420642-8be4-4eb9-9d59-92444709ba49.jpg',
    discount: 15,
    category: 'Аксессуары'
  }
];

const categories = [
  { name: 'Электроника', icon: 'Smartphone' },
  { name: 'Одежда', icon: 'ShoppingBag' },
  { name: 'Дом', icon: 'Home' },
  { name: 'Красота', icon: 'Sparkles' },
  { name: 'Спорт', icon: 'Dumbbell' },
  { name: 'Игрушки', icon: 'Gamepad2' }
];

export default function Index() {
  const [cartCount, setCartCount] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFavorite = (productId: number) => {
    setFavorites(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold bg-gradient-marketplace bg-clip-text text-transparent">
                MARKETPLACE
              </h1>
              <nav className="hidden md:flex items-center gap-6">
                <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
                <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Каталог</a>
                <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Продавцам</a>
                <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Доставка</a>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative hidden lg:block w-96">
                <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  placeholder="Поиск товаров..."
                  className="pl-10 rounded-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <Button variant="ghost" size="icon" className="relative">
                <Icon name="Heart" size={20} />
                {favorites.length > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-vibrant-red">
                    {favorites.length}
                  </Badge>
                )}
              </Button>

              <Button variant="ghost" size="icon" className="relative">
                <Icon name="ShoppingCart" size={20} />
                {cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-vibrant-red">
                    {cartCount}
                  </Badge>
                )}
              </Button>

              <Button variant="ghost" size="icon">
                <Icon name="User" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-multi py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Супер распродажа!
          </h2>
          <p className="text-xl text-white/90 mb-8 animate-fade-in">
            Скидки до 50% на популярные товары
          </p>
          <Button size="lg" className="bg-white text-deep-purple hover:bg-white/90 text-lg px-8 animate-scale-in">
            Смотреть все акции
          </Button>
        </div>
      </section>

      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6">Популярные категории</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Card
                key={category.name}
                className="hover-scale cursor-pointer border-2 hover:border-primary transition-all"
              >
                <CardContent className="flex flex-col items-center justify-center p-6 gap-3">
                  <div className="w-16 h-16 rounded-full bg-gradient-marketplace flex items-center justify-center">
                    <Icon name={category.icon as any} size={28} className="text-white" />
                  </div>
                  <span className="font-medium text-center">{category.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">Популярные товары</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Icon name="SlidersHorizontal" size={16} className="mr-2" />
                Фильтры
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="ArrowUpDown" size={16} className="mr-2" />
                Сортировка
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="group overflow-hidden hover-scale transition-all duration-300 animate-fade-in">
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {product.discount > 0 && (
                      <Badge className="absolute top-3 left-3 bg-vibrant-red text-white">
                        -{product.discount}%
                      </Badge>
                    )}
                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => toggleFavorite(product.id)}
                    >
                      <Icon
                        name="Heart"
                        size={18}
                        className={favorites.includes(product.id) ? 'fill-vibrant-red text-vibrant-red' : ''}
                      />
                    </Button>
                  </div>

                  <div className="p-4">
                    <Badge variant="outline" className="mb-2 text-xs">
                      {product.category}
                    </Badge>
                    <h4 className="font-semibold mb-2 line-clamp-2">{product.name}</h4>

                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Icon name="Star" size={14} className="fill-bright-yellow text-bright-yellow" />
                        <span className="text-sm font-medium">{product.rating}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        ({product.reviews} отзывов)
                      </span>
                    </div>

                    <div className="flex items-end justify-between">
                      <div>
                        {product.discount > 0 && (
                          <span className="text-xs text-muted-foreground line-through block">
                            {product.price.toLocaleString('ru-RU')} ₽
                          </span>
                        )}
                        <span className="text-xl font-bold">
                          {Math.floor(product.price * (1 - product.discount / 100)).toLocaleString('ru-RU')} ₽
                        </span>
                      </div>
                      <Button
                        size="sm"
                        className="bg-gradient-marketplace hover:opacity-90"
                        onClick={addToCart}
                      >
                        <Icon name="ShoppingCart" size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-deep-purple text-white py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-marketplace bg-clip-text text-transparent">
                MARKETPLACE
              </h3>
              <p className="text-white/70 text-sm">
                Современный маркетплейс с лучшими ценами и быстрой доставкой
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Покупателям</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Каталог</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Оплата</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Возврат</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Продавцам</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Вакансии</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Поддержка</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  8 800 555-35-35
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@marketplace.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Примерная, 1
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/50">
            © 2024 MARKETPLACE. Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
}
