import { Button } from "@/components/ui/button";
import jkLogo from "@/assets/jk-logo.png";

const Header = () => {
  const whatsappCTA = "https://wa.me/5511996672702?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20JK%20Certificadora.%20Quero%20emitir%20meu%20certificado%20digital%20online.%20Pode%20me%20ajudar%3F";

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-border/50 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4 animate-slide-in-left">
            <div className="relative">
              <img 
                src={jkLogo} 
                alt="JK Certificadora Digital" 
                className="h-12 w-12 transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full animate-glow"></div>
            </div>
            <div>
              <h1 className="text-xl font-poppins font-black text-graphite tracking-tight">JK Certificadora</h1>
              <p className="text-sm text-primary font-semibold">AR Credenciada • SyngularID</p>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#beneficios" className="text-foreground hover:text-primary transition-all duration-300 font-semibold relative group">
              Benefícios
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#como-funciona" className="text-foreground hover:text-primary transition-all duration-300 font-semibold relative group">
              Como Funciona
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#planos" className="text-foreground hover:text-primary transition-all duration-300 font-semibold relative group">
              Planos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-all duration-300 font-semibold relative group">
              Contato
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          <div className="animate-fade-in-up">
            <Button 
              asChild
              className="btn-hero text-base font-bold"
            >
              <a href={whatsappCTA} target="_blank" rel="noopener noreferrer">
                Emitir no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;