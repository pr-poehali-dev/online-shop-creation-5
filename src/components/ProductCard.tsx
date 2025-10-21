import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  discount?: number;
  seller?: string;
}

export default function ProductCard({
  title,
  price,
  originalPrice,
  rating,
  reviews,
  image,
  discount,
  seller = 'MarketNova',
}: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsInCart(true);
    setTimeout(() => setIsInCart(false), 2000);
  };

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {discount && (
          <Badge className="absolute top-3 right-3 bg-red-500 text-white border-0 text-sm font-bold">
            -{discount}%
          </Badge>
        )}
        <Button
          size="icon"
          variant="secondary"
          className={`absolute top-3 left-3 transition-all ${
            isFavorite ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
          onClick={handleToggleFavorite}
        >
          <Icon 
            name="Heart" 
            size={18} 
            className={isFavorite ? 'fill-red-500 text-red-500' : ''}
          />
        </Button>
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <Button 
            size="sm" 
            variant="secondary" 
            className="w-full bg-white hover:bg-white/90"
          >
            <Icon name="Eye" size={16} className="mr-2" />
            Быстрый просмотр
          </Button>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Icon name="Store" size={14} />
          <span>{seller}</span>
        </div>
        <h3 className="font-semibold line-clamp-2 min-h-[2.5rem] group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-1">
            <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
            <span className="font-medium">{rating}</span>
          </div>
          <span className="text-muted-foreground">({reviews})</span>
        </div>
        <div className="flex items-end gap-2">
          <span className="text-2xl font-bold">
            {price.toLocaleString('ru-RU')} ₽
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through mb-1">
              {originalPrice.toLocaleString('ru-RU')} ₽
            </span>
          )}
        </div>
        <Button 
          className="w-full bg-gradient-primary hover:opacity-90 text-white"
          onClick={handleAddToCart}
          disabled={isInCart}
        >
          {isInCart ? (
            <>
              <Icon name="Check" className="mr-2" size={18} />
              Добавлено
            </>
          ) : (
            <>
              <Icon name="ShoppingCart" className="mr-2" size={18} />
              В корзину
            </>
          )}
        </Button>
      </div>
    </Card>
  );
}
