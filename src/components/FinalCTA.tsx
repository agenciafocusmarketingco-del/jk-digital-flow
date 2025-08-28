import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const whatsappCTA = "https://wa.me/5511999998888?text=Ol%C3%A1%2C%20tudo%20bem%3F%20%F0%9F%91%8B%20Gostaria%20de%20saber%20mais%20sobre%20a%20certifica%C3%A7%C3%A3o%20digital%20com%20a%20JK%20Certificadora.";
  const agendamentoCTA = "https://calendly.com/jkcert/atendimento";

  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-accent/95"></div>
      
      {/* Tech grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_98%,white_100%),linear-gradient(180deg,transparent_98%,white_100%)] bg-[length:50px_50px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
          <h2 className="text-4xl lg:text-6xl font-poppins font-black text-white mb-8 tracking-tight">
            Pronto para emitir seu certificado digital?
          </h2>
          <p className="text-2xl lg:text-3xl text-white/95 mb-12 leading-relaxed">
            Simples, rápido e seguro. Comece agora mesmo!
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-black px-12 py-8 text-xl rounded-full group transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <a href={whatsappCTA} target="_blank" rel="noopener noreferrer">
                <span className="flex items-center gap-3">
                  Emitir no WhatsApp
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-3 border-white text-white hover:bg-white hover:text-primary font-black px-12 py-8 text-xl rounded-full group transition-all duration-300 hover:scale-105"
            >
              <a href={agendamentoCTA} target="_blank" rel="noopener noreferrer">
                <span className="flex items-center gap-3">
                  Agendar Videoconferência
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </a>
            </Button>
          </div>

          <p className="text-white/90 text-lg lg:text-xl mt-12 font-semibold">
            ✓ Atendimento humanizado • ✓ Suporte completo • ✓ Validade jurídica garantida
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;