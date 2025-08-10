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
    <section id="beneficios" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-primary opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-accent to-primary opacity-10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-poppins font-black text-graphite mb-6 tracking-tight">
            Por que escolher a JK Certificadora?
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tecnologia de ponta com atendimento humano para sua segurança digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="benefit-card text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500 border border-primary/20 group-hover:border-primary/40">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-poppins font-bold text-graphite mb-4 leading-tight">
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