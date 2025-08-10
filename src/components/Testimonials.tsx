import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Em menos de 30 minutos, certificado emitido!",
      author: "Maria Santos",
      role: "Cliente PF",
      rating: 5
    },
    {
      text: "Agilidade para o escritório e suporte impecável.",
      author: "João Oliveira",
      role: "Contador",
      rating: 5
    },
    {
      text: "Renovação online sem dor de cabeça.",
      author: "Ana Costa",
      role: "Advogada",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-graphite mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experiências reais de quem já emitiu certificado digital conosco
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="testimonial-card text-center"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <blockquote className="text-lg text-graphite mb-6 font-medium">
                "{testimonial.text}"
              </blockquote>
              
              <div>
                <cite className="text-primary font-semibold not-italic">
                  {testimonial.author}
                </cite>
                <p className="text-muted-foreground text-sm">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;