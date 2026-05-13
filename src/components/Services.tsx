import { useEffect, useRef, useState } from "react"

const program = [
  {
    number: "1",
    title: "Первый шаг в онлайн-турагентстве",
    description:
      "Покажем, как превратить интерес к путешествиям в понятное направление для работы и с чего начать, если у вас пока нет опыта в туризме.",
  },
  {
    number: "2",
    title: "Как зарабатывает турагент",
    description:
      "Разберём, из чего складывается доход турагента, какие есть точки роста и за счёт чего можно выйти на хороший доход без хаотичных действий.",
  },
  {
    number: "3",
    title: "Закрытые предложения и рекламные туры",
    description:
      "Расскажем, как турагенты получают доступ к закрытым предложениям от туроператоров, что такое рекламные туры и как это работает на практике.",
  },
  {
    number: "4",
    title: "Стажировка и реальные возможности для старта",
    description:
      "Объясним, как попасть на оплачиваемую стажировку, что она даёт новичку и кого мы рассматриваем для дальнейшей работы в команде.",
  },
  {
    number: "5",
    title: "Разборы, примеры и ответы на вопросы",
    description:
      "Покажем успешные кейсы, разберём обучение на сильных примерах и ответим на вопросы участников — чтобы после вебинара осталась ясность по следующим шагам.",
  },
]

export function Services() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section ref={sectionRef} id="services" className="py-32 lg:py-40 px-6 lg:px-12 bg-sand/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p
            className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Программа вебинара
          </p>
          <h2
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Не мотивация ради мотивации
          </h2>
          <p
            className={`text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            На вебинаре вы шаг за шагом разберёте, как устроен старт в онлайн-турагентстве, откуда берутся деньги и какие возможности доступны тем, кто хочет реально зайти в профессию.
          </p>
        </div>

        <div className="space-y-px bg-border">
          {program.map((item, index) => (
            <div
              key={item.number}
              className={`group bg-background p-10 lg:p-14 flex gap-8 lg:gap-12 transition-all duration-1000 hover:bg-card ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 120}ms` }}
            >
              <span className="font-serif text-4xl lg:text-5xl text-stone/40 group-hover:text-sage transition-colors duration-500 shrink-0">
                {item.number.padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-sage text-primary-foreground text-sm tracking-widest uppercase hover:bg-sage/90 transition-all duration-500"
          >
            Иду на вебинар
            <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
