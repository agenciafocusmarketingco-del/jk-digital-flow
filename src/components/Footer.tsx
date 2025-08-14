import { Instagram, Mail, Phone } from "lucide-react";
const JKcorreta = "/lovable-uploads/7cf55bc2-cce6-4b2f-b9fa-393116140e5a.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-graphite via-graphite to-primary/20 text-white py-20 relative overflow-hidden">
      {/* Tech pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,hsl(var(--primary))_1px,transparent_1px)] bg-[length:30px_30px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-3 gap-16">
          {/* Logo e informações */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src={JKcorreta} 
                alt="JK Certificadora Digital" 
                className="h-10 w-10 brightness-0 invert"
              />
              <div>
                <h3 className="text-xl font-poppins font-bold">JK Certificadora</h3>
                <p className="text-sm text-white/70">AR Credenciada • SyngularID</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Certificados digitais A1 e A3 com emissão 100% online. 
              Autoridade de Registro credenciada pela ICP-Brasil.
            </p>
          </div>

          {/* Links rápidos */}
          <div className="space-y-6">
            <h4 className="text-lg font-poppins font-semibold">Navegação</h4>
            <nav className="space-y-3">
              <a href="#beneficios" className="block text-white/80 hover:text-primary transition-colors">
                Benefícios
              </a>
              <a href="#como-funciona" className="block text-white/80 hover:text-primary transition-colors">
                Como Funciona
              </a>
              <a href="#planos" className="block text-white/80 hover:text-primary transition-colors">
                Planos
              </a>
              <a href="#contato" className="block text-white/80 hover:text-primary transition-colors">
                Contato
              </a>
            </nav>
          </div>

          {/* Contatos */}
          <div className="space-y-6">
            <h4 className="text-lg font-poppins font-semibold">Contatos</h4>
            <div className="space-y-4">
              <a 
                href="https://instagram.com/jkcertificadora" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
                @jkcertificadora
              </a>
              
              <a 
                href="mailto:jkcertificadora@gmail.com"
                className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                jkcertificadora@gmail.com
              </a>
              
              <a 
                href="https://wa.me/5511996672702" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                +55 11 99667-2702
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 JK Certificadora Digital. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
          
          <p className="text-white/40 text-xs mt-4 text-center">
            JK Certificadora Digital - AR credenciada vinculada à SyngularID, 
            conforme normativas da Infraestrutura de Chaves Públicas Brasileira (ICP-Brasil).
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;