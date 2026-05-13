import { useEffect, useRef, useState } from "react"

export function Testimonial() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { value: "17 лет", label: "в туризме" },
    { value: "300+", label: "обученных онлайн-турагентов" },
    { value: "#1", label: "у ведущих туроператоров России" },
    { value: "с 2020", label: "год основания школы" },
  ]

  return (
    <section ref={sectionRef} id="author" className="py-32 lg:py-40 px-6 lg:px-12 bg-sage">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <p
              className={`text-xs tracking-[0.3em] uppercase text-primary-foreground/60 mb-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Об авторе
            </p>
            <h2
              className={`font-serif text-4xl md:text-5xl font-light text-primary-foreground leading-[1.1] mb-8 text-balance transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              В профессию легче входить рядом с теми, кто уже занял в ней сильную позицию
            </h2>
            <div
              className={`space-y-5 text-primary-foreground/80 leading-relaxed transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p>
                Меня зовут <strong className="text-primary-foreground">Алена Фондеркина</strong>. Я основательница Школы Туризма Global Travel, эксперт с 17-летним опытом в туризме, руководитель и куратор онлайн-школы турагентов.
              </p>
              <p>
                С 2020 года я обучила более 300 онлайн-турагентов по всей России. Для многих это стало точкой входа в новую профессию и первым шагом к стабильному доходу.
              </p>
              <p>
                Сегодня Global Travel под моим руководством занимает первое место у ведущих туроператоров России. Я верю, что любовь к путешествиям может стать не просто интересом, а профессией, которая даёт свободу, рост и деньги.
              </p>
            </div>
            <div
              className={`mt-10 transition-all duration-1000 delay-600 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-primary-foreground text-sage text-sm tracking-widest uppercase hover:bg-primary-foreground/90 transition-all duration-500"
              >
                Иду на вебинар
                <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          <div
            className={`grid grid-cols-2 gap-8 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="border border-primary-foreground/20 p-8">
                <p className="font-serif text-4xl lg:text-5xl text-primary-foreground mb-2">{stat.value}</p>
                <p className="text-xs tracking-widest uppercase text-primary-foreground/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
