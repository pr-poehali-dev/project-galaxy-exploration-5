import type React from "react"
import { useEffect, useRef, useState } from "react"

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
  })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formState)
  }

  return (
    <section ref={sectionRef} id="contact" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p
              className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Регистрация
            </p>
            <h2
              className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 text-balance transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Забронируйте место бесплатно
            </h2>
            <p
              className={`text-muted-foreground leading-relaxed mb-8 max-w-md transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Запишитесь на бесплатный вебинар и получите понятную картину профессии, реальные возможности для старта и ответы на свои вопросы.
            </p>

            <div
              className={`space-y-4 mb-8 transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">На вебинаре вас ждёт:</p>
              {[
                "Честный разбор профессии турагента без иллюзий и воды",
                "Понятный путь входа в туризм с нуля",
                "Разбор дохода, возможностей роста и старта в профессии",
                "Практические примеры, кейсы и ответы на вопросы",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-sage mt-0.5">—</span>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <div
              className={`space-y-3 p-6 bg-sand/50 border border-border transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-xs tracking-widest uppercase text-muted-foreground w-20">Формат</span>
                <span className="text-sm text-foreground">Онлайн</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs tracking-widest uppercase text-muted-foreground w-20">Когда</span>
                <span className="text-sm text-foreground">24 мая 2026 года в 14:00 МСК</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs tracking-widest uppercase text-muted-foreground w-20">Участие</span>
                <span className="text-sm text-sage font-medium">Бесплатно</span>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-sm text-muted-foreground leading-relaxed mb-10">
              Оставьте свои данные, чтобы забронировать место на вебинаре и получить ссылку на участие.
            </p>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-sage focus:outline-none transition-colors"
                  placeholder="Ваше имя"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-sage focus:outline-none transition-colors"
                  placeholder="+7 (___) ___-__-__"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-sage focus:outline-none transition-colors"
                  placeholder="ваш@email.com"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-sage text-primary-foreground text-sm tracking-widest uppercase hover:bg-sage/90 transition-all duration-500 w-full justify-center"
                >
                  Забронировать место бесплатно
                  <svg
                    className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <p className="text-xs text-muted-foreground/70 mt-4 text-center leading-relaxed">
                  Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности и обработкой персональных данных.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
