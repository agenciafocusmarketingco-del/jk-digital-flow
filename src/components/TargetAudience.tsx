import { Store, Calculator, Scale, FileSignature } from "lucide-react";

const TargetAudience = () => {
  const audiences = [
    {
      icon: <Store className="w-10 h-10 text-primary" />,
      title: "MEIs e Pequenas Empresas",
      description: "Emissão de NF-e e documentos fiscais digitais"
    },
    {
      icon: <Calculator className="w-10 h-10 text-primary" />,
      title: "Contadores e Escritórios",
      description: "Gestão eficiente para múltiplos clientes"
    },
    {
      icon: <Scale className="w-10 h-10 text-primary" />,
      title: "Advogados",
      description: "Acesso aos sistemas de justiça eletrônicos"
    },
    {
      icon: <FileSignature className="w-10 h-10 text-primary" />,
      title: "Assinatura Digital",
      description: "Para quem assina contratos digitalmente"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Tech pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,hsl(var(--primary))_2px,transparent_2px)] bg-[length:60px_60px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-poppins font-black text-graphite mb-6 tracking-tight">
            Para Quem é o Certificado Digital?
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Soluções personalizadas para diferentes necessidades profissionais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="benefit-card text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="mb-8 flex justify-center">
                <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500 border border-primary/20 group-hover:border-primary/40 shadow-medium group-hover:shadow-strong">
                  {audience.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-poppins font-bold text-graphite mb-4 leading-tight">
                {audience.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;