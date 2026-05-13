export function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-16 bg-[#1a2e2e] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-4">
            <p className="font-serif text-2xl font-light tracking-wide text-white mb-1">Global Travel</p>
            <p className="text-sm text-white/50 font-light mb-6">Школа онлайн-турагентов</p>
            <div className="space-y-2">
              <p className="text-sm text-white/50 font-light">Email: <a href="mailto:[email]" className="hover:text-teal transition-colors">[email]</a></p>
              <p className="text-sm text-white/50 font-light">Телефон: <a href="tel:[телефон]" className="hover:text-teal transition-colors">[телефон]</a></p>
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-6">
            <p className="text-xs tracking-[0.15em] uppercase text-white/30 mb-5">Навигация</p>
            <nav className="flex flex-col gap-3">
              {[
                { href: "#services", label: "Программа" },
                { href: "#author", label: "Об авторе" },
                { href: "#faq", label: "FAQ" },
                { href: "#contact", label: "Записаться" },
              ].map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-white/60 font-light hover:text-teal transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs tracking-[0.15em] uppercase text-white/30 mb-5">Соцсети</p>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-sm text-white/60 font-light hover:text-teal transition-colors">Telegram</a>
              <a href="#" className="text-sm text-white/60 font-light hover:text-teal transition-colors">VK</a>
            </nav>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs tracking-[0.15em] uppercase text-white/30 mb-5">Документы</p>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-sm text-white/60 font-light hover:text-teal transition-colors">Политика конфиденциальности</a>
              <a href="#" className="text-sm text-white/60 font-light hover:text-teal transition-colors">Согласие на обработку данных</a>
              <a href="#" className="text-sm text-white/60 font-light hover:text-teal transition-colors">Политика cookies</a>
              <a href="#" className="text-sm text-white/60 font-light hover:text-teal transition-colors">Публичная оферта</a>
            </nav>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-start gap-3">
          <p className="text-xs text-white/30 font-light">© 2026 Global Travel. Все права защищены.</p>
          <div className="text-xs text-white/30 font-light space-y-1 md:text-right">
            <p>Оператор персональных данных: [ИП/ООО/ФИО]</p>
            <p>По вопросам обработки данных: [email]</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
