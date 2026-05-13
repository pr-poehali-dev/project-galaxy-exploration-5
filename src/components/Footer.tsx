export function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="font-serif text-2xl tracking-wide text-foreground mb-1">Global Travel</p>
            <p className="text-sm text-muted-foreground mb-4">Школа онлайн-турагентов</p>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Email: <a href="mailto:[email]" className="hover:text-sage transition-colors">[email]</a></p>
              <p className="text-sm text-muted-foreground">Телефон: <a href="tel:[телефон]" className="hover:text-sage transition-colors">[телефон]</a></p>
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-6">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Навигация</p>
            <nav className="flex flex-col gap-3">
              <a href="#services" className="text-sm text-foreground hover:text-sage transition-colors">Программа вебинара</a>
              <a href="#author" className="text-sm text-foreground hover:text-sage transition-colors">Об авторе</a>
              <a href="#faq" className="text-sm text-foreground hover:text-sage transition-colors">FAQ</a>
              <a href="#contact" className="text-sm text-foreground hover:text-sage transition-colors">Записаться на вебинар</a>
            </nav>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Соцсети</p>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-sm text-foreground hover:text-sage transition-colors">Telegram</a>
              <a href="#" className="text-sm text-foreground hover:text-sage transition-colors">VK</a>
            </nav>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Документы</p>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-sm text-foreground hover:text-sage transition-colors">Политика конфиденциальности</a>
              <a href="#" className="text-sm text-foreground hover:text-sage transition-colors">Согласие на обработку данных</a>
              <a href="#" className="text-sm text-foreground hover:text-sage transition-colors">Политика cookies</a>
              <a href="#" className="text-sm text-foreground hover:text-sage transition-colors">Публичная оферта</a>
            </nav>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start gap-4">
          <p className="text-xs text-muted-foreground">© 2026 Global Travel. Все права защищены.</p>
          <div className="text-xs text-muted-foreground space-y-1 text-right">
            <p>Оператор персональных данных: [ИП/ООО/ФИО]</p>
            <p>По вопросам обработки данных: [email]</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
