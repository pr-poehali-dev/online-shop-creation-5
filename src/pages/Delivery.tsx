import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Delivery() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Доставка и оплата</h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Мы доставляем товары по всей России быстро и надежно
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <div className="w-16 h-16 rounded-full bg-gradient-marketplace flex items-center justify-center mb-4">
                <Icon name="Truck" size={32} className="text-white" />
              </div>
              <CardTitle>Курьерская доставка</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Доставка курьером до двери. Доступна в крупных городах России.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-turquoise" />
                  <span>1-2 дня</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-turquoise" />
                  <span>От 500 ₽</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-turquoise" />
                  <span>Бесплатно от 5000 ₽</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-16 h-16 rounded-full bg-gradient-marketplace flex items-center justify-center mb-4">
                <Icon name="Package" size={32} className="text-white" />
              </div>
              <CardTitle>Пункты выдачи</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Более 10 000 пунктов выдачи по всей России для вашего удобства.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-turquoise" />
                  <span>2-5 дней</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-turquoise" />
                  <span>От 200 ₽</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-turquoise" />
                  <span>Бесплатно от 3000 ₽</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-16 h-16 rounded-full bg-gradient-marketplace flex items-center justify-center mb-4">
                <Icon name="Mail" size={32} className="text-white" />
              </div>
              <CardTitle>Почта России</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Доставка в любую точку России через отделения Почты России.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-turquoise" />
                  <span>5-14 дней</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-turquoise" />
                  <span>От 300 ₽</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-turquoise" />
                  <span>Во все регионы</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Способы оплаты</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-marketplace flex items-center justify-center flex-shrink-0">
                  <Icon name="CreditCard" size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Банковские карты</h4>
                  <p className="text-sm text-muted-foreground">
                    Visa, MasterCard, МИР — безопасная оплата онлайн
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-marketplace flex items-center justify-center flex-shrink-0">
                  <Icon name="Wallet" size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Электронные кошельки</h4>
                  <p className="text-sm text-muted-foreground">
                    ЮMoney, QIWI, WebMoney и другие сервисы
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-marketplace flex items-center justify-center flex-shrink-0">
                  <Icon name="Banknote" size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Наличные</h4>
                  <p className="text-sm text-muted-foreground">
                    Оплата при получении курьеру или в пункте выдачи
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-marketplace flex items-center justify-center flex-shrink-0">
                  <Icon name="Building2" size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Безналичный расчет</h4>
                  <p className="text-sm text-muted-foreground">
                    Для юридических лиц — оплата по счету
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Часто задаваемые вопросы</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">Как отследить мой заказ?</h4>
              <p className="text-sm text-muted-foreground">
                После отправки заказа вы получите трек-номер на email и в личном кабинете. 
                По нему можно отследить местоположение посылки на сайте транспортной компании.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Можно ли изменить адрес доставки?</h4>
              <p className="text-sm text-muted-foreground">
                Да, до момента отправки заказа вы можете изменить адрес доставки в личном кабинете 
                или связавшись с поддержкой.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Что делать, если товар не подошел?</h4>
              <p className="text-sm text-muted-foreground">
                У вас есть 14 дней на возврат товара надлежащего качества. Свяжитесь с поддержкой, 
                и мы организуем бесплатный возврат.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      </div>
      </main>

      <Footer />
    </div>
  );
}