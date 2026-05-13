import { useEffect, useRef, useState } from "react"

const faqs = [
  {
    question: "Подойдёт ли вебинар, если у меня вообще нет опыта в туризме?",
    answer: "Да. Вебинар как раз рассчитан на тех, кто только присматривается к профессии и хочет понять, как в неё войти с нуля.",
  },
  {
    question: "А если я боюсь продаж и общения с клиентами?",
    answer: "Это частый страх у новичков. На вебинаре разберём, как устроена работа турагента на самом деле и почему продажи в этой сфере не сводятся к давлению и «впариванию».",
  },
  {
    question: "Подойдёт ли мне эта профессия, если я хочу работать из дома?",
    answer: "Да, если вам важны гибкость, удалённый формат и возможность выстраивать работу под свою жизнь. На вебинаре покажем, как выглядит такой формат в реальности.",
  },
  {
    question: "Можно ли рассматривать это как дополнительный доход, а не сразу как полную смену профессии?",
    answer: "Да. Для многих именно так всё и начинается: спокойно, без резких шагов и с понятным входом в профессию.",
  },
  {
    question: "Что будет на вебинаре: теория или что-то прикладное?",
    answer: "Вы получите конкретный разбор профессии, модели заработка, реальные возможности старта, примеры и ответы на вопросы. Без воды и общих разговоров.",
  },
  {
    question: "Участие точно бесплатное?",
    answer: "Да, участие в вебинаре бесплатное. Нужно только зарегистрироваться, чтобы получить информацию для подключения.",
  },
  {
    question: "Что будет после регистрации?",
    answer: "После регистрации вы получите все детали участия и ссылку на вебинар.",
  },
]

export function FAQ() {
  const [isVisible, setIsVisible] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
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
    <section ref={sectionRef} id="faq" className="py-32 lg:py-40 px-6 lg:px-16 bg-cream">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className={`text-xs tracking-[0.25em] uppercase text-teal mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            FAQ
          </p>
          <h2 className={`font-serif text-4xl md:text-5xl font-light text-foreground text-balance transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Частые вопросы
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl overflow-hidden card-float transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${300 + index * 80}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-6 px-8 py-6 text-left group"
              >
                <span className="font-serif text-lg md:text-xl text-foreground font-light group-hover:text-teal transition-colors duration-300">
                  {faq.question}
                </span>
                <span
                  className="shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center text-teal text-lg transition-all duration-300 group-hover:border-teal group-hover:bg-teal/5"
                  style={{ transform: openIndex === index ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  +
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-400 ease-out"
                style={{ maxHeight: openIndex === index ? "200px" : "0px" }}
              >
                <p className="px-8 pb-6 text-muted-foreground font-light text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-14 transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-10 py-4 rounded-full bg-teal text-white text-sm tracking-[0.1em] uppercase font-light hover:bg-teal/90 hover:shadow-lg hover:shadow-teal/20 hover:-translate-y-0.5 transition-all duration-300"
          >
            Занять место бесплатно
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
