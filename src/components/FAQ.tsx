import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Tem validade jurídica?",
      answer: "Sim, como AR credenciada (SyngularID) na ICP-Brasil, nossos certificados têm plena validade jurídica em todo território nacional."
    },
    {
      question: "Preciso ir até um posto?",
      answer: "Na maioria dos casos, não. Realizamos todo o processo por videoconferência. Em casos específicos, pode ser necessário atendimento presencial, que será informado durante o processo."
    },
    {
      question: "Diferença A1 x A3?",
      answer: "A1 é armazenado no computador (12 meses de validade), ideal para uso frequente. A3 é armazenado em token/cartão (até 36 meses), oferece maior segurança e mobilidade."
    },
    {
      question: "Quais documentos são necessários?",
      answer: "Varia por PF/PJ. Para Pessoa Física: RG, CPF, comprovante de residência. Para PJ: CNPJ, contrato social, documentos do responsável. Validamos pelo WhatsApp antes do processo."
    },
    {
      question: "Vocês oferecem suporte?",
      answer: "Sim, acompanhamos todo o processo desde a emissão até a instalação e configuração. Suporte humanizado durante todo o período de validade."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-graphite mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre certificado digital
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-xl border border-border px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-poppins font-semibold text-graphite hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;