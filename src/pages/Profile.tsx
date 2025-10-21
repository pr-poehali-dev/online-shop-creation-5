import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("info");

  const tabs = [
    { id: "info", label: "Личные данные", icon: "User" },
    { id: "addresses", label: "Адреса", icon: "MapPin" },
    { id: "payments", label: "Способы оплаты", icon: "CreditCard" },
    { id: "notifications", label: "Уведомления", icon: "Bell" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Профиль</h1>

        <div className="grid lg:grid-cols-4 gap-6">
          <aside className="lg:col-span-1">
            <Card className="p-6 mb-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="w-24 h-24 mb-4 bg-gradient-primary" />
                <h3 className="font-bold text-lg mb-1">Иван Иванов</h3>
                <p className="text-sm text-muted-foreground mb-4">ivan@example.com</p>
                <Badge className="bg-gradient-secondary text-white border-0">
                  <Icon name="Star" size={14} className="mr-1" />
                  Premium
                </Badge>
              </div>
            </Card>

            <Card className="p-4">
              <nav className="space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      activeTab === tab.id
                        ? "bg-gradient-primary text-white"
                        : "hover:bg-muted"
                    }`}
                  >
                    <Icon name={tab.icon as any} size={20} />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                ))}
              </nav>
            </Card>
          </aside>

          <div className="lg:col-span-3">
            {activeTab === "info" && (
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Личные данные</h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Имя</Label>
                      <Input defaultValue="Иван" />
                    </div>
                    <div className="space-y-2">
                      <Label>Фамилия</Label>
                      <Input defaultValue="Иванов" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input type="email" defaultValue="ivan@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label>Телефон</Label>
                    <Input type="tel" defaultValue="+7 (999) 123-45-67" />
                  </div>

                  <div className="space-y-2">
                    <Label>Дата рождения</Label>
                    <Input type="date" defaultValue="1990-01-15" />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button className="bg-gradient-primary text-white">
                      Сохранить изменения
                    </Button>
                    <Button variant="outline">Отмена</Button>
                  </div>
                </div>
              </Card>
            )}

            {activeTab === "addresses" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">Адреса доставки</h2>
                  <Button className="bg-gradient-primary text-white">
                    <Icon name="Plus" size={18} className="mr-2" />
                    Добавить адрес
                  </Button>
                </div>

                <Card className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold">Домашний адрес</h3>
                        <Badge variant="outline">Основной</Badge>
                      </div>
                      <p className="text-muted-foreground">
                        г. Москва, ул. Ленина, д. 10, кв. 25
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Иван Иванов, +7 (999) 123-45-67
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Icon name="Pencil" size={18} />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Icon name="Trash2" size={18} className="text-destructive" />
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold mb-2">Рабочий адрес</h3>
                      <p className="text-muted-foreground">
                        г. Москва, Красная площадь, д. 1
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Иван Иванов, +7 (999) 123-45-67
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Icon name="Pencil" size={18} />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Icon name="Trash2" size={18} className="text-destructive" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {activeTab === "payments" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">Способы оплаты</h2>
                  <Button className="bg-gradient-primary text-white">
                    <Icon name="Plus" size={18} className="mr-2" />
                    Добавить карту
                  </Button>
                </div>

                <Card className="p-6 bg-gradient-to-br from-primary to-secondary text-white">
                  <div className="flex items-start justify-between mb-8">
                    <Icon name="CreditCard" size={32} />
                    <Badge className="bg-white/20 text-white border-0">Основная</Badge>
                  </div>
                  <div className="space-y-1 mb-6">
                    <p className="text-white/80 text-sm">Номер карты</p>
                    <p className="text-2xl font-mono tracking-wider">•••• •••• •••• 4242</p>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-white/80 text-xs mb-1">Владелец</p>
                      <p className="font-medium">IVAN IVANOV</p>
                    </div>
                    <div>
                      <p className="text-white/80 text-xs mb-1">Срок</p>
                      <p className="font-medium">12/25</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center">
                        <Icon name="CreditCard" size={24} className="text-white" />
                      </div>
                      <div>
                        <p className="font-medium">•••• 8765</p>
                        <p className="text-sm text-muted-foreground">Visa Classic</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Icon name="Pencil" size={18} />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Icon name="Trash2" size={18} className="text-destructive" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {activeTab === "notifications" && (
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Настройки уведомлений</h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between py-4 border-b">
                    <div>
                      <h4 className="font-medium mb-1">Email уведомления</h4>
                      <p className="text-sm text-muted-foreground">
                        Получать информацию о заказах и акциях
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Вкл
                    </Button>
                  </div>

                  <div className="flex items-center justify-between py-4 border-b">
                    <div>
                      <h4 className="font-medium mb-1">SMS уведомления</h4>
                      <p className="text-sm text-muted-foreground">
                        Получать SMS о статусе доставки
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Вкл
                    </Button>
                  </div>

                  <div className="flex items-center justify-between py-4 border-b">
                    <div>
                      <h4 className="font-medium mb-1">Push уведомления</h4>
                      <p className="text-sm text-muted-foreground">
                        Получать уведомления в браузере
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Выкл
                    </Button>
                  </div>

                  <div className="flex items-center justify-between py-4">
                    <div>
                      <h4 className="font-medium mb-1">Рекламные рассылки</h4>
                      <p className="text-sm text-muted-foreground">
                        Получать информацию о специальных предложениях
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Вкл
                    </Button>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
