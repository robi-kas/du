import { Carousel, Card } from './ui/apple-cards-carousel'
import standardImg from '../assets/standard.jpg'
import fullImg from '../assets/full.jpg'
import interiorImg from '../assets/interier.jpg'
import exteriorImg from '../assets/exterier.jpg'
import ceramicImg from '../assets/ceramatic.jpg'
import paintImg from '../assets/paint.jpg'

const bookingUrls = [
  'https://book.squareup.com/appointments/hzme1wpis924tv/location/LMRWGSAB302KS/services/D4IIJAG3FB3VTNIQSDG7PUT2',
  'https://book.squareup.com/appointments/hzme1wpis924tv/location/LMRWGSAB302KS/services/SSYIDQSV3HZKM6BRNE5BQGSN',
  'https://book.squareup.com/appointments/hzme1wpis924tv/location/LMRWGSAB302KS/services/Z7DHBZLEXBFXUSW6FXDPIDIW',
  'https://book.squareup.com/appointments/hzme1wpis924tv/location/LMRWGSAB302KS/services/PBXJ3AC5Q425O5SRMEOT4LR2',
  'https://book.squareup.com/appointments/hzme1wpis924tv/location/LMRWGSAB302KS/services/EJGADF4OOEKRKS2ILB7QOGGN',
  'https://book.squareup.com/appointments/hzme1wpis924tv/location/LMRWGSAB302KS/services',
]

interface ServiceDetail {
  title: string
  price: string
  duration: string
  description: string
  includes: { section?: string; items: string[] }[]
  note?: string
  bookUrl: string
}

