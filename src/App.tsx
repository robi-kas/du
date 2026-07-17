import { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import TrueFocus from './components/TrueFocus'
import ShinyText from './components/ShinyText'
import PillNav from './components/PillNav'
import SplitText from './components/SplitText'
import SpecularButton from './components/SpecularButton'
import CountUp from './components/CountUp'
import { LayoutTextFlip } from './components/ui/layout-text-flip'
import { WhyChooseUs } from './components/WhyChooseUs'
import { ServicesCarousel } from './components/ServicesCarousel'
import { AddOns } from './components/AddOns'
import { CTASection } from './components/CTASection'
import { Footer } from './components/Footer'
import { LoaderOne } from './components/loader-one'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      {loading && <LoaderOne />}
      <BrowserRouter>
      <PillNav
        logo="/logo.png"
        logoAlt="Logo"
        items={[
          { label: 'Home', href: '#home' },
          { label: 'About', href: '#about' },
          { label: 'Services', href: '#services' },
          { label: 'Contact', href: '#contact' }
        ]}
        activeHref="#home"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      />

<section id="home" className="relative min-h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen gap-6 px-4 sm:px-6">
          <div className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <ShinyText
              text="Mobile Car Detailing"
              className="text-xs sm:text-sm font-medium tracking-wide uppercase"
              speed={3}
              spread={160}
              color="#a1a1aa"
              shineColor="#ffffff"
              direction="left"
            />
          </div>
          <SplitText
            text="Perfection in Every Detail"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white text-center leading-tight"
            delay={80}
            duration={0.8}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 60 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <p className="text-base sm:text-lg md:text-xl text-white/80 text-center max-w-2xl px-2">
            At Dura mobile detailing, We transform your vehicle into a masterpiece with meticulous attention to every surface.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full">
            <SpecularButton
              size="lg"
              radius={18}
              tint="#ffffff"
              tintOpacity={0.1}
              blur={4}
              textColor="#f5f5f5"
              lineColor="#ffffff"
              baseColor="#525252"
              intensity={1.2}
              shineSize={10}
              shineFade={40}
              thickness={1}
              speed={0.35}
              followMouse
              proximity={250}
              autoAnimate
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto"
            >
              Book Your Detail
            </SpecularButton>
            <SpecularButton
              size="lg"
              radius={18}
              tint="#ffffff"
              tintOpacity={0.1}
              blur={4}
              textColor="#f5f5f5"
              lineColor="#ffffff"
              baseColor="#525252"
              intensity={1.2}
              shineSize={10}
              shineFade={40}
              thickness={1}
              speed={0.35}
              followMouse
              proximity={250}
              autoAnimate
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto"
            >
              View Services
            </SpecularButton>
          </div>
        </div>
      </section>

      <section id="about" className="bg-black py-16 px-4">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <LayoutTextFlip
              text="Trusted"
              words={["Mobile Detailing", "Ceramic Coating", "Paint Correction", "Interior Care"]}
            />
          </div>
          <p className="mt-6 text-neutral-400 text-lg max-w-2xl mx-auto">
            Premium car detailing services delivered to your door. Quality and convenience, every time.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-5xl md:text-6xl font-bold text-white">
              <CountUp from={0} to={2} duration={1.5} />+
            </p>
            <p className="text-neutral-400 text-lg mt-2">Years Experience</p>
          </div>
          <div>
            <p className="text-5xl md:text-6xl font-bold text-white">
              <CountUp from={0} to={100} duration={2} separator="," />+
            </p>
            <p className="text-neutral-400 text-lg mt-2">Cars Detailed</p>
          </div>
          <div>
            <p className="text-5xl md:text-6xl font-bold text-white">
              <CountUp from={0} to={100} duration={2} />%
            </p>
            <p className="text-neutral-400 text-lg mt-2">Satisfaction</p>
          </div>
        </div>
      </section>

      <section id="services" className="bg-black py-16">
        <div className="text-center mb-10">
          <TrueFocus
            sentence="Our Services"
            borderColor="#f5f5f5"
            glowColor="rgba(255,255,255,0.6)"
            animationDuration={0.5}
            pauseBetweenAnimations={2}
          />
        </div>
        <ServicesCarousel />
      </section>

      <WhyChooseUs />

      <AddOns />

      <section id="contact">
        <CTASection />
      </section>

      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
