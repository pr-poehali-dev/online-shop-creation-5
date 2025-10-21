import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { useFavorites } from '@/hooks/useFavorites';
import { products } from '@/data/products';

export default function Favorites() {
  const { favorites: favoriteIds } = useFavorites();
  const favoriteProducts = products.filter(product => favoriteIds.includes(product.id));

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Избранное</h1>
          <p className="text-muted-foreground">{favoriteProducts.length} товаров</p>
        </div>

        {favoriteProducts.length === 0 ? (
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
            {favoriteProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}