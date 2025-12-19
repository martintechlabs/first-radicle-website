import { cn } from "@/lib/utils";
import { ArrowRight, Check, X } from "lucide-react";
import React from "react";

// Section Container
export const Section = ({ 
  className, 
  children, 
  id 
}: { 
  className?: string; 
  children: React.ReactNode;
  id?: string;
}) => (
  <section id={id} className={cn("py-20 border-b-2 border-black dark:border-white last:border-b-0", className)}>
    <div className="container">
      {children}
    </div>
  </section>
);

// Typography
export const Headline = ({ 
  className, 
  children 
}: { 
  className?: string; 
  children: React.ReactNode 
}) => (
  <h2 className={cn("text-4xl md:text-6xl font-black uppercase leading-none mb-8 font-mono", className)}>
    {children}
  </h2>
);

export const Subheadline = ({ 
  className, 
  children 
}: { 
  className?: string; 
  children: React.ReactNode 
}) => (
  <p className={cn("text-xl md:text-2xl font-sans font-medium max-w-3xl leading-relaxed mb-8", className)}>
    {children}
  </p>
);

// Buttons
export const BrutalButton = ({ 
  className, 
  children, 
  variant = "primary",
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" }) => (
  <button 
    className={cn(
      variant === "primary" ? "brutal-btn-primary" : "brutal-btn",
      "inline-flex items-center gap-2",
      className
    )}
    {...props}
  >
    {children}
    <ArrowRight className="w-5 h-5" />
  </button>
);

// Cards
export const FeatureCard = ({
  title,
  description,
  icon: Icon,
  className
}: {
  title: string;
  description: string;
  icon?: React.ElementType;
  className?: string;
}) => (
  <div className={cn("brutal-card h-full flex flex-col", className)}>
    {Icon && (
      <div className="mb-4 p-3 border-2 border-black dark:border-white w-fit bg-chart-1 text-white dark:text-black">
        <Icon className="w-8 h-8" />
      </div>
    )}
    <h3 className="text-xl font-bold mb-3 font-mono uppercase">{title}</h3>
    <p className="text-muted-foreground font-sans leading-relaxed flex-grow">{description}</p>
  </div>
);

// Pricing Card
export const PricingCard = ({
  title,
  price,
  features,
  isPopular = false,
  ctaText = "Get Started"
}: {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  ctaText?: string;
}) => (
  <div className={cn(
    "brutal-card relative flex flex-col",
    isPopular && "bg-black text-white dark:bg-white dark:text-black"
  )}>
    {isPopular && (
      <div className="absolute -top-5 right-4 bg-chart-1 text-white px-4 py-1 font-mono font-bold border-2 border-black dark:border-white uppercase text-sm">
        Most Popular
      </div>
    )}
    <h3 className="text-2xl font-bold mb-2 font-mono uppercase">{title}</h3>
    <div className="text-4xl font-black mb-6 font-mono">{price}</div>
    
    <ul className="space-y-4 mb-8 flex-grow">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start gap-3">
          <Check className={cn(
            "w-5 h-5 mt-0.5 flex-shrink-0",
            isPopular ? "text-chart-1" : "text-black dark:text-white"
          )} />
          <span className="font-sans font-medium">{feature}</span>
        </li>
      ))}
    </ul>
    
    <button className={cn(
      "w-full py-4 font-mono font-bold uppercase border-2 transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
      isPopular 
        ? "bg-white text-black border-white hover:bg-gray-200 dark:bg-black dark:text-white dark:border-black" 
        : "bg-black text-white border-black hover:bg-gray-800 dark:bg-white dark:text-black dark:border-white"
    )}>
      {ctaText}
    </button>
  </div>
);

// FAQ Item
export const FAQItem = ({
  question,
  answer
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-2 border-black dark:border-white mb-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left font-mono font-bold uppercase hover:bg-secondary transition-colors"
      >
        <span className="text-lg">{question}</span>
        {isOpen ? <X className="w-6 h-6" /> : <ArrowRight className="w-6 h-6" />}
      </button>
      {isOpen && (
        <div className="p-6 pt-0 border-t-2 border-black dark:border-white font-sans leading-relaxed">
          <div className="pt-4">{answer}</div>
        </div>
      )}
    </div>
  );
};
