import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { Sparkles, Truck, ShieldCheck } from "lucide-react"

export default function About() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background text-foreground px-4 md:px-8 py-12 max-w-6xl mx-auto space-y-20">
      
      <section className="text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Smarter, faster, better shopping        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          QuickCart is your ultimate destination for fast, reliable, and enjoyable online shopping.
        </p>
        <Button size="lg" onClick={() => navigate("/")}>Start Shopping</Button>
      </section>
      
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(({ icon: Icon, title, desc }, i) => (
          <div
            key={i}
            className="group p-6 rounded-2xl bg-muted/40 backdrop-blur border border-border transition hover:shadow-xl"
          >
            <Icon className="w-8 h-8 text-primary mb-3" />
            <h3 className="text-xl font-semibold text-foreground">{title}</h3>
            <p className="text-muted-foreground text-sm">{desc}</p>
          </div>
        ))}
      </section>

      
      <section className="bg-muted/40 rounded-3xl px-6 py-12 text-center space-y-4 shadow-lg border border-border">
        <h2 className="text-3xl font-bold">Our Mission</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          To create a fast, affordable, and secure shopping experience by combining cutting-edge technology and human-first support.
        </p>
        <Button variant="outline" size="lg" onClick={() => navigate("/")}>Explore Products</Button>
      </section>
    </div>
  )
}

const features = [
  {
    icon: Sparkles,
    title: "Sleek Shopping Experience",
    desc: "Enjoy a seamless UI and lightning-fast product discovery with zero friction.",
  },
  {
    icon: Truck,
    title: "Next-Day Delivery",
    desc: "Get your essentials delivered fast, reliably, and always on time.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Trusted",
    desc: "Encrypted payments, safe checkouts, and buyer protection built-in.",
  },
]
