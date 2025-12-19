import { BrutalButton, FAQItem, FeatureCard, Headline, PricingCard, Section, Subheadline } from "@/components/LandingComponents";
import { Code, Cpu, Database, Globe, Layers, Lock, Rocket, Server, ShieldCheck, Terminal, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="border-b-2 border-black dark:border-white py-4 sticky top-0 bg-background z-50">
        <div className="container flex justify-between items-center">
          <div className="font-mono font-black text-2xl tracking-tighter uppercase">
            CodeFirst<span className="text-chart-1">_MVP</span>
          </div>
          <div className="hidden md:flex gap-8 font-mono font-bold uppercase text-sm">
            <a href="#problem" className="hover:underline decoration-2 underline-offset-4">The Problem</a>
            <a href="#solution" className="hover:underline decoration-2 underline-offset-4">Solution</a>
            <a href="#process" className="hover:underline decoration-2 underline-offset-4">Process</a>
            <a href="#pricing" className="hover:underline decoration-2 underline-offset-4">Pricing</a>
          </div>
          <BrutalButton className="hidden md:inline-flex py-2 px-4 text-sm">
            Book Call
          </BrutalButton>
        </div>
      </nav>

      {/* Hero Section */}
      <Section className="pt-24 pb-32 relative overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-block bg-black text-white dark:bg-white dark:text-black px-3 py-1 font-mono font-bold text-sm mb-6 uppercase tracking-wider">
              For No-Code Refugees
            </div>
            <Headline>
              Stop Building <span className="text-chart-1 bg-black/5 px-2">Toys.</span><br />
              Start Building <span className="text-chart-2 bg-black/5 px-2">Software.</span>
            </Headline>
            <Subheadline>
              We turn your struggling Bubble app into a scalable, production-ready React & Node.js MVP in 6 weeks. Guaranteed.
            </Subheadline>
            <div className="flex flex-col sm:flex-row gap-4">
              <BrutalButton variant="primary" className="text-lg px-8 py-4">
                Start Your Build
              </BrutalButton>
              <BrutalButton variant="secondary" className="text-lg px-8 py-4">
                View Case Studies
              </BrutalButton>
            </div>
            
            <div className="mt-12 flex items-center gap-8 border-t-2 border-black/10 dark:border-white/10 pt-8">
              <div>
                <div className="font-mono font-black text-3xl">6 WKS</div>
                <div className="text-sm font-mono uppercase text-muted-foreground">Delivery Time</div>
              </div>
              <div>
                <div className="font-mono font-black text-3xl">$10K</div>
                <div className="text-sm font-mono uppercase text-muted-foreground">Fixed Price</div>
              </div>
              <div>
                <div className="font-mono font-black text-3xl">100%</div>
                <div className="text-sm font-mono uppercase text-muted-foreground">Money Back</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="brutal-card p-2 rotate-2 hover:rotate-0 transition-transform duration-300">
              <img 
                src="/images/hero-architecture.png" 
                alt="Scalable Architecture Diagram" 
                className="w-full h-auto border-2 border-black dark:border-white"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-chart-2/20 border-2 border-black dark:border-white"></div>
          </div>
        </div>
      </Section>

      {/* Trust Strip */}
      <div className="border-b-2 border-black dark:border-white bg-secondary py-8 overflow-hidden">
        <div className="container">
          <p className="font-mono text-center text-sm uppercase font-bold mb-6 text-muted-foreground">Trusted by founders migrating from</p>
          <div className="flex justify-center gap-12 md:gap-24 opacity-60 grayscale">
            {/* Text logos for simplicity in this demo */}
            <span className="text-2xl font-black font-mono">BUBBLE</span>
            <span className="text-2xl font-black font-mono">WEBFLOW</span>
            <span className="text-2xl font-black font-mono">AIRTABLE</span>
            <span className="text-2xl font-black font-mono">ZAPIER</span>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <Section id="problem" className="bg-black text-white dark:bg-white dark:text-black">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="/images/pain-chaos.png" 
              alt="Chaos of No-Code" 
              className="w-full max-w-md mx-auto border-2 border-white dark:border-black p-2 bg-white dark:bg-black"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-block border-2 border-chart-1 text-chart-1 px-3 py-1 font-mono font-bold text-sm mb-6 uppercase">
              The Reality Check
            </div>
            <Headline className="text-white dark:text-black">
              Your No-Code App is a <span className="text-chart-1">Ticking Time Bomb.</span>
            </Headline>
            <div className="space-y-6 font-sans text-lg">
              <div className="flex gap-4">
                <div className="bg-chart-1 text-white w-8 h-8 flex items-center justify-center font-bold font-mono flex-shrink-0 mt-1">!</div>
                <p><strong>It crashes under load.</strong> One viral post and your Bubble database chokes. You lose users faster than you gain them.</p>
              </div>
              <div className="flex gap-4">
                <div className="bg-chart-1 text-white w-8 h-8 flex items-center justify-center font-bold font-mono flex-shrink-0 mt-1">!</div>
                <p><strong>Zapier bills are bleeding you dry.</strong> You're paying $500/mo just to move data from A to B. It's inefficient and expensive.</p>
              </div>
              <div className="flex gap-4">
                <div className="bg-chart-1 text-white w-8 h-8 flex items-center justify-center font-bold font-mono flex-shrink-0 mt-1">!</div>
                <p><strong>Investors won't touch it.</strong> VCs want IP, not a rented house on someone else's land. You need code to raise capital.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Solution Section */}
      <Section id="solution">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Headline>Real Code. Real Scale. <br/>No Headaches.</Headline>
          <Subheadline className="mx-auto">
            We bridge the gap between validation and venture scale. You get a battle-tested stack enhanced with AI speed.
          </Subheadline>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            title="Production Grade"
            description="Built on React, Node.js, and PostgreSQL. The same stack used by Uber, Airbnb, and Netflix. Ready for millions of users."
            icon={Server}
          />
          <FeatureCard 
            title="You Own The IP"
            description="No platform lock-in. You get the GitHub repository. Host it anywhere. Hire your own team later. It's 100% yours."
            icon={Lock}
          />
          <FeatureCard 
            title="AI-Accelerated"
            description="We use advanced AI agents to write boilerplate code 10x faster, so we can focus on your unique business logic and complex features."
            icon={Zap}
          />
        </div>
      </Section>

      {/* Process Section */}
      <Section id="process" className="bg-secondary">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Headline>From Prototype to Powerhouse in 3 Steps</Headline>
            <div className="space-y-12 mt-12">
              <div className="relative pl-12 border-l-4 border-black dark:border-white">
                <div className="absolute -left-[18px] top-0 bg-black text-white dark:bg-white dark:text-black w-8 h-8 flex items-center justify-center font-mono font-bold rounded-full">1</div>
                <h3 className="text-2xl font-mono font-bold uppercase mb-2">The Handover</h3>
                <p className="text-lg">Give us your no-code prototype and a walkthrough. We map your data structures and logic to a real schema.</p>
              </div>
              <div className="relative pl-12 border-l-4 border-black dark:border-white">
                <div className="absolute -left-[18px] top-0 bg-black text-white dark:bg-white dark:text-black w-8 h-8 flex items-center justify-center font-mono font-bold rounded-full">2</div>
                <h3 className="text-2xl font-mono font-bold uppercase mb-2">The Build</h3>
                <p className="text-lg">We sprint for 6 weeks. You get weekly demos on a staging server. We migrate your data and set up auth.</p>
              </div>
              <div className="relative pl-12 border-l-4 border-black dark:border-white">
                <div className="absolute -left-[18px] top-0 bg-black text-white dark:bg-white dark:text-black w-8 h-8 flex items-center justify-center font-mono font-bold rounded-full">3</div>
                <h3 className="text-2xl font-mono font-bold uppercase mb-2">The Launch</h3>
                <p className="text-lg">We deploy to your cloud (AWS/Vercel). We monitor the switch-over. You're now running on professional rails.</p>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="/images/process-blueprint.png" 
              alt="Process Blueprint" 
              className="w-full border-2 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
            />
          </div>
        </div>
      </Section>

      {/* Features Grid */}
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="col-span-full mb-8">
            <Headline>Technical Specs</Headline>
          </div>
          <div className="border-2 border-black dark:border-white p-6 hover:bg-secondary transition-colors">
            <Database className="w-8 h-8 mb-4" />
            <h4 className="font-mono font-bold uppercase mb-2">PostgreSQL DB</h4>
            <p className="text-sm">Structured, relational data that scales.</p>
          </div>
          <div className="border-2 border-black dark:border-white p-6 hover:bg-secondary transition-colors">
            <Globe className="w-8 h-8 mb-4" />
            <h4 className="font-mono font-bold uppercase mb-2">React Frontend</h4>
            <p className="text-sm">Snappy, app-like experience.</p>
          </div>
          <div className="border-2 border-black dark:border-white p-6 hover:bg-secondary transition-colors">
            <Server className="w-8 h-8 mb-4" />
            <h4 className="font-mono font-bold uppercase mb-2">Node.js API</h4>
            <p className="text-sm">Fast, event-driven backend logic.</p>
          </div>
          <div className="border-2 border-black dark:border-white p-6 hover:bg-secondary transition-colors">
            <ShieldCheck className="w-8 h-8 mb-4" />
            <h4 className="font-mono font-bold uppercase mb-2">Secure Auth</h4>
            <p className="text-sm">JWTs, OAuth, and role-based access.</p>
          </div>
          <div className="border-2 border-black dark:border-white p-6 hover:bg-secondary transition-colors">
            <Layers className="w-8 h-8 mb-4" />
            <h4 className="font-mono font-bold uppercase mb-2">Clean Architecture</h4>
            <p className="text-sm">Modular code that's easy to extend.</p>
          </div>
          <div className="border-2 border-black dark:border-white p-6 hover:bg-secondary transition-colors">
            <Terminal className="w-8 h-8 mb-4" />
            <h4 className="font-mono font-bold uppercase mb-2">CI/CD Pipeline</h4>
            <p className="text-sm">Automated testing and deployment.</p>
          </div>
          <div className="border-2 border-black dark:border-white p-6 hover:bg-secondary transition-colors">
            <Code className="w-8 h-8 mb-4" />
            <h4 className="font-mono font-bold uppercase mb-2">TypeScript</h4>
            <p className="text-sm">Type-safe code for fewer bugs.</p>
          </div>
          <div className="border-2 border-black dark:border-white p-6 hover:bg-secondary transition-colors">
            <Rocket className="w-8 h-8 mb-4" />
            <h4 className="font-mono font-bold uppercase mb-2">SEO Optimized</h4>
            <p className="text-sm">Server-side rendering ready.</p>
          </div>
        </div>
      </Section>

      {/* Social Proof */}
      <Section className="bg-black text-white dark:bg-white dark:text-black">
        <Headline className="text-center text-white dark:text-black mb-16">Founder Stories</Headline>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border-2 border-white dark:border-black p-8 relative">
            <div className="text-6xl font-serif absolute top-4 left-4 opacity-20">"</div>
            <p className="text-lg font-medium relative z-10 mb-6">
              "We hit 5,000 users on Bubble and the app just stopped working. CodeFirst migrated us in 5 weeks. We just raised our Seed round on the new tech stack."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
              <div>
                <div className="font-mono font-bold uppercase">Sarah Jenkins</div>
                <div className="text-sm opacity-70">Founder, FinFlow</div>
              </div>
            </div>
          </div>
          <div className="border-2 border-white dark:border-black p-8 relative">
            <div className="text-6xl font-serif absolute top-4 left-4 opacity-20">"</div>
            <p className="text-lg font-medium relative z-10 mb-6">
              "I was spending $2k/month on Zapier. The custom backend CodeFirst built cut our operational costs by 90% and runs 10x faster."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
              <div>
                <div className="font-mono font-bold uppercase">Marcus Chen</div>
                <div className="text-sm opacity-70">CEO, DataSync</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing">
        <div className="text-center mb-16">
          <Headline>Simple, Transparent Pricing</Headline>
          <Subheadline className="mx-auto">No hourly billing surprises. No scope creep. Just results.</Subheadline>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard 
            title="Strategy Audit"
            price="$249"
            ctaText="Book Audit"
            features={[
              "1-hour deep dive call",
              "Architecture review",
              "Migration roadmap",
              "Cost savings analysis",
              "Risk assessment"
            ]}
          />
          <PricingCard 
            title="The MVP Build"
            price="$10,000"
            isPopular={true}
            ctaText="Start Application"
            features={[
              "Full React/Node.js Build",
              "Database Migration",
              "Auth & Payments Setup",
              "6-Week Delivery Guarantee",
              "Source Code Ownership",
              "30 Days Bug Fixes"
            ]}
          />
          <PricingCard 
            title="Scale Support"
            price="$2k/mo"
            ctaText="Contact Us"
            features={[
              "Ongoing Feature Dev",
              "Server Maintenance",
              "Security Updates",
              "Priority Support",
              "Monthly Strategy Call",
              "Cancel Anytime"
            ]}
          />
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-secondary">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Headline>FAQ</Headline>
            <p className="text-lg mb-6">Have questions? We have answers.</p>
            <BrutalButton>Contact Support</BrutalButton>
          </div>
          <div className="md:col-span-8">
            <FAQItem 
              question="Do I really own the code?"
              answer="Yes. 100%. We build it in a private GitHub repository and transfer full ownership to you upon completion. You are not locked into our platform."
            />
            <FAQItem 
              question="What happens if you miss the 6-week deadline?"
              answer="We work for free until it's done. If we miss the agreed-upon scope deadline, you don't pay the final installment until it's live."
            />
            <FAQItem 
              question="Can you migrate my data from Bubble?"
              answer="Absolutely. We write custom scripts to export your data from Bubble/Airtable and import it into a properly structured PostgreSQL database."
            />
            <FAQItem 
              question="Do you use AI to write the code?"
              answer="Yes. We use advanced AI agents to handle the repetitive boilerplate work. This is how we can deliver a $50k agency-quality build for $10k in 6 weeks. Human senior engineers review every line."
            />
            <FAQItem 
              question="What are the ongoing costs?"
              answer="Unlike Bubble, you only pay for hosting (usually $20-$50/mo on Vercel/Render) and any third-party APIs you use. No more user-limits or row-limits."
            />
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-chart-1 text-white text-center py-32">
        <h2 className="text-5xl md:text-7xl font-black font-mono uppercase mb-8 leading-none">
          Ready to Scale?
        </h2>
        <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-12">
          Don't let your no-code prototype hold you back. Secure your spot for next month's sprint.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-black text-white border-2 border-white px-8 py-4 font-mono font-bold uppercase text-xl hover:bg-white hover:text-black transition-colors brutal-shadow">
            Apply Now - $10k Fixed
          </button>
          <button className="bg-transparent text-white border-2 border-white px-8 py-4 font-mono font-bold uppercase text-xl hover:bg-white hover:text-black transition-colors">
            Book a Strategy Call
          </button>
        </div>
        <p className="mt-8 text-sm opacity-80 font-mono uppercase">
          Limited to 5 clients per month to ensure quality.
        </p>
      </Section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t-2 border-white">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="font-mono font-black text-2xl tracking-tighter uppercase mb-6">
                CodeFirst<span className="text-chart-1">_MVP</span>
              </div>
              <p className="text-gray-400 max-w-sm">
                The bridge between validation and venture scale. We build the technical foundation for the next generation of unicorns.
              </p>
            </div>
            <div>
              <h4 className="font-mono font-bold uppercase mb-4 text-chart-1">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Case Studies</a></li>
                <li><a href="#" className="hover:text-white">Manifesto</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono font-bold uppercase mb-4 text-chart-1">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Guarantee</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-mono">
            <div>&copy; 2025 CodeFirst MVP. All rights reserved.</div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
              <a href="#" className="hover:text-white">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
