
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { QuoteIcon } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Student, Computer Science",
    image: "/placeholder.svg",
    quote: "EduInsight AI helped me identify my strengths in mathematics and guided me towards advanced topics I might have missed otherwise."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "High School Senior",
    image: "/placeholder.svg",
    quote: "The predictions were incredibly accurate. It helped me choose my college major with confidence."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Engineering Student",
    image: "/placeholder.svg",
    quote: "The personalized roadmap made a huge difference in my academic journey. Highly recommended!"
  }
];

const faqs = [
  {
    question: "How does EduInsight AI predict student interests?",
    answer: "EduInsight AI uses advanced machine learning algorithms to analyze various factors including academic performance, engagement patterns, and project participation to accurately predict student interests and potential career paths."
  },
  {
    question: "Can I track my progress over time?",
    answer: "Yes! Our platform provides detailed progress tracking with visual analytics, allowing you to monitor your improvement across different subjects and skills over time."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We employ industry-standard encryption and security measures to ensure your academic and personal data remains private and protected."
  },
  {
    question: "How accurate are the predictions?",
    answer: "Our AI model has demonstrated a 95% accuracy rate in predicting student interests and academic strengths, based on comprehensive analysis of historical data and ongoing performance."
  }
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      
      {/* Testimonials Section */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Student Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="glass-card p-6 rounded-lg">
                <QuoteIcon className="h-8 w-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-6">{testimonial.quote}</p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
