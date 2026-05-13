import { useEffect, useRef, useState } from "react"

export function Philosophy() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.15 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="philosophy" className="py-32 lg:py-40 px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          <div className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-teal-light">
              <img
                src="/minimalist-japanese-interior-design-with-natural-w.jpg"
                alt="Обучение турагентов"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-white rounded-2xl px-6 py-5 card-float">
              <p className="font-serif text-4xl text-teal font-light">300+</p>
              <p className="text-xs text-muted-foreground tracking-[0.1em] uppercase mt-1">обученных агентов</p>
            </div>
          </div>

          <div className="lg:pt-8 pb-8">
            <p className={`text-xs tracking-[0.25em] uppercase text-teal mb-8 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              О вебинаре
            </p>

            <h2 className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-foreground mb-8 text-balance transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              У каждой своя причина
              <br />
              <em className="italic">прийти в туризм</em>
            </h2>

            <div className={`space-y-4 text-muted-foreground leading-relaxed font-light transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <p className="text-base">Но цель одна: выйти на доход в понятной системе.</p>
              <p className="text-base">
                Этот вебинар поможет увидеть свой путь в профессии, понять, с чего начать, и перестать крутиться в мыслях без движения.
              </p>
            </div>

            <div className={`mt-12 grid grid-cols-2 gap-4 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {[
                { value: "17 лет", label: "в туризме" },
                { value: "300+", label: "обученных агентов" },
                { value: "#1", label: "у туроператоров" },
                { value: "24 мая", label: "дата вебинара" },
              ].map((s) => (
                <div key={s.label} className="bg-cream rounded-2xl px-6 py-5">
                  <p className="font-serif text-3xl text-teal font-light">{s.value}</p>
                  <p className="text-xs text-muted-foreground tracking-[0.1em] uppercase mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
