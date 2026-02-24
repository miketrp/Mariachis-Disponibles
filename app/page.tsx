import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Packages from '@/components/Packages'
import Gallery from '@/components/Gallery'
import VideoSection from '@/components/VideoSection'
import Repertorio from '@/components/Repertorio'
import Blog from '@/components/Blog'
import Contacto from '@/components/Contacto'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import SEO from '@/components/SEO'

export default function Home() {
  return (
    <>
      <SEO 
        title="Mariachis Bogotá Élite | Servicio Profesional de Mariachis en Bogotá - Serenatas, Bodas, Quinceañeras"
        description="Contrata los mejores mariachis en Bogotá. Serenatas, cumpleaños, bodas, quinceañeras y eventos corporativos. Más de 10 años de experiencia. Precios desde $200.000. Cotiza ahora por WhatsApp al +573214388706."
        keywords={[
          'mariachis bogotá', 'serenatas bogotá', 'mariachis baratos bogotá', 'grupos de mariachis bogotá', 
          'precio mariachis bogotá', 'mariachis para bodas bogotá', 'mariachis para quinceañeras bogotá', 
          'mariachis en bogota colombia', 'mariachis bogota precios', 'serenatas bogota', 'mariachis bogota telefono', 
          'mariachis bogota whatsapp', 'grupo de mariachis bogota', 'mariachis para eventos bogota', 'mariachis bogota elite'
        ]}
        canonicalUrl="https://mariachisbogota.com"
        ogImage="https://mariachisbogota.com/og-image.jpg"
        ogType="website"
      />
      
      <header>
        <Navbar />
      </header>
      
      <main className="min-h-screen">
        <Hero />
        <Packages />
        <Gallery />
        <VideoSection />
        <Repertorio />
        <Blog />
        <Contacto />
      </main>
      
      <footer>
        <Footer />
      </footer>
      
      <WhatsAppFloat />
    </>
  )
}
