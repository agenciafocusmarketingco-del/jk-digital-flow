import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Users, Video } from "lucide-react";
import heroImage from "@/assets/hero-video-call.jpg";
const Hero = () => {
  const whatsappCTA = "https://wa.me/5511999998888?text=Ol%C3%A1%2C%20tudo%20bem%3F%20%F0%9F%91%8B%20Gostaria%20de%20saber%20mais%20sobre%20a%20certifica%C3%A7%C3%A3o%20digital%20com%20a%20JK%20Certificadora.";
  const agendamentoCTA = "https://calendly.com/jkcert/atendimento";
  return <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-secondary via-white to-accent/5">
      {/* Background tech pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary))_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8 lg:space-y-10 animate-fade-in-up">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="inline-flex items-center gap-2 bg-gradient-primary text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold animate-glow">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                AR Credenciada (SyngularID)
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-poppins font-black leading-[1.1] text-graphite tracking-tight">
                Seu Certificado Digital{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-float block sm:inline">
                  100% Online
                </span>
                <span className="block sm:inline">, com Validade Jurídica em Todo o Brasil</span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground leading-relaxed font-inter">
                Emissão por videoconferência, rápida e segura. Agora a JK Certificadora é{" "}
                <strong className="text-primary font-bold bg-primary/10 px-1 sm:px-2 py-1 rounded-lg">AR oficial credenciada</strong> (vinculada à SyngularID).
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:gap-6 max-w-md mx-auto lg:mx-0">
              <Button asChild className="btn-hero btn-mobile text-base sm:text-lg lg:text-xl group">
                <a href={whatsappCTA} target="_blank" rel="noopener noreferrer">
                  <span className="flex items-center gap-3">
                    Emitir no WhatsApp
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </a>
              </Button>
              
              <Button asChild variant="outline" className="btn-secondary btn-mobile text-base sm:text-lg lg:text-xl group">
                
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-4 justify-center lg:justify-start">
              <Badge variant="secondary" className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                <span className="hidden xs:inline">AR Credenciada</span>
                <span className="xs:hidden">AR</span>
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm">
                <Award className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                ICP-Brasil
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm">
                <Users className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                <span className="hidden sm:inline">Atendimento Humanizado</span>
                <span className="sm:hidden">Humanizado</span>
              </Badge>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground text-center lg:text-left">
              ✓ Validade jurídica conforme normativas da ICP-Brasil
            </p>
          </div>

          <div className="relative animate-scale-in">
            <div className="relative rounded-3xl overflow-hidden shadow-strong group">
              <img src={heroImage} alt="Pessoa em videoconferência para emissão de certificado digital" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/10 to-transparent"></div>
            </div>
            
            {/* Enhanced floating elements with tech styling */}
            <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-strong animate-float">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-strong animate-float" style={{
            animationDelay: '1s'
          }}>
              <Award className="w-10 h-10 text-accent" />
            </div>
            <div className="absolute top-1/2 -left-4 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-medium animate-float" style={{
            animationDelay: '2s'
          }}>
              <Users className="w-8 h-8 text-primary" />
            </div>
            
            {/* Tech grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_98%,hsl(var(--primary)/0.1)_100%),linear-gradient(180deg,transparent_98%,hsl(var(--primary)/0.1)_100%)] bg-[length:20px_20px] pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;