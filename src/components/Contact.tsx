import type React from "react"
import { useEffect, useRef, useState } from "react"

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formState, setFormState] = useState({ name: "", phone: "", email: "" })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.08 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formState)
  }

  return (
    <section ref={sectionRef} id="contact" className="py-32 lg:py-40 px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left */}
          <div>
            <p className={`text-xs tracking-[0.25em] uppercase text-teal mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Регистрация
            </p>
            <h2 className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 text-balance transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              Забронируйте место бесплатно
            </h2>
            <p className={`text-muted-foreground font-light leading-relaxed mb-10 max-w-md text-base transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              Запишитесь на вебинар и получите понятную картину профессии, реальные возможности для старта и ответы на свои вопросы.
            </p>

            <div className={`space-y-3 mb-10 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {[
                "Честный разбор профессии без иллюзий и воды",
                "Понятный путь входа в туризм с нуля",
                "Разбор дохода, роста и старта в профессии",
                "Практические примеры, кейсы и ответы на вопросы",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="w-4 h-4 rounded-full bg-teal/15 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal block" />
                  </span>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <div className={`rounded-2xl border border-border p-6 space-y-4 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {[
                { label: "Формат", value: "Онлайн" },
                { label: "Дата", value: "24 мая 2026 года, 14:00 МСК" },
                { label: "Участие", value: "Бесплатно", accent: true },
              ].map((row) => (
                <div key={row.label} className="flex items-center gap-4">
                  <span className="text-xs tracking-[0.1em] uppercase text-muted-foreground w-16 shrink-0">{row.label}</span>
                  <span className={`text-sm font-light ${row.accent ? "text-teal font-medium" : "text-foreground"}`}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className={`transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="bg-cream rounded-3xl p-8 lg:p-10">
              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-8">
                Оставьте свои данные, чтобы забронировать место и получить ссылку на вебинар.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { id: "name", label: "Имя", type: "text", placeholder: "Ваше имя", field: "name" as const },
                  { id: "phone", label: "Телефон", type: "tel", placeholder: "+7 (___) ___-__-__", field: "phone" as const },
                  { id: "email", label: "E-mail", type: "email", placeholder: "ваш@email.com", field: "email" as const },
                ].map((input) => (
                  <div key={input.id}>
                    <label htmlFor={input.id} className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                      {input.label}
                    </label>
                    <input
                      type={input.type}
                      id={input.id}
                      value={formState[input.field]}
                      onChange={(e) => setFormState({ ...formState, [input.field]: e.target.value })}
                      className="w-full bg-white rounded-xl border border-border px-4 py-3 text-foreground text-sm font-light placeholder:text-muted-foreground/50 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/10 transition-all duration-200"
                      placeholder={input.placeholder}
                      required
                    />
                  </div>
                ))}

                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-teal text-white text-sm tracking-[0.1em] uppercase font-light hover:bg-teal/90 hover:shadow-lg hover:shadow-teal/20 hover:-translate-y-0.5 transition-all duration-300 mt-2"
                >
                  Забронировать место бесплатно
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>

                <p className="text-xs text-muted-foreground/60 text-center leading-relaxed">
                  Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности и обработкой персональных данных.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
