import { useEffect, useRef, useState } from "react"

const audience = [
  {
    number: "01",
    title: "Хотите работать из дома",
    description:
      "Вам нужна профессия, которую можно встроить в свою жизнь, а не жизнь подстроить под чужой график. На вебинаре вы поймёте, как выглядит реальный старт в профессии и с каких шагов можно начать уже сейчас.",
  },
  {
    number: "02",
    title: "Хотите сменить работу, но боитесь ошибиться",
    description:
      "Прежняя работа больше не радует, но уходить в неизвестность страшно. На вебинаре вы поймёте, подходит ли вам профессия турагента и как входить в неё без розовых очков.",
  },
  {
    number: "03",
    title: "Хотите превратить интерес к путешествиям в доход",
    description:
      "Вы давно смотрите в сторону туризма, но пока это просто симпатия. На вебинаре вы поймёте, как устроена профессия турагента и как сделать первые шаги без догадок и хаотичных действий.",
  },
  {
    number: "04",
    title: "Ищете дополнительный доход без резких перемен",
    description:
      "Вы не готовы прямо сейчас всё бросить, но хотите попробовать новое направление. На вебинаре вы поймёте, как входить в профессию спокойно, без лишнего давления.",
  },
]

export function Process() {
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
    <section ref={sectionRef} id="process" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p
                className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Для кого
              </p>
              <h2
                className={`font-serif text-4xl md:text-5xl font-light text-foreground mb-6 text-balance transition-all duration-1000 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Узнайте себя
                <span className="italic"> в одном из</span>
              </h2>
              <p
                className={`text-muted-foreground leading-relaxed mb-10 transition-all duration-1000 delay-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                После вебинара у вас будет понимание, подходит ли вам профессия, ясная картина входа с нуля и уверенность, чтобы перейти от интереса к действию.
              </p>
              <a
                href="#contact"
                className={`inline-flex items-center gap-3 px-8 py-4 bg-sage text-primary-foreground text-sm tracking-widest uppercase hover:bg-sage/90 transition-all duration-500 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                Иду на вебинар
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-0">
              {audience.map((item, index) => (
                <div
                  key={item.number}
                  className={`group py-10 lg:py-14 border-t border-border last:border-b transition-all duration-1000 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                >
                  <div className="flex gap-8 lg:gap-12">
                    <span className="font-serif text-4xl lg:text-5xl text-stone/50 group-hover:text-sage transition-colors duration-500">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed max-w-xl">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
