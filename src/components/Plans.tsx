import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Computer, CreditCard, Check } from "lucide-react";

const Plans = () => {
  const whatsappCTA = "https://wa.me/5511996672702?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20JK%20Certificadora.%20Quero%20emitir%20meu%20certificado%20digital%20online.%20Pode%20me%20ajudar%3F";
  const agendamentoCTA = "https://calendly.com/jkcert/atendimento";

  return (
    <section id="planos" className="py-24 bg-gradient-to-br from-secondary via-white to-accent/5 relative overflow-hidden">
      {/* Decorative tech elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-48 h-48 bg-gradient-to-br from-accent to-primary opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-poppins font-black text-graphite mb-6 tracking-tight">
            Escolha o Plano Ideal
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Certificados A1 e A3 com valores competitivos e suporte completo para sua segurança digital
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Plano A1 */}
          <div className="plan-card relative">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Computer className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-poppins font-bold text-graphite">Certificado A1</h3>
              </div>
              <Badge variant="secondary">PF/PJ</Badge>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span>Armazenado no computador</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span>Validade: 12 meses</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span>Ideal: NF-e, assinaturas frequentes</span>
              </div>
            </div>

            <div className="mb-8">
              <div className="text-3xl font-poppins font-bold text-graphite mb-2">
                Consulte valores
              </div>
              <p className="text-muted-foreground">Preços competitivos para PF e PJ</p>
            </div>

            <Button 
              asChild
              className="btn-hero w-full"
            >
              <a href={whatsappCTA} target="_blank" rel="noopener noreferrer">
                Emitir no WhatsApp
              </a>
            </Button>
          </div>

          {/* Plano A3 */}
          <div className="plan-card relative border-primary">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-primary text-white px-4 py-1">Mais Seguro</Badge>
            </div>
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <CreditCard className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-poppins font-bold text-graphite">Certificado A3</h3>
              </div>
              <Badge variant="secondary">Token/Cartão</Badge>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span>Armazenado em dispositivo</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span>Validade: até 36 meses</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span>Ideal: máxima segurança e mobilidade</span>
              </div>
            </div>

            <div className="mb-8">
              <div className="text-3xl font-poppins font-bold text-graphite mb-2">
                Consulte valores
              </div>
              <p className="text-muted-foreground">+ custo do token/cartão</p>
            </div>

            <Button 
              asChild
              className="btn-secondary w-full"
            >
              <a href={whatsappCTA} target="_blank" rel="noopener noreferrer">
                Emitir no WhatsApp
              </a>
            </Button>
          </div>
        </div>

        {/* Transparência */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-xl font-poppins font-semibold text-graphite mb-6 text-center">
            Transparência Total
          </h3>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="documentos">
              <AccordionTrigger>Documentos necessários por PF/PJ</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3">
                  <div>
                    <strong>Pessoa Física:</strong> RG, CPF, comprovante de residência, e-mail válido
                  </div>
                  <div>
                    <strong>Pessoa Jurídica:</strong> CNPJ, contrato social, documentos do responsável legal
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Lista completa confirmada no atendimento
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="custos">
              <AccordionTrigger>Possível custo de token/cartão</AccordionTrigger>
              <AccordionContent>
                Para certificados A3, pode haver custo adicional do dispositivo físico (token USB ou cartão). 
                Valores informados no atendimento conforme fabricante escolhido.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="suporte">
              <AccordionTrigger>Suporte na instalação/renovação</AccordionTrigger>
              <AccordionContent>
                Oferecemos suporte completo para instalação, configuração e renovação do seu certificado. 
                Acompanhamento humanizado durante todo o processo.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Plans;