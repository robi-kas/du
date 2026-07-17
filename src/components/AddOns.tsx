import { WobbleCard } from './ui/wobble-card'

const addons = [
  { name: 'Pet Hair Removal', price: '+$35' },
  { name: 'Headlight Restoration', price: '+$75' },
  { name: 'Engine Bay Cleaning', price: '+$50' },
  { name: 'Ozone Treatment', price: '+$45' },
  { name: 'Clay Bar Treatment', price: '+$40' },
  { name: 'Leather Protection', price: '+$50' },
  { name: 'Rain Repellent', price: '+$25' },
  { name: 'Fabric Protection', price: '+$45' },
]

export const AddOns = () => {
  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
            Popular Add-Ons
          </h2>
          <p className="text-neutral-400 text-lg">
            Enhance your service with these popular additions
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {addons.map((addon) => (
            <WobbleCard
              key={addon.name}
              containerClassName="min-h-[100px]"
              className="flex items-center justify-center"
            >
              <div className="flex flex-col items-center gap-1 py-5">
                <span className="text-white text-sm font-medium text-center leading-tight">
                  {addon.name}
                </span>
                <span className="text-neutral-400 text-xs font-semibold">
                  {addon.price}
                </span>
              </div>
            </WobbleCard>
          ))}
        </div>
      </div>
    </section>
  )
}
