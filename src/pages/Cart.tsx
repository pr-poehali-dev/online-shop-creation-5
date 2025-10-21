import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';

export default function Cart() {
  const { items: cartItems, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  const subtotal = getTotalPrice();
  const delivery = 0;
  const total = subtotal + delivery;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Корзина</h1>

        {cartItems.length === 0 ? (
          <Card className="p-12 text-center">
            <div className="max-w-md mx-auto space-y-4">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-primary/10 flex items-center justify-center">
                <Icon name="ShoppingCart" size={48} className="text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Корзина пуста</h2>
              <p className="text-muted-foreground">
                Добавьте товары из каталога, чтобы оформить заказ
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
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id} className="p-4">
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-semibold">{item.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                            <Icon name="Tag" size={14} />
                            <span>{item.category}</span>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Icon name="Trash2" size={18} className="text-destructive" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          >
                            <Icon name="Minus" size={14} />
                          </Button>
                          <span className="font-medium w-8 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Icon name="Plus" size={14} />
                          </Button>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold">
                            {(Math.floor(item.price * (1 - item.discount / 100)) * item.quantity).toLocaleString('ru-RU')} ₽
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {Math.floor(item.price * (1 - item.discount / 100)).toLocaleString('ru-RU')} ₽ за шт.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24 space-y-4">
                <h2 className="text-2xl font-bold">Итого</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Товары ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
                    </span>
                    <span className="font-medium">
                      {subtotal.toLocaleString('ru-RU')} ₽
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Доставка</span>
                    <span className="font-medium text-green-600">Бесплатно</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between text-xl font-bold">
                  <span>Итого:</span>
                  <span>{total.toLocaleString('ru-RU')} ₽</span>
                </div>

                <div className="space-y-2">
                  <Input placeholder="Промокод" />
                  <Button variant="outline" className="w-full">
                    Применить
                  </Button>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-gradient-primary hover:opacity-90 text-white text-lg h-14"
                >
                  Оформить заказ
                </Button>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="ShieldCheck" size={16} />
                    <span>Безопасная оплата</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Truck" size={16} />
                    <span>Доставка 1-3 дня</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="RotateCcw" size={16} />
                    <span>Возврат в течение 14 дней</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}