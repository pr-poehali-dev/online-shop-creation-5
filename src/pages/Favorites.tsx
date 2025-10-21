import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function Favorites() {
  const favorites = [
    { id: 1, title: 'Смартфон Galaxy S24 Ultra 256GB', price: 79990, originalPrice: 99990, rating: 4.8, reviews: 342, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400', discount: 20, seller: 'TechStore' },
    { id: 2, title: 'Беспроводные наушники AirPods Pro', price: 12990, originalPrice: 18990, rating: 4.6, reviews: 156, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400', discount: 32, seller: 'AudioShop' },
    { id: 3, title: 'Умные часы Apple Watch Series 9', price: 24990, originalPrice: 34990, rating: 4.9, reviews: 521, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400', discount: 29, seller: 'Gadget Store' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Избранное</h1>
          <p className="text-muted-foreground">{favorites.length} товаров</p>
        </div>

        {favorites.length === 0 ? (
          <Card className="p-12 text-center">
            <div className="max-w-md mx-auto space-y-4">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-primary/10 flex items-center justify-center">
                <Icon name="Heart" size={48} className="text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Избранное пусто</h2>
              <p className="text-muted-foreground">
                Добавляйте понравившиеся товары в избранное, чтобы не потерять их
              </p>
              <Link to="/catalog">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white">
                  <Icon name="ShoppingBag" className="mr-2" size={20} />
                  Перейти в каталог
                </Button>
              </Link>
            </div>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {favorites.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
