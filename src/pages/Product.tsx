import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://cdn.poehali.dev/projects/a81e2cee-ea46-43ba-918a-0aeedf6146e1/files/aa29ceca-2857-439a-a0da-c0a5cd99143f.jpg",
    "https://cdn.poehali.dev/projects/a81e2cee-ea46-43ba-918a-0aeedf6146e1/files/0a092e27-85d4-4b1a-8682-a6e3aa6e612d.jpg",
    "https://cdn.poehali.dev/projects/a81e2cee-ea46-43ba-918a-0aeedf6146e1/files/fedeb272-292e-4706-8216-2a201c116bdb.jpg",
  ];

  const reviews = [
    {
      id: 1,
      author: "Иван П.",
      rating: 5,
      date: "15 октября 2024",
      text: "Отличный товар! Качество на высоте, доставка быстрая. Рекомендую!",
      helpful: 24,
    },
    {
      id: 2,
      author: "Мария С.",
      rating: 4,
      date: "10 октября 2024",
      text: "Хороший продукт за свои деньги. Небольшие замечания по упаковке, но в целом доволен покупкой.",
      helpful: 12,
    },
    {
      id: 3,
      author: "Алексей К.",
      rating: 5,
      date: "5 октября 2024",
      text: "Превосходное качество! Уже второй раз заказываю у этого продавца. Всё отлично!",
      helpful: 18,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="aspect-square bg-gradient-to-br from-muted to-background rounded-2xl overflow-hidden mb-4">
              <img
                src={images[selectedImage]}
                alt="Product"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === i ? "border-primary scale-105" : "border-transparent"
                  }`}
                >
                  <img src={img} alt={`Preview ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <Badge className="mb-3 bg-gradient-secondary text-white border-0">
                -25% Скидка
              </Badge>
              <h1 className="text-4xl font-bold mb-4">
                Смартфон Galaxy S24 Ultra 256GB
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={20}
                      className={i < 5 ? "fill-accent text-accent" : "fill-muted text-muted"}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">4.9 (1,245 отзывов)</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Продавец: <span className="text-foreground font-medium">TechStore Official</span>
                <Badge variant="outline" className="ml-2">Проверенный</Badge>
              </p>
            </div>

            <div className="border-t border-b py-6 space-y-4">
              <div className="flex items-end gap-4">
                <span className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  89 990 ₽
                </span>
                <span className="text-2xl text-muted-foreground line-through mb-2">
                  119 990 ₽
                </span>
              </div>
              <p className="text-green-600 font-medium flex items-center gap-2">
                <Icon name="Check" size={20} />
                В наличии
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <Label className="mb-2 block font-medium">Количество</Label>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Icon name="Minus" size={18} />
                  </Button>
                  <span className="text-xl font-medium w-12 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Icon name="Plus" size={18} />
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button className="flex-1 bg-gradient-primary text-white text-lg h-14">
                  <Icon name="ShoppingCart" size={22} className="mr-2" />
                  Добавить в корзину
                </Button>
                <Button variant="outline" size="icon" className="h-14 w-14">
                  <Icon name="Heart" size={22} />
                </Button>
              </div>

              <Button variant="outline" className="w-full h-12">
                <Icon name="BarChart3" size={20} className="mr-2" />
                Сравнить с другими
              </Button>
            </div>

            <Card className="p-6 bg-gradient-to-br from-muted/50 to-background">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <Icon name="Truck" size={32} className="mx-auto mb-2 text-primary" />
                  <p className="text-sm font-medium">Доставка 1-2 дня</p>
                </div>
                <div className="text-center">
                  <Icon name="ShieldCheck" size={32} className="mx-auto mb-2 text-primary" />
                  <p className="text-sm font-medium">Гарантия 2 года</p>
                </div>
                <div className="text-center">
                  <Icon name="RotateCcw" size={32} className="mx-auto mb-2 text-primary" />
                  <p className="text-sm font-medium">Возврат 14 дней</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Описание товара</h2>
              <div className="prose max-w-none text-muted-foreground space-y-3">
                <p>
                  Новейший флагманский смартфон с революционными технологиями и безупречным дизайном.
                  Galaxy S24 Ultra оснащён мощным процессором, великолепным дисплеем и передовой системой камер.
                </p>
                <h3 className="text-foreground font-semibold mt-4">Основные характеристики:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Дисплей: 6.8" Dynamic AMOLED 2X, 120Hz</li>
                  <li>Процессор: Snapdragon 8 Gen 3</li>
                  <li>Память: 12GB RAM / 256GB ROM</li>
                  <li>Камеры: 200MP + 50MP + 12MP + 10MP</li>
                  <li>Аккумулятор: 5000 mAh с быстрой зарядкой</li>
                  <li>ОС: Android 14 с One UI 6</li>
                </ul>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Отзывы ({reviews.length})</h2>
                <Button variant="outline">
                  <Icon name="MessageSquare" size={18} className="mr-2" />
                  Написать отзыв
                </Button>
              </div>
              
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b pb-6 last:border-0">
                    <div className="flex items-start gap-4">
                      <Avatar className="w-12 h-12 bg-gradient-primary" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <p className="font-medium">{review.author}</p>
                            <p className="text-sm text-muted-foreground">{review.date}</p>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Icon
                                key={i}
                                name="Star"
                                size={16}
                                className={i < review.rating ? "fill-accent text-accent" : "fill-muted text-muted"}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-3">{review.text}</p>
                        <div className="flex items-center gap-4">
                          <Button variant="ghost" size="sm">
                            <Icon name="ThumbsUp" size={16} className="mr-1" />
                            Полезно ({review.helpful})
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Icon name="MessageCircle" size={16} className="mr-1" />
                            Ответить
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Icon name="Store" size={20} />
                О продавце
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar className="w-16 h-16 bg-gradient-accent" />
                  <div>
                    <p className="font-medium">TechStore Official</p>
                    <div className="flex items-center gap-1 text-sm">
                      <Icon name="Star" size={14} className="fill-accent text-accent" />
                      <span>4.9</span>
                      <span className="text-muted-foreground">(5,432)</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Продавец с:</span>
                    <span className="font-medium">2020 года</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Товаров:</span>
                    <span className="font-medium">1,234</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Ответ:</span>
                    <span className="font-medium">В течение часа</span>
                  </div>
                </div>
                <Button className="w-full" variant="outline">
                  <Icon name="MessageSquare" size={18} className="mr-2" />
                  Связаться
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Product;