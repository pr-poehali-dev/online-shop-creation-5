import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useCart } from '@/hooks/useCart';
import { useFavorites } from '@/hooks/useFavorites';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { favorites, toggleFavorite } = useFavorites();

  const finalPrice = Math.floor(product.price * (1 - product.discount / 100));

  return (
    <Card className="group overflow-hidden hover-scale transition-all duration-300 animate-fade-in relative">
      <CardContent className="p-0">
        <Link to={`/product/${product.id}`}>
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
          </div>
        </Link>

        <Button
          size="icon"
          variant="secondary"
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-10"
          onClick={() => toggleFavorite(product.id)}
        >
          <Icon
            name="Heart"
            size={18}
            className={favorites.includes(product.id) ? 'fill-vibrant-red text-vibrant-red' : ''}
          />
        </Button>

        <div className="p-4">
          <Badge variant="outline" className="mb-2 text-xs">
            {product.category}
          </Badge>
          <Link to={`/product/${product.id}`}>
            <h4 className="font-semibold mb-2 line-clamp-2 hover:text-primary transition-colors">
              {product.name}
            </h4>
          </Link>

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
                {finalPrice.toLocaleString('ru-RU')} ₽
              </span>
            </div>
            <Button
              size="sm"
              className="bg-gradient-marketplace hover:opacity-90"
              onClick={() => addToCart(product)}
            >
              <Icon name="ShoppingCart" size={16} />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
