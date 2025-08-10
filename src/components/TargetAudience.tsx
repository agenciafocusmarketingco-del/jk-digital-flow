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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-graphite mb-4">
            Para Quem é o Certificado Digital?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções personalizadas para diferentes necessidades profissionais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="benefit-card text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                  {audience.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-poppins font-semibold text-graphite mb-3">
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