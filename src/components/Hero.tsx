import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-video-call.jpg";

const Hero = () => {
  const whatsappCTA = "https://wa.me/5511996672702?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20JK%20Certificadora.%20Quero%20emitir%20meu%20certificado%20digital%20online.%20Pode%20me%20ajudar%3F";
  const agendamentoCTA = "https://calendly.com/jkcert/atendimento";

  return (
    <section className="bg-gradient-to-br from-secondary via-white to-accent/5 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-poppins font-bold leading-tight text-graphite">
                Seu Certificado Digital{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  100% Online
                </span>
                , com Validade Jurídica em Todo o Brasil
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Emissão por videoconferência, rápida e segura. Agora a JK Certificadora é{" "}
                <strong className="text-primary">AR oficial credenciada</strong> (vinculada à SyngularID).
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                className="btn-hero text-lg px-8 py-6"
              >
                <a href={whatsappCTA} target="_blank" rel="noopener noreferrer">
                  Emitir no WhatsApp
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                className="btn-secondary text-lg px-8 py-6"
              >
                <a href={agendamentoCTA} target="_blank" rel="noopener noreferrer">
                  Agendar Videoconferência
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-4">
              <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2">
                <Shield className="w-4 h-4 text-primary" />
                AR Credenciada (SyngularID)
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2">
                <Award className="w-4 h-4 text-primary" />
                ICP-Brasil
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2">
                <Users className="w-4 h-4 text-primary" />
                Atendimento Humanizado
              </Badge>
            </div>

            <p className="text-sm text-muted-foreground">
              ✓ Validade jurídica conforme normativas da ICP-Brasil
            </p>
          </div>

          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={heroImage} 
                alt="Pessoa em videoconferência para emissão de certificado digital"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-medium">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-medium">
              <Award className="w-8 h-8 text-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;