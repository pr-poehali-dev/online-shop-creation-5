import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useCart } from '@/hooks/useCart';
import { useFavorites } from '@/hooks/useFavorites';

export default function Header() {
  const location = useLocation();
  const { cartCount } = useCart();
  const { favoritesCount } = useFavorites();
  const [searchQuery, setSearchQuery] = useState('');

  const isActive = (path: string) => location.pathname === path;

  return (
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
              <Link
                to="/"
                className={`text-sm font-medium transition-colors ${
                  isActive('/') ? 'text-primary' : 'hover:text-primary'
                }`}
              >
                Главная
              </Link>
              <Link
                to="/catalog"
                className={`text-sm font-medium transition-colors ${
                  isActive('/catalog') ? 'text-primary' : 'hover:text-primary'
                }`}
              >
                Каталог
              </Link>
              <Link
                to="/sellers"
                className={`text-sm font-medium transition-colors ${
                  isActive('/sellers') ? 'text-primary' : 'hover:text-primary'
                }`}
              >
                Продавцам
              </Link>
              <Link
                to="/delivery"
                className={`text-sm font-medium transition-colors ${
                  isActive('/delivery') ? 'text-primary' : 'hover:text-primary'
                }`}
              >
                Доставка
              </Link>
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
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="Heart" size={20} />
                {favoritesCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-vibrant-red">
                    {favoritesCount}
                  </Badge>
                )}
              </Button>
            </Link>

            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="ShoppingCart" size={20} />
                {cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-vibrant-red">
                    {cartCount}
                  </Badge>
                )}
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
  );
}
