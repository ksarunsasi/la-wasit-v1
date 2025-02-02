import { Coins, ShieldCheck, HeadphonesIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Coins,
    title: "Zero Brokerage",
    description: "Save thousands in brokerage fees",
  },
  {
    icon: ShieldCheck,
    title: "Verified Properties",
    description: "All listings are thoroughly verified",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Get assistance whenever you need",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose La-Wasit?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none bg-gray-50">
              <CardContent className="pt-8 pb-6 px-4 text-center">
                <div className="flex justify-center mb-4">
                  <feature.icon className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
