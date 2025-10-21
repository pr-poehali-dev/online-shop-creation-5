import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-deep-purple text-white py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/">
              <h3 className="text-xl font-bold mb-4 bg-gradient-marketplace bg-clip-text text-transparent">
                MARKETPLACE
              </h3>
            </Link>
            <p className="text-white/70 text-sm">
              Современный маркетплейс с лучшими ценами и быстрой доставкой
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Покупателям</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link to="/catalog" className="hover:text-white transition-colors">
                  Каталог
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="hover:text-white transition-colors">
                  Доставка
                </Link>
              </li>
              <li>
                <Link to="/orders" className="hover:text-white transition-colors">
                  Мои заказы
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-white transition-colors">
                  Поддержка
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link to="/sellers" className="hover:text-white transition-colors">
                  Продавцам
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-white transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-white transition-colors">
                  Вакансии
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                8 800 555-35-35
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                info@marketplace.ru
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                Москва, ул. Примерная, 1
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/50">
          © 2024 MARKETPLACE. Все права защищены
        </div>
      </div>
    </footer>
  );
}
