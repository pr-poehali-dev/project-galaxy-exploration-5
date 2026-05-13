import { useState, useEffect } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="flex h-20 items-center justify-between">
          <a href="/" className="font-serif text-xl font-light tracking-wider text-foreground">
            Global Travel
          </a>

          <div className="hidden md:flex items-center gap-10">
            {[
              { href: "#philosophy", label: "О вебинаре" },
              { href: "#services", label: "Программа" },
              { href: "#process", label: "Для кого" },
              { href: "#author", label: "Автор" },
              { href: "#faq", label: "FAQ" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-teal transition-colors duration-300 teal-underline"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-teal text-teal text-xs tracking-[0.15em] uppercase hover:bg-teal hover:text-white transition-all duration-300"
          >
            Зарегистрироваться
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Открыть меню"
          >
            <span className={`block w-5 h-px bg-foreground transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-px bg-foreground transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-foreground transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? "max-h-80 pb-8" : "max-h-0"}`}>
          <div className="flex flex-col gap-5 pt-4 border-t border-border">
            {[
              { href: "#philosophy", label: "О вебинаре" },
              { href: "#services", label: "Программа" },
              { href: "#process", label: "Для кого" },
              { href: "#author", label: "Автор" },
              { href: "#faq", label: "FAQ" },
              { href: "#contact", label: "Зарегистрироваться" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-teal transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
