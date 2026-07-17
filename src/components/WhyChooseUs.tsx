import { cn } from '../lib/utils'
import { motion } from 'motion/react'

const images = {
  team: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80',
  products: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80',
  booking: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=800&q=80',
  satisfied: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&q=80',
  community: 'https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=800&q=80',
  gallery1: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&q=80',
  gallery2: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80',
  gallery3: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
  gallery4: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80',
  gallery5: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&q=80',
}

export const WhyChooseUs = () => {
  const features = [
    {
      title: 'Professional Detailing',
      subtitle: 'Expert Craftsmen',
      description:
        'Our team consists of certified detailing professionals with years of experience.',
      skeleton: <SkeletonOne />,
      className: 'col-span-1 lg:col-span-4 border-b lg:border-r border-neutral-800',
    },
    {
      title: 'Premium Products',
      description:
        'We use only the highest quality, professional-grade products for lasting results.',
      skeleton: <SkeletonTwo />,
      className: 'border-b col-span-1 lg:col-span-2 border-neutral-800',
    },
    {
      title: 'Convenient Booking',
      description:
        'Easy online scheduling with flexible time slots that work around your life.',
      skeleton: <SkeletonThree />,
      className: 'col-span-1 lg:col-span-3 lg:border-r border-neutral-800',
    },
    {
      title: 'Satisfaction Guaranteed',
      description:
        "Not happy with the results? We'll make it right, no questions asked.",
      skeleton: <SkeletonFour />,
      className: 'col-span-1 lg:col-span-3 border-neutral-800',
    },
    {
      title: 'Trusted by Thousands',
      description:
        'Join our community of satisfied customers who trust us with their vehicles.',
      skeleton: <SkeletonFive />,
      className: 'col-span-1 lg:col-span-6 border-neutral-800',
    },
  ]

  return (
    <div className="bg-black py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Why Choose Us
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-neutral-300 mb-6">
            The Art of Excellence
          </h3>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            We don't just clean cars—we restore them to showroom condition. Every vehicle receives our signature attention to detail that has made us Portland's the most trusted detailing service.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 rounded-xl lg:grid-cols-6 border border-neutral-800">
            {features.map((feature) => (
              <FeatureCard key={feature.title} className={feature.className}>
                <FeatureTitle>{feature.title}</FeatureTitle>
                {feature.subtitle && (
                  <p className="text-sm text-neutral-400 mt-0.5 mb-2">{feature.subtitle}</p>
                )}
                <FeatureDescription>{feature.description}</FeatureDescription>
                <div className="h-full w-full">{feature.skeleton}</div>
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn('relative overflow-hidden p-6 sm:p-8', className)}>
      {children}
    </div>
  )
}

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="text-left text-xl tracking-tight text-white md:text-2xl md:leading-snug">
      {children}
    </p>
  )
}

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="mx-0 my-2 max-w-sm text-left text-sm text-neutral-500 md:text-sm">
      {children}
    </p>
  )
}

const SkeletonOne = () => (
  <div className="relative flex h-full gap-6 px-2 py-6">
    <div className="group mx-auto h-full w-full overflow-hidden rounded-xl bg-neutral-900 p-3">
      <img
        src={images.team}
        alt="Professional detailing"
        className="h-full w-full rounded-lg object-cover"
      />
    </div>
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-40 w-full bg-gradient-to-t from-black via-black to-transparent" />
    <div className="pointer-events-none absolute inset-x-0 top-0 z-40 h-40 w-full bg-gradient-to-b from-black via-transparent to-transparent" />
  </div>
)

const SkeletonTwo = () => {
  const imgs = [images.products, images.booking, images.satisfied, images.gallery1, images.team]

  return (
    <div className="relative flex h-full flex-col items-start gap-6 overflow-hidden p-4">
      <div className="-ml-16 flex flex-row flex-wrap gap-3">
        {imgs.slice(0, 3).map((img, idx) => (
          <motion.div
            key={'first' + idx}
            style={{ rotate: Math.random() * 16 - 8 }}
            whileHover={{ scale: 1.1, zIndex: 100 }}
            className="shrink-0 overflow-hidden rounded-xl border border-neutral-700 bg-neutral-800 p-1"
          >
            <img
              src={img}
              alt="product"
              className="h-16 w-16 rounded-lg object-cover md:h-20 md:w-20"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row flex-wrap gap-3">
        {imgs.slice(2, 5).map((img, idx) => (
          <motion.div
            key={'second' + idx}
            style={{ rotate: Math.random() * 16 - 8 }}
            whileHover={{ scale: 1.1, zIndex: 100 }}
            className="shrink-0 overflow-hidden rounded-xl border border-neutral-700 bg-neutral-800 p-1"
          >
            <img
              src={img}
              alt="product"
              className="h-16 w-16 rounded-lg object-cover md:h-20 md:w-20"
            />
          </motion.div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 h-full w-16 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 h-full w-16 bg-gradient-to-l from-black to-transparent" />
    </div>
  )
}

const SkeletonThree = () => (
  <div className="relative flex h-full gap-6 px-2 py-6">
    <div className="group mx-auto h-full w-full overflow-hidden rounded-xl bg-neutral-900 p-3">
      <img
        src={images.booking}
        alt="Booking"
        className="h-full w-full rounded-lg object-cover"
      />
    </div>
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-40 w-full bg-gradient-to-t from-black via-black to-transparent" />
    <div className="pointer-events-none absolute inset-x-0 top-0 z-40 h-40 w-full bg-gradient-to-b from-black via-transparent to-transparent" />
  </div>
)

const SkeletonFour = () => {
  const topImgs = [images.satisfied, images.gallery4, images.gallery5]
  const bottomImgs = [images.team, images.products, images.booking]

  return (
    <div className="relative flex h-full flex-col items-center justify-center gap-4 overflow-hidden px-2 py-6">
      <div className="flex gap-3">
        {topImgs.map((img, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-xl border border-neutral-700 bg-neutral-800 p-1"
          >
            <img
              src={img}
              alt="gallery"
              className="h-20 w-20 rounded-lg object-cover md:h-24 md:w-24"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex gap-3">
        {bottomImgs.map((img, idx) => (
          <motion.div
            key={'b' + idx}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-xl border border-neutral-700 bg-neutral-800 p-1"
          >
            <img
              src={img}
              alt="gallery"
              className="h-16 w-16 rounded-lg object-cover md:h-20 md:w-20"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const SkeletonFive = () => (
  <div className="relative flex h-full items-center justify-center gap-8 px-2 py-8 overflow-hidden">
    <div className="flex gap-4">
      {[images.community, images.gallery4, images.gallery5, images.products, images.team].map((img, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 1.05, y: -4 }}
          className="shrink-0 overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-800"
        >
          <img
            src={img}
            alt="customer vehicle"
            className="h-16 w-24 object-cover md:h-24 md:w-36"
          />
        </motion.div>
      ))}
    </div>
    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 h-full w-20 bg-gradient-to-r from-black to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 h-full w-20 bg-gradient-to-l from-black to-transparent" />
  </div>
)
