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
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="faq" className="py-32 lg:py-40 px-6 lg:px-12 bg-sand/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p
                className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                FAQ
              </p>
              <h2
                className={`font-serif text-4xl md:text-5xl font-light text-foreground mb-6 text-balance transition-all duration-1000 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Частые
                <span className="italic"> вопросы</span>
              </h2>
              <div
                className={`mt-10 transition-all duration-1000 delay-400 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-sage text-primary-foreground text-sm tracking-widest uppercase hover:bg-sage/90 transition-all duration-500"
                >
                  Занять место бесплатно
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border-t border-border last:border-b transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-start justify-between gap-6 py-8 text-left group"
                >
                  <span className="font-serif text-xl md:text-2xl text-foreground group-hover:text-sage transition-colors duration-300">
                    {faq.question}
                  </span>
                  <span className="text-sage text-2xl shrink-0 mt-0.5 transition-transform duration-300" style={{ transform: openIndex === index ? "rotate(45deg)" : "rotate(0deg)" }}>
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-500 ease-out"
                  style={{ maxHeight: openIndex === index ? "300px" : "0px" }}
                >
                  <p className="text-muted-foreground leading-relaxed pb-8 max-w-2xl">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
