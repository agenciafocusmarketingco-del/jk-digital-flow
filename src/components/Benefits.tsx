import { Clock, Monitor, Shield, DollarSign, HeadphonesIcon } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Rápido",
      description: "Emissão em poucos passos por videoconferência."
    },
    {
      icon: <Monitor className="w-8 h-8 text-primary" />,
      title: "100% Online",
      description: "Sem deslocamentos; atenda pelo celular ou computador."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Seguro",
      description: "Processos alinhados à ICP-Brasil, AR credenciada."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      title: "Preço Justo",
      description: "Planos acessíveis para PF e PJ."
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8 text-primary" />,
      title: "Suporte Humano",
      description: "Acompanhamos do início ao fim."
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-graphite mb-4">
            Por que escolher a JK Certificadora?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tecnologia de ponta com atendimento humano para sua segurança digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="benefit-card text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-poppins font-semibold text-graphite mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;