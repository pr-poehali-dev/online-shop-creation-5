import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

export default function Header() {
  const [cartCount] = useState(3);
  const [favCount] = useState(7);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-gradient-primary p-3 rounded-xl">
                <Icon name="ShoppingBag" className="text-white" size={28} />
              </div>
            </div>
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              MarketNova
            </span>
          </Link>

          <div className="flex-1 max-w-2xl hidden md:flex">
            <div className="relative w-full">
              <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="search"
                placeholder="Искать товары, категории, бренды..."
                className="w-full pl-12 pr-4 h-12 rounded-full border-2 focus:border-primary"
              />
            </div>
          </div>

          <nav className="flex items-center gap-2">
            <Link to="/catalog">
              <Button 
                variant={isActive('/catalog') ? 'default' : 'ghost'} 
                size="sm"
                className="hidden lg:flex gap-2"
              >
                <Icon name="Grid3x3" size={18} />
                Каталог
              </Button>
            </Link>

            <Link to="/favorites">
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="Heart" size={22} />
                {favCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-gradient-primary text-white border-0">
                    {favCount}
                  </Badge>
                )}
              </Button>
            </Link>

            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="ShoppingCart" size={22} />
                {cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-gradient-primary text-white border-0">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </Link>

            <Link to="/profile">
              <Button 
                variant={isActive('/profile') ? 'default' : 'ghost'}
                size="icon"
              >
                <Icon name="User" size={22} />
              </Button>
            </Link>
          </nav>
        </div>

        <div className="md:hidden pb-4">
          <div className="relative">
            <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              type="search"
              placeholder="Поиск..."
              className="w-full pl-12 pr-4 h-11 rounded-full border-2"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
