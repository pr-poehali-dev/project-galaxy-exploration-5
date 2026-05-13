import { useEffect, useRef, useState } from "react"

const audience = [
  {
    title: "Хотите работать из дома",
    description: "Вам нужна профессия, которую можно встроить в свою жизнь, а не жизнь подстроить под чужой график. На вебинаре вы поймёте, как выглядит реальный старт и с каких шагов можно начать уже сейчас.",
    icon: "🏡",
  },
  {
    title: "Хотите сменить работу, но боитесь ошибиться",
    description: "Прежняя работа больше не радует, но уходить в неизвестность страшно. На вебинаре поймёте, подходит ли вам профессия турагента и как входить в неё без розовых очков.",
    icon: "🔄",
  },
  {
    title: "Хотите превратить интерес к путешествиям в доход",
    description: "Вы давно смотрите в сторону туризма, но пока это просто симпатия. На вебинаре поймёте, как устроена профессия и как сделать первые шаги без догадок и хаоса.",
    icon: "✈️",
  },
  {
    title: "Ищете дополнительный доход без резких перемен",
    description: "Вы не готовы прямо сейчас всё бросить, но хотите попробовать. На вебинаре поймёте, как входить в профессию спокойно, без лишнего давления.",
    icon: "💼",
  },
]

export function Process() {
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
    <section ref={sectionRef} id="process" className="py-32 lg:py-40 px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className={`text-xs tracking-[0.25em] uppercase text-teal mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Для кого
          </p>
          <h2 className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance mb-5 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Узнайте себя
          </h2>
          <p className={`text-muted-foreground max-w-xl mx-auto leading-relaxed font-light text-base transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            После вебинара у вас будет ясная картина входа в профессию и уверенность, чтобы перейти от интереса к действию.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {audience.map((item, index) => (
            <div
              key={item.title}
              className={`bg-cream rounded-2xl p-8 lg:p-10 card-float transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${300 + index * 120}ms` }}
            >
              <span className="text-3xl mb-5 block">{item.icon}</span>
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3 font-light leading-snug">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-light text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        <div className={`text-center mt-14 transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
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
