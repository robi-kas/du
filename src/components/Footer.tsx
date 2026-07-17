export const Footer = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <img src="/logo.png" alt="Dura mobile detailing" className="h-24 w-24 object-contain mb-3" />
          <h3 className="text-xl font-bold text-white mb-3">Dura mobile detailing</h3>
          <p className="text-neutral-400 text-sm leading-relaxed">
            At Dura mobile detailing services that transform your vehicle into a masterpiece. Experience the art of automotive care.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/" className="text-neutral-400 text-sm hover:text-white transition-colors">Home</a></li>
            <li><a href="/services" className="text-neutral-400 text-sm hover:text-white transition-colors">Services</a></li>
            <li><a href="/book" className="text-neutral-400 text-sm hover:text-white transition-colors">Book Now</a></li>
            <li><a href="/contact" className="text-neutral-400 text-sm hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h4>
          <ul className="space-y-3">
            <li>
              <a href="tel:+19713229525" className="text-neutral-400 text-sm hover:text-white transition-colors">971-322-9525</a>
            </li>
            <li>
              <a href="mailto:duresaaman748@gmail.com" className="text-neutral-400 text-sm hover:text-white transition-colors">duresaaman748@gmail.com</a>
            </li>
            <li className="text-neutral-400 text-sm">Portland mobile car detailing</li>
            <li className="text-neutral-400 text-sm">Sun-Fri: 7AM - 7PM</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-neutral-800 text-center">
        <p className="text-neutral-500 text-xs">&copy; {new Date().getFullYear()} Dura mobile detailing. All rights reserved.</p>
      </div>
    </footer>
  )
}
