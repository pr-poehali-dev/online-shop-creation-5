import { useState } from 'react';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Support = () => {
  const [message, setMessage] = useState('');

  const faqs = [
    {
      question: 'Как отследить мой заказ?',
      answer: 'Вы можете отследить заказ в разделе "Мои заказы". Там отображается актуальный статус и трек-номер для отслеживания.'
    },
    {
      question: 'Как оформить возврат товара?',
      answer: 'Вы можете вернуть товар в течение 30 дней с момента получения. Для этого перейдите в детали заказа и нажмите "Оформить возврат".'
    },
    {
      question: 'Какие способы оплаты доступны?',
      answer: 'Мы принимаем оплату картами Visa, MasterCard, МИР, а также через СБП, Apple Pay и Google Pay.'
    },
    {
      question: 'Сколько стоит доставка?',
      answer: 'Доставка бесплатна при заказе от 50 000 ₽. Для заказов меньшей стоимости доставка составляет 500 ₽.'
    },
    {
      question: 'Можно ли изменить адрес доставки?',
      answer: 'Да, вы можете изменить адрес доставки до момента отправки заказа. Обратитесь в поддержку или измените адрес в деталях заказа.'
    },
    {
      question: 'Как стать продавцом?',
      answer: 'Перейдите в раздел "Продавцам", заполните форму регистрации и наш менеджер свяжется с вами в течение 24 часов.'
    },
  ];

  const contactMethods = [
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (800) 555-35-35',
      description: 'Ежедневно с 8:00 до 22:00',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'support@megamarket.ru',
      description: 'Ответим в течение 2 часов',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'MessageCircle',
      title: 'Онлайн-чат',
      value: 'Напишите нам',
      description: 'Среднее время ответа: 5 минут',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'Send',
      title: 'Telegram',
      value: '@megamarket_support',
      description: 'Быстрые ответы 24/7',
      color: 'from-cyan-500 to-blue-600'
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Служба поддержки</h1>
            <p className="text-xl text-muted-foreground">
              Мы всегда готовы помочь вам!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {contactMethods.map((method, idx) => (
              <button
                key={idx}
                className="bg-white rounded-2xl p-6 text-left hover:shadow-lg transition-shadow"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4`}>
                  <Icon name={method.icon as any} size={24} className="text-white" />
                </div>
                <h3 className="font-bold mb-1">{method.title}</h3>
                <p className="text-sm font-medium text-primary mb-1">{method.value}</p>
                <p className="text-xs text-muted-foreground">{method.description}</p>
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm mb-12">
            <h2 className="text-2xl font-bold mb-6">Написать нам</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Иван Петров" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="ivan@example.com" className="mt-2" />
                </div>
              </div>

              <div>
                <Label htmlFor="subject">Тема обращения</Label>
                <Input id="subject" placeholder="Вопрос о заказе #12345" className="mt-2" />
              </div>

              <div>
                <Label htmlFor="message">Сообщение</Label>
                <Textarea
                  id="message"
                  placeholder="Опишите ваш вопрос подробно..."
                  className="mt-2 min-h-[150px]"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <Button className="w-full bg-gradient-primary text-white h-12 text-lg">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить сообщение
              </Button>
            </form>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Часто задаваемые вопросы</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-12 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Нужна срочная помощь?</h3>
            <p className="text-lg mb-6 text-white/90">
              Свяжитесь с нами прямо сейчас через онлайн-чат
            </p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Открыть чат
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
