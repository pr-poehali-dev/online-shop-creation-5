import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const categories = [
  { name: 'Электроника', icon: 'Smartphone' },
  { name: 'Одежда', icon: 'ShoppingBag' },
  { name: 'Дом', icon: 'Home' },
  { name: 'Красота', icon: 'Sparkles' },
  { name: 'Спорт', icon: 'Dumbbell' },
  { name: 'Игрушки', icon: 'Gamepad2' }
];

export default function Index() {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative overflow-hidden bg-gradient-multi py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Супер распродажа!
          </h2>
          <p className="text-xl text-white/90 mb-8 animate-fade-in">
            Скидки до 50% на популярные товары
          </p>
          <Link to="/catalog">
            <Button size="lg" className="bg-white text-deep-purple hover:bg-white/90 text-lg px-8 animate-scale-in">
              Смотреть все акции
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6">Популярные категории</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link key={category.name} to={`/catalog?category=${category.name}`}>
                <Card className="hover-scale cursor-pointer border-2 hover:border-primary transition-all">
                  <CardContent className="flex flex-col items-center justify-center p-6 gap-3">
                    <div className="w-16 h-16 rounded-full bg-gradient-marketplace flex items-center justify-center">
                      <Icon name={category.icon as any} size={28} className="text-white" />
                    </div>
                    <span className="font-medium text-center">{category.name}</span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">Популярные товары</h3>
            <Link to="/catalog">
              <Button variant="outline">
                Смотреть все
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
