import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Icon name="Dumbbell" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-foreground">FitPro</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {["home", "workouts", "nutrition", "trainers", "progress", "plans", "blog", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-semibold transition-colors hover:text-primary ${
                    activeSection === item ? "text-primary" : "text-foreground/70"
                  }`}
                >
                  {item === "home" ? "Главная" : 
                   item === "workouts" ? "Тренировки" :
                   item === "nutrition" ? "Питание" :
                   item === "trainers" ? "Тренеры" :
                   item === "progress" ? "Прогресс" :
                   item === "plans" ? "Тарифы" :
                   item === "blog" ? "Блог" :
                   "Контакты"}
                </button>
              ))}
            </div>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Начать
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-accent text-accent-foreground">Персонализированные тренировки</Badge>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                Ваш путь к <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">здоровью</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Шаг за шагом, индивидуально и удобно! Персональные планы тренировок, питание и консультации с профессионалами.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  <Icon name="Play" className="mr-2" size={20} />
                  Начать тренировки
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Узнать больше
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">2520+</div>
                  <div className="text-sm text-muted-foreground">Активных пользователей</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">1000+</div>
                  <div className="text-sm text-muted-foreground">Тренировок</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-3xl opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=1000&fit=crop" 
                alt="Fitness" 
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="workouts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary">Программы тренировок</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Тренировки для всех уровней</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Персонализированные планы с видеоуроками и отслеживанием прогресса
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Набор массы", duration: "45 мин", difficulty: "Средний", icon: "Dumbbell", color: "primary" },
              { title: "Снижение веса", duration: "30 мин", difficulty: "Легкий", icon: "Flame", color: "secondary" },
              { title: "Поддержание формы", duration: "20 мин", difficulty: "Легкий", icon: "Heart", color: "accent" },
              { title: "HIIT тренировка", duration: "25 мин", difficulty: "Сложный", icon: "Zap", color: "primary" },
              { title: "Йога и растяжка", duration: "40 мин", difficulty: "Легкий", icon: "Sparkles", color: "secondary" },
              { title: "Силовая программа", duration: "50 мин", difficulty: "Сложный", icon: "Trophy", color: "accent" },
            ].map((workout, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className={`w-16 h-16 rounded-2xl bg-${workout.color}/10 flex items-center justify-center mb-4`}>
                  <Icon name={workout.icon as any} size={32} className={`text-${workout.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{workout.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Clock" size={16} />
                    <span>{workout.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="TrendingUp" size={16} />
                    <Badge variant="outline">{workout.difficulty}</Badge>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white">
                  <Icon name="Play" size={16} className="mr-2" />
                  Начать
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="nutrition" className="py-20 bg-gradient-to-br from-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-secondary/10 text-secondary">Питание</Badge>
              <h2 className="text-4xl md:text-5xl font-bold">Персональные планы питания</h2>
              <p className="text-lg text-muted-foreground">
                Получите индивидуальные рекомендации по питанию от сертифицированных диетологов. 
                Достигайте целей быстрее с правильным рационом.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Расчет калорий", desc: "Автоматический подсчет КБЖУ" },
                  { title: "Рецепты", desc: "1000+ здоровых рецептов" },
                  { title: "Список покупок", desc: "Удобное планирование" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                Получить план питания
              </Button>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop" 
                alt="Nutrition" 
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="trainers" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-accent/10 text-accent">Наша команда</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Профессиональные тренеры</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Сертифицированные специалисты с многолетним опытом
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Анна Петрова", role: "Фитнес-тренер", exp: "8 лет опыта", rating: "4.9" },
              { name: "Дмитрий Иванов", role: "Силовой тренер", exp: "10 лет опыта", rating: "5.0" },
              { name: "Елена Смирнова", role: "Диетолог", exp: "6 лет опыта", rating: "4.8" },
              { name: "Михаил Волков", role: "HIIT специалист", exp: "7 лет опыта", rating: "4.9" },
            ].map((trainer, idx) => (
              <Card key={idx} className="p-6 text-center hover:shadow-lg transition-all duration-300 animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={48} className="text-white" />
                </div>
                <h3 className="font-bold text-lg mb-1">{trainer.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{trainer.role}</p>
                <div className="flex items-center justify-center gap-1 mb-2">
                  <Icon name="Star" size={16} className="text-accent fill-accent" />
                  <span className="font-semibold">{trainer.rating}</span>
                </div>
                <p className="text-xs text-muted-foreground mb-4">{trainer.exp}</p>
                <Button variant="outline" className="w-full">
                  Консультация
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="progress" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Badge className="mb-4 bg-primary/10 text-primary">Отслеживание результатов</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Ваш прогресс в цифрах</h2>
              <p className="text-xl text-muted-foreground">
                Смотрите как растут ваши достижения каждый день
              </p>
            </div>
            <Card className="p-8 animate-scale-in">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Выполнено тренировок в этом месяце</span>
                    <span className="text-primary font-bold">18 / 20</span>
                  </div>
                  <Progress value={90} className="h-3" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Сожжено калорий (цель: 15000)</span>
                    <span className="text-secondary font-bold">12,450</span>
                  </div>
                  <Progress value={83} className="h-3" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Дней подряд</span>
                    <span className="text-accent font-bold">7 🔥</span>
                  </div>
                  <Progress value={100} className="h-3" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">145</div>
                  <div className="text-sm text-muted-foreground">Всего тренировок</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-1">-8 кг</div>
                  <div className="text-sm text-muted-foreground">Сброшено веса</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">42 ч</div>
                  <div className="text-sm text-muted-foreground">Время занятий</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="plans" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary">Тарифы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Выберите свой план</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Гибкие тарифы для достижения ваших целей
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Базовый", price: "1500", features: ["Доступ к тренировкам", "Видеоуроки", "Мобильное приложение"], popular: false },
              { name: "Премиум", price: "2900", features: ["Все из Базового", "Консультации с тренером", "План питания", "Отслеживание прогресса"], popular: true },
              { name: "VIP", price: "4500", features: ["Все из Премиум", "Персональный тренер", "Диетолог", "Приоритетная поддержка"], popular: false },
            ].map((plan, idx) => (
              <Card key={idx} className={`p-6 relative hover:shadow-xl transition-all duration-300 animate-slide-up ${plan.popular ? 'border-2 border-primary shadow-lg' : ''}`} style={{ animationDelay: `${idx * 0.1}s` }}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                    Популярный
                  </Badge>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-primary mb-1">{plan.price} ₽</div>
                  <div className="text-sm text-muted-foreground">в месяц</div>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`} variant={plan.popular ? 'default' : 'outline'}>
                  Выбрать план
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-accent/10 text-accent">Блог</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Полезные статьи</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мотивация, советы и лайфхаки для эффективных тренировок
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "10 упражнений для дома", category: "Тренировки", date: "15 окт 2025" },
              { title: "Правильное питание для набора массы", category: "Питание", date: "12 окт 2025" },
              { title: "Как избежать травм при тренировках", category: "Здоровье", date: "10 окт 2025" },
            ].map((post, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="h-48 bg-gradient-to-br from-primary to-secondary"></div>
                <div className="p-6">
                  <Badge variant="outline" className="mb-3">{post.category}</Badge>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{post.date}</p>
                  <Button variant="ghost" className="p-0 h-auto">
                    Читать далее →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-secondary/10 text-secondary">Контакты</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Остались вопросы? Мы всегда рады помочь!
            </p>
            <Card className="p-8 text-left">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Имя</label>
                  <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Сообщение</label>
                  <textarea className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" rows={4} placeholder="Ваше сообщение"></textarea>
                </div>
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Отправить сообщение
                </Button>
              </div>
            </Card>
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <Icon name="Mail" size={32} className="mx-auto mb-2 text-primary" />
                <div className="font-semibold">Email</div>
                <div className="text-sm text-muted-foreground">info@fitpro.ru</div>
              </div>
              <div>
                <Icon name="Phone" size={32} className="mx-auto mb-2 text-secondary" />
                <div className="font-semibold">Телефон</div>
                <div className="text-sm text-muted-foreground">+7 (800) 555-35-35</div>
              </div>
              <div>
                <Icon name="MapPin" size={32} className="mx-auto mb-2 text-accent" />
                <div className="font-semibold">Адрес</div>
                <div className="text-sm text-muted-foreground">Москва, Россия</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Dumbbell" size={28} className="text-primary" />
                <span className="text-xl font-bold">FitPro</span>
              </div>
              <p className="text-sm text-white/70">Ваш путь к здоровью — шаг за шагом, индивидуально и удобно!</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Продукты</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Тренировки</li>
                <li>Питание</li>
                <li>Тренеры</li>
                <li>Мобильное приложение</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>О нас</li>
                <li>Блог</li>
                <li>Карьера</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <Icon name="Instagram" size={20} />
                </div>
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <Icon name="Facebook" size={20} />
                </div>
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <Icon name="Youtube" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/70">
            © 2025 FitPro. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
