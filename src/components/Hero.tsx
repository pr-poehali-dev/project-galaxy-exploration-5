import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 lg:px-16 pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#f7f4ef] via-[#f0ede8] to-[#e8f4f3]" />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-teal/5 to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-teal/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full bg-gold/8 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-teal/10 text-teal text-xs tracking-[0.2em] uppercase mb-12">
            <span className="w-1.5 h-1.5 rounded-full bg-teal inline-block" />
            Бесплатный онлайн-вебинар · 24 мая 2026
          </span>
        </div>

        <h1
          className={`font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight text-foreground mb-6 text-balance transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Профессия турагента
          <br />
          <em className="text-teal not-italic italic">с нуля</em>
        </h1>

        <p
          className={`text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4 font-light transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Как начать и дойти до первых продаж
        </p>

        <p
          className={`text-base text-muted-foreground max-w-xl mx-auto leading-relaxed mb-14 font-light transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Для тех, кто хочет освоить новую профессию и выйти на доход в понятной системе.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-10 py-4 rounded-full bg-teal text-white text-sm tracking-[0.1em] uppercase font-light hover:bg-teal/90 hover:shadow-lg hover:shadow-teal/20 hover:-translate-y-0.5 transition-all duration-300"
          >
            Иду на вебинар
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#philosophy"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border text-sm tracking-[0.1em] uppercase text-muted-foreground hover:border-teal hover:text-teal transition-all duration-300"
          >
            Узнать подробнее
          </a>
        </div>

        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            "Как устроена работа турагента",
            "Как стартовать без опыта в туризме",
            "Как не бояться клиентов и продаж",
            "Как прийти к первым заявкам и деньгам",
          ].map((item) => (
            <div key={item} className="bg-white/70 backdrop-blur-sm rounded-2xl px-5 py-4 card-float text-left border border-white/80">
              <span className="block w-5 h-0.5 bg-teal mb-3 rounded-full" />
              <p className="text-sm text-foreground/80 font-light leading-snug">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Листайте</span>
        <div className="w-px h-10 bg-gradient-to-b from-teal to-transparent" />
      </div>
    </section>
  )
}
