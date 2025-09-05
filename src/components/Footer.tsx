import { Instagram, Mail, Phone } from "lucide-react";
const jkLogo = "/lovable-uploads/7cf55bc2-cce6-4b2f-b9fa-393116140e5a.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-graphite via-graphite to-primary/20 text-white py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Tech pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,hsl(var(--primary))_1px,transparent_1px)] bg-[length:30px_30px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16">
          {/* Logo e informações */}
          <div className="space-y-4 sm:space-y-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <img 
                src={jkLogo} 
                alt="JK Certificadora Digital" 
                className="h-8 w-8 sm:h-10 sm:w-10 brightness-0 invert"
              />
              <div>
                <h3 className="text-lg sm:text-xl font-poppins font-bold">JK Certificadora</h3>
                <p className="text-xs sm:text-sm text-white/70">AR Credenciada • SyngularID</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-sm mx-auto md:mx-0">
              Certificados digitais A1 e A3 com emissão 100% online. 
              Autoridade de Registro credenciada pela ICP-Brasil.
            </p>
          </div>

          {/* Links rápidos */}
          <div className="space-y-4 sm:space-y-6 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-poppins font-semibold">Navegação</h4>
            <nav className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 md:flex-col md:space-y-3">
              <a href="#beneficios" className="text-sm sm:text-base text-white/80 hover:text-primary transition-colors">
                Benefícios
              </a>
              <a href="#como-funciona" className="text-sm sm:text-base text-white/80 hover:text-primary transition-colors">
                Como Funciona
              </a>
              <a href="#planos" className="text-sm sm:text-base text-white/80 hover:text-primary transition-colors">
                Planos
              </a>
              <a href="#contato" className="text-sm sm:text-base text-white/80 hover:text-primary transition-colors">
                Contato
              </a>
            </nav>
          </div>

          {/* Contatos */}
          <div className="space-y-4 sm:space-y-6 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-poppins font-semibold">Contatos</h4>
            <div className="space-y-3 sm:space-y-4">
              <a 
                href="https://instagram.com/jkcertificadora" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-3 text-sm sm:text-base text-white/80 hover:text-primary transition-colors"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                @jkcertificadora
              </a>
              
              <a 
                href="mailto:jkcertificadora@gmail.com"
                className="flex items-center justify-center md:justify-start gap-3 text-sm sm:text-base text-white/80 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="break-all">jkcertificadora@gmail.com</span>
              </a>
              
              <a 
                href="https://wa.me/5511996672702" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-3 text-sm sm:text-base text-white/80 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                +55 11 99667-2702
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col items-center gap-4 sm:gap-6 md:flex-row md:justify-between">
            <p className="text-white/60 text-xs sm:text-sm text-center md:text-left">
              © 2024 JK Certificadora Digital. Todos os direitos reservados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors text-center">
                Política de Privacidade
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-center">
                Termos de Uso
              </a>
            </div>
          </div>
          
          <p className="text-white/40 text-xs mt-4 text-center leading-relaxed max-w-2xl mx-auto">
            JK Certificadora Digital - AR credenciada vinculada à SyngularID, 
            conforme normativas da Infraestrutura de Chaves Públicas Brasileira (ICP-Brasil).
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;