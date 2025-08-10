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
    <section id="como-funciona" className="py-20 bg-gradient-to-br from-secondary to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-graphite mb-4">
            Como Funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Processo simples e seguro em 5 passos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="step-card text-center group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  <div className="p-4 bg-white rounded-xl shadow-soft group-hover:shadow-medium transition-all duration-300">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg font-poppins font-semibold text-graphite mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
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