const DetailContent = ({ detail }: { detail: ServiceDetail }) => (
  <div className="bg-neutral-900 p-6 md:p-10 rounded-3xl mb-4 text-left">
    <div className="flex items-center justify-between mb-6">
      <div>
        <p className="text-neutral-400 text-sm">{detail.duration}</p>
        <p className="text-2xl font-bold text-white mt-1">{detail.price}</p>
      </div>
    </div>

    {detail.includes.map((section, i) => (
      <div key={i} className="mb-5">
        {section.section && (
          <h4 className="text-white font-semibold text-lg mb-2 uppercase tracking-wide">
            {section.section}
          </h4>
        )}
        <ul className="space-y-1.5">
          {section.items.map((item, j) => (
            <li key={j} className="text-neutral-400 text-sm flex items-start gap-2">
              <span className="text-neutral-500 mt-1 shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}

    {detail.note && (
      <p className="text-amber-400/80 text-sm mt-4 italic">{detail.note}</p>
    )}

    <a
      href={detail.bookUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-6 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors"
    >
      Book Now
    </a>
  </div>
)

const services: {
  category: string
  title: string
  src: string
  detail: ServiceDetail
}[] = [
  {
    category: 'From $99',
    title: 'Standard Detail',
    src: standardImg,
    detail: {
      title: 'Standard Detail',
      price: 'From $99',
      duration: 'Price varies · 2 hr+',
      description:
        'Quick exterior clean and shine for your busy schedule',
      includes: [
        {
          section: 'Exterior',
          items: [
            'Hand wash & dry using microfiber towel',
            'Clean surface of wheels and tires',
            'Windows',
          ],
        },
        {
          section: 'Interior',
          items: [
            'Wipe and clean all interior surfaces',
            'Vacuum floors, seats, door pockets',
            'Interior compartments and trunk',
            'Clean the interior of windows',
            'Shine the interior dashboards and doors',
          ],
        },
      ],
      note: 'PLEASE ONLY BOOK THIS IF YOUR VEHICLE HAS BEEN DETAILED BY A PROFESSIONAL WITHIN 1-2 MONTHS!',
      bookUrl: bookingUrls[0],
    },
  },
  {
    category: 'From $249',
    title: 'Full Detail',
    src: fullImg,
    detail: {
      title: 'Full Detail',
      price: 'From $249',
      duration: 'Price varies · 4 hr 5 min+',
      description: 'Complete interior and exterior restoration',
      includes: [
        {
          section: 'Exterior',
          items: [
            'Pressure wash',
            'Pre-rinse & final rinse',
            'Surface of tires and wheels',
            'Claybar all body panels, headlights and plastics',
            'Apply hydrophobic wax and sealant',
            'Hand wash and dry using microfiber towels',
          ],
        },
        {
          section: 'Interior',
          items: [
            'Wipe and clean all interior surfaces',
            'Vacuum floors, seats, door pockets, interior compartments and trunk',
            'Clean the interior of windows',
            'Spot clean upholstery',
            'Shine the interior dashboards and doors',
            'Shampoo carpet and leather seats condition',
          ],
        },
      ],
      note: 'Will leave your car looking like new, inside and out! Prices and Duration may vary after inspection.',
      bookUrl: bookingUrls[1],
    },
  },
  {
    category: 'From $99',
    title: 'Interior Detail',
    src: interiorImg,
    detail: {
      title: 'Interior Detail',
      price: 'From $99',
      duration: 'Price varies · 3 hr',
      description: 'Deep cleaning and restoration of your vehicle interior',
      includes: [
        {
          section: 'Interior',
          items: [
            'Wipe and clean all interior surfaces',
            'Vacuum floors, seats, door pockets, interior compartments and trunk',
            'Clean the interior of windows',
            'Spot clean upholstery',
            'Shine the interior dashboards and doors',
            'Shampoo carpet and leather seats condition',
          ],
        },
      ],
      note: 'Prices and Duration may vary after inspection. Additional shampoo $49.',
      bookUrl: bookingUrls[2],
    },
  },
  {
    category: 'From $89',
    title: 'Exterior Detail',
    src: exteriorImg,
    detail: {
      title: 'Exterior Detail',
      price: 'From $89',
      duration: 'Price varies · 1 hr 30 min+',
      description:
        'Professional exterior paint enhancement and protection',
      includes: [
        {
          section: 'Service Includes',
          items: [
            'Hand wash & dry',
            'Wheel and rim cleaning',
            'Tire shine',
            'Exterior wipe down',
            'Protective wax or sealant',
          ],
        },
      ],
      bookUrl: bookingUrls[3],
    },
  },
  {
    category: 'From $599',
    title: 'Ceramic Coating',
    src: ceramicImg,
    detail: {
      title: 'Ceramic Coating',
      price: 'From $599',
      duration: 'Price varies · 1 hr+',
      description: 'Long-lasting protection with premium ceramic',
      includes: [
        {
          section: 'One-Step Paint Correction + Ceramic Coating',
          items: [
            'Restore gloss',
            'Enhance color depth',
            'Protect your vehicle in one complete process',
            'Removes light to moderate swirl marks, oxidation, water spots, and minor scratches',
            'Up to 50-70% swirl and defect removal',
            'Enhanced gloss and paint clarity',
            'Long-lasting protective layer shields from UV, oxidation, dirt, and light scratches',
          ],
        },
      ],
      bookUrl: bookingUrls[4],
    },
  },
  {
    category: 'From $399',
    title: 'Paint Correction',
    src: paintImg,
    detail: {
      title: 'Paint Correction',
      price: 'From $399',
      duration: 'Price varies · 6 hr 30 min+',
      description:
        'Remove swirls and scratches for flawless finish',
      includes: [
        {
          section: 'One-Step Paint Correction',
          items: [
            'Smooths out light swirl marks and faint scratches',
            'Boosts gloss and clarity of paint',
            'Enhances color depth without heavy labor',
            'Time- and cost-efficient',
            'Good option for routine maintenance or before protection (wax or ceramic)',
          ],
        },
      ],
      note: 'Note: It won\'t remove deep scratches or severe defects — those require two-step or multi-stage correction.',
      bookUrl: bookingUrls[5],
    },
  },
]

export const ServicesCarousel = () => {
  const cards = services.map((service, index) => (
    <Card
      key={service.title}
      card={{
        src: service.src,
        title: service.title,
        category: service.category,
        content: <DetailContent detail={service.detail} />,
      }}
      index={index}
    />
  ))

  return (
    <div className="w-full bg-black pb-10">
      <p className="max-w-7xl pl-4 mx-auto text-neutral-400 text-base md:text-lg mb-6">
        Tailored to Perfection — From quick refreshes to complete transformations, we offer services designed for every need.
      </p>
      <Carousel items={cards} />
    </div>
  )
}
