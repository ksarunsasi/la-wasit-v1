import { Package, CreditCard, FileText, Coins, PaintBucket, Globe } from 'lucide-react'

export function ServiceCards() {
  const services = [
    {
      icon: Package,
      title: "Packers & Movers",
      label: "Lowest Price"
    },
    {
      icon: CreditCard,
      title: "Pay rent",
      label: "New Offers"
    },
    {
      icon: FileText,
      title: "Rental Agreement",
      label: "Flat 30% off"
    },
    {
      icon: Coins,
      title: "Click & Earn",
      label: ""
    },
    {
      icon: PaintBucket,
      title: "Painting & Cleaning",
      label: "New"
    },
    {
      icon: Globe,
      title: "La-Wasit For NRIs",
      label: ""
    }
  ]

  return (
    <div className="container px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center p-4 hover:shadow-lg rounded-lg transition-shadow">
            <service.icon className="h-8 w-8 mb-2 text-primary" />
            <h3 className="text-sm font-medium text-center">{service.title}</h3>
            {service.label && (
              <span className="text-xs text-primary mt-1">{service.label}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

