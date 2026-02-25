import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Bell, LogIn, Rabbit, Shield } from "lucide-react";
import Input from "@/components/Input";

export default function Home() {

  const user = null;
  const products = [];

  const FEATURES = [
    {
      icon: Rabbit,
      title: "Lightning Fast",
      description:
        "Deal Drop extracts prices in seconds, handling JavaScript and dynamic content",
    },
    {
      icon: Shield,
      title: "Always Reliable",
      description:
        "Works across all major e-commerce sites with built-in anti-bot protection",
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Get notified instantly when prices drop below your target",
    },
  ];
  return (
    <main className="min-h-screen bg-linear-to-b from-orange-50 via-white to-orange-50">
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src="/deal-drop-logo.png" alt="Logo" width={600} height={200} className="h-10 w-auto" />
          </div>
          <Button
            variant="default"
            size="sm"
            className="bg-orange-500 hover:bg-orange-600 gap-2"
          >
            Sign in
            <LogIn className="w-4 h-4" />
          </Button>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 px-6 py-2 rounded-full text-orange-700
          text-sm font-medium mb-6">
            Made with <span className="text-red-500">❤️</span> by Waqas Rafiq
          </div>
          <h2 className="text-4xl font-bold mb-4 text-gray-900 tracking-tight">Never miss a Price Drop</h2>
          <p className="text-xl mt-2 text-gray-600 mb-12 max-w-2xl mx-auto">Track prices on your favorite e-commerce sites and get notified when prices drop below your target</p>

          <Input user={user} />

          {products.length === 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
              {FEATURES.map((feature, index) => (
                <div key={index} className=" gap-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <feature.icon className="w-12 h-12 bg-orange-100 p-2 rounded-lg flex items-center justify-center mx-auto mb-4 text-orange-600" />
                  <h3 className="text-lg font-semibold mb-2 text-center">{feature.title}</h3>
                  <p className="text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
