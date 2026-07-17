import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const faqs = [
  { q: 'What services do you offer?', a: 'We offer Standard Detail, Full Detail, Interior Detail, Exterior Detail, Ceramic Coating, and Paint Correction.' },
  { q: 'Do you come to my location?', a: 'Yes! We are a mobile detailing service serving the Portland area. We come to your home or office.' },
  { q: 'How long does a detail take?', a: 'Standard details take 1-2 hours, full details 2-4 hours, and ceramic coating can take 1-2 days.' },
  { q: 'How do I book?', a: 'Scroll to our Services section, pick a package, and click "Book Now" to schedule through Square.' },
]

export const ChatBot = () => {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState<'menu' | 'chat'>('menu')
  const [messages, setMessages] = useState<{ from: 'bot' | 'user'; text: string }[]>([])

  const handleFaqClick = (i: number) => {
    setStep('chat')
    setMessages([
      { from: 'user', text: faqs[i].q },
      { from: 'bot', text: faqs[i].a },
    ])
  }

  const handleBack = () => {
    setStep('menu')
    setMessages([])
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-80 rounded-2xl border border-white/10 bg-black/90 backdrop-blur-xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              {step === 'chat' ? (
                <button onClick={handleBack} className="text-sm text-neutral-400 hover:text-white transition-colors">← Back</button>
              ) : <div />}
              <span className="text-sm font-semibold text-white">Assistant</span>
              <div />
            </div>

            <div className="p-4 max-h-80 overflow-y-auto">
              {step === 'menu' ? (
                <div className="space-y-2">
                  <p className="text-sm text-neutral-400 mb-3">Hi! How can I help you?</p>
                  {faqs.map((faq, i) => (
                    <button
                      key={i}
                      onClick={() => handleFaqClick(i)}
                      className="w-full text-left text-sm bg-white/5 hover:bg-white/10 text-white rounded-xl px-3 py-2.5 transition-colors"
                    >
                      {faq.q}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {messages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <span className={`text-sm max-w-[80%] rounded-2xl px-3 py-2 ${msg.from === 'user' ? 'bg-white text-black' : 'bg-white/10 text-white'}`}>
                        {msg.text}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
