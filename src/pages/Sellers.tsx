import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

export default function Sellers() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="text-2xl font-bold bg-gradient-marketplace bg-clip-text text-transparent">
              MARKETPLACE
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Главная</Link>
              <Link to="/catalog" className="text-sm font-medium hover:text-primary transition-colors">Каталог</Link>
              <Link to="/sellers" className="text-sm font-medium text-primary">Продавцам</Link>
              <Link to="/delivery" className="text-sm font-medium hover:text-primary transition-colors">Доставка</Link>
            </nav>
            <div className="flex items-center gap-4">
              <Link to="/favorites">
                <Button variant="ghost" size="icon">
                  <Icon name="Heart" size={20} />
                </Button>
              </Link>
              <Link to="/cart">
                <Button variant="ghost" size="icon">
                  <Icon name="ShoppingCart" size={20} />
                </Button>
              </Link>
              <Link to="/profile">
                <Button variant="ghost" size="icon">
                  <Icon name="User" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-gradient-multi py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Начните продавать на MARKETPLACE
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Миллионы покупателей ждут ваши товары. Присоединяйтесь к крупнейшему маркетплейсу России!
          </p>
          <Button size="lg" className="bg-white text-deep-purple hover:bg-white/90 text-lg px-8">
            Стать продавцом
          </Button>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card>
            <CardHeader>
              <div className="w-16 h-16 rounded-full bg-gradient-marketplace flex items-center justify-center mb-4">
                <Icon name="Users" size={32} className="text-white" />
              </div>
              <CardTitle>Миллионы покупателей</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Доступ к огромной аудитории активных покупателей по всей России
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-16 h-16 rounded-full bg-gradient-marketplace flex items-center justify-center mb-4">
                <Icon name="TrendingUp" size={32} className="text-white" />
              </div>
              <CardTitle>Рост продаж</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Инструменты аналитики и маркетинга для увеличения ваших продаж
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-16 h-16 rounded-full bg-gradient-marketplace flex items-center justify-center mb-4">
                <Icon name="Headphones" size={32} className="text-white" />
              </div>
              <CardTitle>Поддержка 24/7</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Персональный менеджер и круглосуточная техническая поддержка
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-3xl font-bold text-center mb-12">Как начать продавать</h2>
        
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { step: '1', title: 'Регистрация', desc: 'Заполните форму и пройдите простую регистрацию', icon: 'UserPlus' },
            { step: '2', title: 'Загрузка товаров', desc: 'Добавьте товары через личный кабинет продавца', icon: 'Upload' },
            { step: '3', title: 'Настройка', desc: 'Укажите условия доставки и способы оплаты', icon: 'Settings' },
            { step: '4', title: 'Старт продаж', desc: 'Начните принимать заказы и зарабатывать', icon: 'Rocket' }
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-marketplace flex items-center justify-center mx-auto mb-4">
                <Icon name={item.icon as any} size={28} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{item.step}</div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Начните продавать сегодня</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Иван Иванов" />
                </div>
                <div>
                  <Label htmlFor="company">Название компании</Label>
                  <Input id="company" placeholder="ООО Компания" />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" placeholder="+7 (999) 123-45-67" />
              </div>
              <div>
                <Label htmlFor="category">Категория товаров</Label>
                <Input id="category" placeholder="Электроника, одежда и т.д." />
              </div>
              <Button className="w-full bg-gradient-marketplace text-lg py-6">
                Отправить заявку
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных
              </p>
            </form>
          </CardContent>
        </Card>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Условия сотрудничества</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <Icon name="Check" className="text-turquoise" size={20} />
                <span>Комиссия от 5% от продаж</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Check" className="text-turquoise" size={20} />
                <span>Быстрые выплаты каждую неделю</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Check" className="text-turquoise" size={20} />
                <span>Без абонентской платы</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Check" className="text-turquoise" size={20} />
                <span>Помощь в логистике</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Контакты для партнеров</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <Icon name="Phone" className="text-primary" size={20} />
                <span>8 800 555-35-36 (для продавцов)</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Mail" className="text-primary" size={20} />
                <span>sellers@marketplace.ru</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="MessageCircle" className="text-primary" size={20} />
                <span>Telegram: @marketplace_sellers</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Clock" className="text-primary" size={20} />
                <span>Пн-Пт: 9:00 - 18:00 МСК</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
