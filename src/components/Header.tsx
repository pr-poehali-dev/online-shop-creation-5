import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/catalog?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <Icon name="Zap" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent hidden sm:block">
              MarketFlow
            </span>
          </Link>

          <form onSubmit={handleSearch} className="flex-1 max-w-2xl">
            <div className="relative">
              <Icon
                name="Search"
                size={20}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                type="text"
                placeholder="Искать товары, бренды, продавцов..."
                className="pl-10 pr-4 h-11 rounded-xl border-2 focus:border-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>

          <nav className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => navigate("/catalog")}
            >
              <Icon name="Grid3x3" size={22} />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => navigate("/favorites")}
            >
              <Icon name="Heart" size={22} />
              <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => navigate("/cart")}
            >
              <Icon name="ShoppingCart" size={22} />
              <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/profile")}
            >
              <Icon name="User" size={22} />
            </Button>
          </nav>
        </div>

        <nav className="flex items-center gap-6 pb-3 overflow-x-auto">
          <Link to="/catalog" className="text-sm hover:text-primary whitespace-nowrap">
            Каталог
          </Link>
          <Link to="/orders" className="text-sm hover:text-primary whitespace-nowrap">
            Заказы
          </Link>
          <Link to="/delivery" className="text-sm hover:text-primary whitespace-nowrap">
            Доставка
          </Link>
          <Link to="/support" className="text-sm hover:text-primary whitespace-nowrap">
            Поддержка
          </Link>
          <Link to="/sellers" className="text-sm hover:text-primary whitespace-nowrap">
            Продавцам
          </Link>
        </nav>
      </div>
    </header>
  );
};
