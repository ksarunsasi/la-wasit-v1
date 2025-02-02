import { ShieldOff, FileText, Home, FileCheck } from 'lucide-react'

export function BenefitsSection() {
  const benefits = [
    {
      icon: ShieldOff,
      title: "Avoid Brokers",
      description: "We directly connect you to verified owners to save brokerage"
    },
    {
      icon: FileText,
      title: "Free Listing",
      description: "Easy listing process. Also using WhatsApp"
    },
    {
      icon: Home,
      title: "Shortlist without Visit",
      description: "Extensive information makes it easy"
    },
    {
      icon: FileCheck,
      title: "Rental Agreement",
      description: "Assistance in creating Rent agreement & Paper work"
    }
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Why Use La-Wasit</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <benefit.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

