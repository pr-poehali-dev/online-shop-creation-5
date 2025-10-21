import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  discount?: number;
  seller: string;
}

export const ProductCard = ({
  title,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  discount,
  seller,
}: ProductCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Card className="group relative overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-muted to-background">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform group-hover:scale-110"
        />
        {discount && (
          <Badge className="absolute top-3 left-3 bg-gradient-secondary text-white border-0">
            -{discount}%
          </Badge>
        )}
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-3 right-3 bg-white/90 hover:bg-white"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Icon
            name={isFavorite ? "Heart" : "Heart"}
            size={20}
            className={isFavorite ? "fill-secondary text-secondary" : ""}
          />
        </Button>
      </div>
      
      <div className="p-4 space-y-2">
        <h3 className="font-medium text-sm line-clamp-2 min-h-[40px]">{title}</h3>
        
        <div className="flex items-center gap-1 text-sm">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={14}
                className={i < Math.floor(rating) ? "fill-accent text-accent" : "fill-muted text-muted"}
              />
            ))}
          </div>
          <span className="text-muted-foreground text-xs">({reviews})</span>
        </div>

        <p className="text-xs text-muted-foreground">{seller}</p>

        <div className="flex items-end gap-2">
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {price.toLocaleString('ru-RU')} ₽
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {originalPrice.toLocaleString('ru-RU')} ₽
            </span>
          )}
        </div>

        <Button className="w-full bg-gradient-primary hover:opacity-90 text-white border-0">
          <Icon name="ShoppingCart" size={18} className="mr-2" />
          В корзину
        </Button>
      </div>
    </Card>
  );
};
