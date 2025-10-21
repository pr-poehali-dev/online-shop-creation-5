import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-primary p-2.5 rounded-xl">
                <Icon name="ShoppingBag" className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                MarketNova
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-sm">
              Современный маркетплейс с лучшими товарами от проверенных продавцов. 
              Быстрая доставка, гарантия качества.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="hover:bg-gradient-primary hover:text-white">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-gradient-primary hover:text-white">
                <Icon name="Send" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-gradient-primary hover:text-white">
                <Icon name="Youtube" size={20} />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Покупателям</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/catalog" className="hover:text-primary transition-colors">Каталог</Link></li>
              <li><Link to="/delivery" className="hover:text-primary transition-colors">Доставка</Link></li>
              <li><Link to="/support" className="hover:text-primary transition-colors">Поддержка</Link></li>
              <li><Link to="/orders" className="hover:text-primary transition-colors">Мои заказы</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Продавцам</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/sellers" className="hover:text-primary transition-colors">Начать продавать</Link></li>
              <li><Link to="/sellers#rules" className="hover:text-primary transition-colors">Правила площадки</Link></li>
              <li><Link to="/sellers#fees" className="hover:text-primary transition-colors">Тарифы</Link></li>
              <li><Link to="/sellers#support" className="hover:text-primary transition-colors">Помощь продавцам</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Рассылка</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Подпишитесь на акции и спецпредложения
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Email" 
                className="h-9"
              />
              <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                <Icon name="Send" size={16} />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 MarketNova. Все права защищены.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">Политика конфиденциальности</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Условия использования</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
