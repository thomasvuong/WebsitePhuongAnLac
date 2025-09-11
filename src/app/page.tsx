import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Explainers from '@/components/Explainers'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Explainers />
      </main>
      <Footer />
    </div>
  )
}
