import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const whatsappCTA = "https://wa.me/5511996672702?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20JK%20Certificadora.%20Quero%20emitir%20meu%20certificado%20digital%20online.%20Pode%20me%20ajudar%3F";
  const agendamentoCTA = "https://calendly.com/jkcert/atendimento";

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-white mb-6">
            Pronto para emitir seu certificado digital?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Simples, rápido e seguro. Comece agora mesmo!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg group"
            >
              <a href={whatsappCTA} target="_blank" rel="noopener noreferrer">
                Emitir no WhatsApp
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-6 text-lg group"
            >
              <a href={agendamentoCTA} target="_blank" rel="noopener noreferrer">
                Agendar Videoconferência
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          <p className="text-white/80 text-sm mt-8">
            ✓ Atendimento humanizado • ✓ Suporte completo • ✓ Validade jurídica garantida
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;