import { Modal, ModalBody, ModalContent, ModalTrigger } from './ui/animated-modal'
import { motion } from 'motion/react'
import SpecularButton from './SpecularButton'

const images = [
  'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80',
  'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80',
  'https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=800&q=80',
  'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&q=80',
  'https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=800&q=80',
]

export const CTASection = () => {
  return (
    <section className="bg-black py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Ready to Transform{' '}
          <span className="text-neutral-300">Your Vehicle?</span>
        </h2>
        <p className="text-neutral-400 text-lg mb-10 max-w-xl mx-auto">
          Book your appointment today and experience the difference that professional detailing makes.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Modal>
            <ModalTrigger className="p-0 bg-transparent border-none">
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
              >
                Book Now
              </SpecularButton>
            </ModalTrigger>
            <ModalBody>
              <ModalContent>
                <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                  Schedule Your{' '}
                  <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                    Detail
                  </span>{' '}
                  Today! ✨
                </h4>
                <div className="flex justify-center items-center">
                  {images.map((image, idx) => (
                    <motion.div
                      key={'images' + idx}
                      style={{ rotate: Math.random() * 20 - 10 }}
                      whileHover={{ scale: 1.1, rotate: 0, zIndex: 100 }}
                      whileTap={{ scale: 1.1, rotate: 0, zIndex: 100 }}
                      className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
                    >
                      <img
                        src={image}
                        alt="detailing"
                        width="500"
                        height="500"
                        className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
                      />
                    </motion.div>
                  ))}
                </div>
                <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
                  <div className="flex items-center justify-center">
                    <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                      ✓ Exterior & Interior Detailing
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                      ✓ Paint Correction & Coating
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                      ✓ Mobile Service Available
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                      ✓ Satisfaction Guaranteed
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <a
                    href="https://book.squareup.com/appointments/hzme1wpis924tv/location/LMRWGSAB302KS/services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 bg-black text-white dark:bg-white dark:text-black font-semibold rounded-full text-sm"
                  >
                    Book Appointment
                  </a>
                </div>
              </ModalContent>
            </ModalBody>
          </Modal>
          <a
            href="tel:+19713229525"
            className="px-8 py-3 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors text-base"
          >
            971-322-9525
          </a>
        </div>
      </div>
    </section>
  )
}
