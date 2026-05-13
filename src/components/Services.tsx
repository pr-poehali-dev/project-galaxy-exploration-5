import { useEffect, useRef, useState } from "react"

const program = [
  {
    number: "01",
    title: "Первый шаг в онлайн-турагентстве",
    description: "Покажем, как превратить интерес к путешествиям в понятное направление для работы и с чего начать, если у вас пока нет опыта в туризме.",
  },
  {
    number: "02",
    title: "Как зарабатывает турагент",
    description: "Разберём, из чего складывается доход турагента, какие есть точки роста и за счёт чего можно выйти на хороший доход без хаотичных действий.",
  },
  {
    number: "03",
    title: "Закрытые предложения и рекламные туры",
    description: "Расскажем, как турагенты получают доступ к закрытым предложениям от туроператоров, что такое рекламные туры и как это работает на практике.",
  },
  {
    number: "04",
    title: "Стажировка и реальные возможности для старта",
    description: "Объясним, как попасть на оплачиваемую стажировку, что она даёт новичку и кого мы рассматриваем для дальнейшей работы в команде.",
  },
  {
    number: "05",
    title: "Разборы, примеры и ответы на вопросы",
    description: "Покажем успешные кейсы, разберём обучение на сильных примерах и ответим на вопросы участников — чтобы после осталась ясность по следующим шагам.",
  },
]

export function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.08 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="services" className="py-32 lg:py-40 px-6 lg:px-16 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className={`text-xs tracking-[0.25em] uppercase text-teal mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Программа вебинара
          </p>
          <h2 className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance mb-5 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Не мотивация ради мотивации
          </h2>
          <p className={`text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light text-base transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Понятный разбор: как войти в профессию и на чём в ней зарабатывать.
          </p>
        </div>

        <div className="space-y-4">
          {program.map((item, index) => (
            <div
              key={item.number}
              className={`group bg-white rounded-2xl px-8 lg:px-12 py-8 flex gap-8 lg:gap-12 card-float transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <span className="font-serif text-4xl lg:text-5xl text-teal/20 group-hover:text-teal/50 transition-colors duration-500 shrink-0 font-light">
                {item.number}
              </span>
              <div className="py-1">
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2 font-light">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-14 transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-10 py-4 rounded-full bg-teal text-white text-sm tracking-[0.1em] uppercase font-light hover:bg-teal/90 hover:shadow-lg hover:shadow-teal/20 hover:-translate-y-0.5 transition-all duration-300"
          >
            Иду на вебинар
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
