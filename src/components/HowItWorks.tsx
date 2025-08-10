import { CheckCircle, MessageCircle, Video, FileCheck, Download } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Escolha A1 ou A3",
      description: "Definimos o tipo ideal para sua necessidade"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-primary" />,
      title: "Fale no WhatsApp ou agende",
      description: "Atendimento via WhatsApp ou videoconferência agendada"
    },
    {
      icon: <Video className="w-8 h-8 text-primary" />,
      title: "Validação de documentos",
      description: "Verificação de identidade por videoconferência"
    },
    {
      icon: <FileCheck className="w-8 h-8 text-primary" />,
      title: "Emissão do certificado",
      description: "Processamento seguro conforme ICP-Brasil"
    },
    {
      icon: <Download className="w-8 h-8 text-primary" />,
      title: "Suporte de instalação",
      description: "Ajudamos na instalação e primeiros usos"
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-gradient-secondary relative overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_98%,hsl(var(--primary)/0.1)_100%),linear-gradient(180deg,transparent_98%,hsl(var(--primary)/0.1)_100%)] bg-[length:40px_40px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-poppins font-black text-graphite mb-6 tracking-tight">
            Como Funciona
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Processo simples e seguro em 5 passos para sua segurança digital
          </p>
        </div>

        {/* Timeline layout for larger screens */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-primary rounded-full transform -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="step-card text-center group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-8 flex justify-center relative">
                  <div className="relative">
                    <div className="p-6 bg-white rounded-2xl shadow-medium group-hover:shadow-strong transition-all duration-500 border-2 border-primary/20 group-hover:border-primary/50">
                      {step.icon}
                    </div>
                    <div className="absolute -top-3 -right-3 bg-gradient-primary text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-black shadow-medium">
                      {index + 1}
                    </div>
                    {/* Connection line for non-last items */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 left-full w-8 h-0.5 bg-gradient-primary transform -translate-y-1/2"></div>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-poppins font-bold text-graphite mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground bg-white/80 rounded-lg p-4 inline-block">
            <strong>Nota:</strong> Requisitos variam por PF/PJ. Confirmamos no atendimento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;