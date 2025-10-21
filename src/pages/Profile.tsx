import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Profile() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-6 mb-8">
            <Avatar className="w-24 h-24">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200" />
              <AvatarFallback className="bg-gradient-primary text-white text-2xl">АП</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-1">Александр Петров</h1>
              <p className="text-muted-foreground">alex.petrov@example.com</p>
            </div>
            <Button variant="outline">
              <Icon name="Camera" className="mr-2" size={18} />
              Изменить фото
            </Button>
          </div>

          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profile">Профиль</TabsTrigger>
              <TabsTrigger value="addresses">Адреса</TabsTrigger>
              <TabsTrigger value="payment">Оплата</TabsTrigger>
              <TabsTrigger value="security">Безопасность</TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-6">Личная информация</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Имя</Label>
                    <Input id="firstName" defaultValue="Александр" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Фамилия</Label>
                    <Input id="lastName" defaultValue="Петров" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="alex.petrov@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" defaultValue="+7 (999) 123-45-67" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="birthday">Дата рождения</Label>
                    <Input id="birthday" type="date" defaultValue="1990-05-15" />
                  </div>
                </div>
                <Separator className="my-6" />
                <div className="flex justify-end gap-3">
                  <Button variant="outline">Отмена</Button>
                  <Button className="bg-gradient-primary hover:opacity-90 text-white">
                    Сохранить изменения
                  </Button>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="addresses">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Адреса доставки</h2>
                  <Button className="bg-gradient-primary hover:opacity-90 text-white">
                    <Icon name="Plus" className="mr-2" size={18} />
                    Добавить адрес
                  </Button>
                </div>
                <div className="space-y-4">
                  <Card className="p-4 border-2 border-primary">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold">Домашний адрес</h3>
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            Основной
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          г. Москва, ул. Ленина, д. 10, кв. 25
                        </p>
                        <p className="text-sm text-muted-foreground">119001</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <Icon name="Pencil" size={16} />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Icon name="Trash2" size={16} className="text-destructive" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold mb-1">Офис</h3>
                        <p className="text-sm text-muted-foreground">
                          г. Москва, Пресненская наб., д. 12
                        </p>
                        <p className="text-sm text-muted-foreground">123112</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <Icon name="Pencil" size={16} />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Icon name="Trash2" size={16} className="text-destructive" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="payment">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Способы оплаты</h2>
                  <Button className="bg-gradient-primary hover:opacity-90 text-white">
                    <Icon name="Plus" className="mr-2" size={18} />
                    Добавить карту
                  </Button>
                </div>
                <div className="space-y-4">
                  <Card className="p-4 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-xs opacity-80">VISA</div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="hover:bg-white/10">
                          <Icon name="Pencil" size={16} />
                        </Button>
                        <Button variant="ghost" size="icon" className="hover:bg-white/10">
                          <Icon name="Trash2" size={16} />
                        </Button>
                      </div>
                    </div>
                    <div className="text-xl font-mono tracking-wider mb-4">
                      **** **** **** 4242
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-xs opacity-80 mb-1">Владелец</div>
                        <div className="text-sm">ALEKSANDR PETROV</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs opacity-80 mb-1">Срок</div>
                        <div className="text-sm">12/26</div>
                      </div>
                    </div>
                  </Card>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="security">
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-6">Безопасность</h2>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Текущий пароль</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">Новый пароль</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Подтвердите пароль</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                </div>
                <Separator className="my-6" />
                <div className="flex justify-end gap-3">
                  <Button variant="outline">Отмена</Button>
                  <Button className="bg-gradient-primary hover:opacity-90 text-white">
                    Изменить пароль
                  </Button>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
}
