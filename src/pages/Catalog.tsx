import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const allProducts = [
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
  },
  {
    id: 7,
    name: 'Планшет Tab Pro',
    price: 45990,
    rating: 4.6,
    reviews: 289,
    image: 'https://cdn.poehali.dev/projects/a81e2cee-ea46-43ba-918a-0aeedf6146e1/files/c8dbbeb6-fc15-4963-baa5-515cd27e9f16.jpg',
    discount: 12,
    category: 'Электроника'
  },
  {
    id: 8,
    name: 'Куртка зимняя',
    price: 15990,
    rating: 4.7,
    reviews: 654,
    image: 'https://cdn.poehali.dev/projects/a81e2cee-ea46-43ba-918a-0aeedf6146e1/files/f5420642-8be4-4eb9-9d59-92444709ba49.jpg',
    discount: 35,
    category: 'Одежда'
  }
];

const categories = ['Электроника', 'Одежда', 'Аудио', 'Аксессуары', 'Дом', 'Красота', 'Спорт', 'Игрушки'];

export default function Catalog() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [sortBy, setSortBy] = useState('popular');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const finalPrice = Math.floor(product.price * (1 - product.discount / 100));
    const matchesPrice = finalPrice >= priceRange[0] && finalPrice <= priceRange[1];
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesPrice && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link to="/">
                <h1 className="text-2xl font-bold bg-gradient-marketplace bg-clip-text text-transparent cursor-pointer">
                  MARKETPLACE
                </h1>
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Главная</Link>
                <Link to="/catalog" className="text-sm font-medium text-primary">Каталог</Link>
                <Link to="/sellers" className="text-sm font-medium hover:text-primary transition-colors">Продавцам</Link>
                <Link to="/delivery" className="text-sm font-medium hover:text-primary transition-colors">Доставка</Link>
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

              <Link to="/favorites">
                <Button variant="ghost" size="icon">
                  <Icon name="Heart" size={20} />
                </Button>
              </Link>

              <Link to="/cart">
                <Button variant="ghost" size="icon">
                  <Icon name="ShoppingCart" size={20} />
                </Button>
              </Link>

              <Link to="/profile">
                <Button variant="ghost" size="icon">
                  <Icon name="User" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Фильтры</h3>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Категории</h4>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <div key={category} className="flex items-center gap-2">
                        <Checkbox
                          id={category}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => toggleCategory(category)}
                        />
                        <label htmlFor={category} className="text-sm cursor-pointer">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Цена</h4>
                  <Slider
                    min={0}
                    max={100000}
                    step={1000}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mb-2"
                  />
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{priceRange[0].toLocaleString('ru-RU')} ₽</span>
                    <span>{priceRange[1].toLocaleString('ru-RU')} ₽</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setSelectedCategories([]);
                    setPriceRange([0, 100000]);
                    setSearchQuery('');
                  }}
                >
                  Сбросить фильтры
                </Button>
              </CardContent>
            </Card>
          </aside>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">
                Каталог товаров
                <span className="text-muted-foreground text-base ml-2">
                  ({sortedProducts.length})
                </span>
              </h2>

              <div className="flex gap-2">
                <select
                  className="border rounded-lg px-3 py-2 text-sm"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="popular">По популярности</option>
                  <option value="price-asc">Сначала дешевые</option>
                  <option value="price-desc">Сначала дорогие</option>
                  <option value="rating">По рейтингу</option>
                </select>
              </div>
            </div>

            {sortedProducts.length === 0 ? (
              <Card className="p-12 text-center">
                <Icon name="SearchX" size={48} className="mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">Ничего не найдено</h3>
                <p className="text-muted-foreground">Попробуйте изменить фильтры</p>
              </Card>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <Card key={product.id} className="group overflow-hidden hover-scale transition-all duration-300">
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
                        >
                          <Icon name="Heart" size={18} />
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
                          >
                            <Icon name="ShoppingCart" size={16} />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
