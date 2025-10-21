import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Orders = () => {
  const orders = [
    {
      id: "ORD-2024-10-001",
      date: "20 октября 2024",
      status: "delivered",
      statusText: "Доставлен",
      total: 89990,
      items: [
        {
          title: "Смартфон Galaxy S24 Ultra 256GB",
          quantity: 1,
          price: 89990,
          image: "https://cdn.poehali.dev/projects/a81e2cee-ea46-43ba-918a-0aeedf6146e1/files/aa29ceca-2857-439a-a0da-c0a5cd99143f.jpg",
        },
      ],
    },
    {
      id: "ORD-2024-10-002",
      date: "18 октября 2024",
      status: "in_transit",
      statusText: "В пути",
      total: 49980,
      items: [
        {
          title: "Беспроводные наушники AirPods Pro",
          quantity: 2,
          price: 24990,
          image: "https://cdn.poehali.dev/projects/a81e2cee-ea46-43ba-918a-0aeedf6146e1/files/0a092e27-85d4-4b1a-8682-a6e3aa6e612d.jpg",
        },
      ],
    },
    {
      id: "ORD-2024-10-003",
      date: "15 октября 2024",
      status: "processing",
      statusText: "Обработка",
      total: 129990,
      items: [
        {
          title: "Ноутбук MacBook Air M2 13.6",
          quantity: 1,
          price: 129990,
          image: "https://cdn.poehali.dev/projects/a81e2cee-ea46-43ba-918a-0aeedf6146e1/files/fedeb272-292e-4706-8216-2a201c116bdb.jpg",
        },
      ],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-500";
      case "in_transit":
        return "bg-blue-500";
      case "processing":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Мои заказы</h1>

        <div className="space-y-6">
          {orders.map((order) => (
            <Card key={order.id} className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 pb-6 border-b gap-4">
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-xl font-bold">{order.id}</h3>
                    <Badge className={`${getStatusColor(order.status)} text-white border-0`}>
                      {order.statusText}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground flex items-center gap-2">
                    <Icon name="Calendar" size={16} />
                    {order.date}
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground mb-1">Итого</p>
                    <p className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                      {order.total.toLocaleString('ru-RU')} ₽
                    </p>
                  </div>
                  <Button variant="outline">
                    Детали
                    <Icon name="ChevronRight" size={18} className="ml-2" />
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-muted flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium mb-2">{item.title}</h4>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">
                          Количество: {item.quantity}
                        </p>
                        <p className="font-medium">
                          {(item.price * item.quantity).toLocaleString('ru-RU')} ₽
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 mt-6 pt-6 border-t">
                {order.status === "delivered" && (
                  <>
                    <Button variant="outline">
                      <Icon name="MessageSquare" size={18} className="mr-2" />
                      Оставить отзыв
                    </Button>
                    <Button variant="outline">
                      <Icon name="RotateCcw" size={18} className="mr-2" />
                      Вернуть товар
                    </Button>
                  </>
                )}
                {order.status === "in_transit" && (
                  <Button variant="outline">
                    <Icon name="MapPin" size={18} className="mr-2" />
                    Отследить заказ
                  </Button>
                )}
                <Button variant="outline">
                  <Icon name="Download" size={18} className="mr-2" />
                  Чек
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {orders.length === 0 && (
          <Card className="p-12 text-center">
            <Icon name="Package" size={64} className="mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-2xl font-bold mb-2">Заказов пока нет</h2>
            <p className="text-muted-foreground mb-6">
              Оформите первый заказ в каталоге
            </p>
            <Button className="bg-gradient-primary text-white">
              Перейти в каталог
            </Button>
          </Card>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Orders;