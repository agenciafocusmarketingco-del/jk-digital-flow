import { Button } from "@/components/ui/button";
import jkLogo from "@/assets/jk-logo.png";

const Header = () => {
  const whatsappCTA = "https://wa.me/5511996672702?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20JK%20Certificadora.%20Quero%20emitir%20meu%20certificado%20digital%20online.%20Pode%20me%20ajudar%3F";

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src={jkLogo} 
            alt="JK Certificadora Digital" 
            className="h-10 w-10"
          />
          <div>
            <h1 className="text-xl font-poppins font-bold text-graphite">JK Certificadora</h1>
            <p className="text-xs text-muted-foreground">AR Credenciada • SyngularID</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#beneficios" className="text-foreground hover:text-primary transition-colors">
            Benefícios
          </a>
          <a href="#como-funciona" className="text-foreground hover:text-primary transition-colors">
            Como Funciona
          </a>
          <a href="#planos" className="text-foreground hover:text-primary transition-colors">
            Planos
          </a>
          <a href="#contato" className="text-foreground hover:text-primary transition-colors">
            Contato
          </a>
        </nav>

        <Button 
          asChild
          className="btn-hero"
        >
          <a href={whatsappCTA} target="_blank" rel="noopener noreferrer">
            Emitir no WhatsApp
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;