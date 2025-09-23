import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Landing = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="bg-[hsl(var(--background))] text-[hsl(var(--body-text))] antialiased min-h-screen font-inter">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--background))]/80 backdrop-blur-md border-b border-[hsl(var(--border))]/20">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 sm:gap-4 group">
            <div className="flex items-center gap-2 sm:gap-3 px-2 sm:px-4 py-1 sm:py-2 rounded-xl sm:rounded-2xl bg-gradient-to-r from-brand-mint/10 to-brand-blue/10 border border-brand-mint/20 backdrop-blur-sm transition-all duration-300 group-hover:from-brand-mint/20 group-hover:to-brand-blue/20">
              <img 
                src="/logo.png" 
                alt="Laryaa Logo" 
                className="h-6 sm:h-8 w-auto brightness-110 contrast-120 group-hover:brightness-125 transition-all duration-300"
              />
              <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-brand-mint to-brand-blue bg-clip-text text-transparent">
                Laryaa
              </span>
            </div>
          </Link>
          <nav className="text-xs sm:text-sm text-[hsl(var(--muted-text))] space-x-3 sm:space-x-6">
            <a className="hover:text-[hsl(var(--brand-mint))] transition-colors font-medium" href="#about">About</a>
            <a className="hover:text-[hsl(var(--brand-mint))] transition-colors font-medium" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 pt-32 pb-16">

        <section className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight text-[hsl(var(--heading-text))]">
            AI Co-Pilot for Sales Intelligence & Objection Handling
          </h1>
          <p className="mt-6 sm:mt-8 text-[hsl(var(--body-text))] text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light px-4">
            Laryaa analyzes customer conversations to help you craft the perfect pitch and handle pushback before it happens. The smarter alternative to complex revenue intelligence platforms.
          </p>
          <div className="mt-12 sm:mt-16">
            <Button 
              asChild 
              size="lg" 
              className="rounded-full px-6 sm:px-12 py-4 sm:py-8 text-lg sm:text-xl font-semibold bg-gradient-to-r from-[hsl(var(--brand-emerald))] to-[hsl(var(--brand-teal))] text-white hover:shadow-2xl hover:shadow-[hsl(var(--brand-emerald))]/25 transition-all duration-500 transform hover:-translate-y-1"
            >
              <Link to="/reserve">Reserve Your Spot</Link>
            </Button>
            <p className="mt-4 text-sm text-[hsl(var(--muted-text))]">
              No spam, ever. Be the first to know when we launch.
            </p>
          </div>
        </section>

        {/* New Features Section */}
        <section id="features" className="mt-24 sm:mt-40 grid gap-6 sm:gap-8 md:grid-cols-3 max-w-6xl mx-auto px-4">
          <div className="rounded-2xl sm:rounded-3xl border border-[hsl(var(--border))] p-6 sm:p-10 bg-[hsl(var(--card))] backdrop-blur-sm hover:shadow-2xl hover:shadow-[hsl(var(--brand-mint))]/10 transition-all duration-500 transform hover:-translate-y-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[hsl(var(--brand-mint))]/20 to-[hsl(var(--brand-blue))]/20 flex items-center justify-center mb-4 sm:mb-6">
              <span className="text-xl sm:text-2xl">👥</span>
            </div>
            <h3 className="font-bold text-xl sm:text-2xl text-[hsl(var(--heading-text))] mb-3 sm:mb-4">Understand Every Lead Instantly</h3>
            <p className="text-[hsl(var(--body-text))] leading-relaxed text-base sm:text-lg">
              Laryaa's AI generates lead personas, giving you the insights you need to build trust from the first "hello."
            </p>
          </div>
          <div className="rounded-2xl sm:rounded-3xl border border-[hsl(var(--border))] p-6 sm:p-10 bg-[hsl(var(--card))] backdrop-blur-sm hover:shadow-2xl hover:shadow-[hsl(var(--brand-blue))]/10 transition-all duration-500 transform hover:-translate-y-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[hsl(var(--brand-blue))]/20 to-[hsl(var(--brand-yellow))]/20 flex items-center justify-center mb-4 sm:mb-6">
              <span className="text-xl sm:text-2xl">🎯</span>
            </div>
            <h3 className="font-bold text-xl sm:text-2xl text-[hsl(var(--heading-text))] mb-3 sm:mb-4">Craft the Perfect Pitch, Every Time</h3>
            <p className="text-[hsl(var(--body-text))] leading-relaxed text-base sm:text-lg">
              Get AI-suggested talking points and message drafts ready to deploy on WhatsApp, email, or your CRM.
            </p>
          </div>
          <div className="rounded-2xl sm:rounded-3xl border border-[hsl(var(--border))] p-6 sm:p-10 bg-[hsl(var(--card))] backdrop-blur-sm hover:shadow-2xl hover:shadow-[hsl(var(--brand-yellow))]/10 transition-all duration-500 transform hover:-translate-y-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[hsl(var(--brand-yellow))]/20 to-[hsl(var(--brand-mint))]/20 flex items-center justify-center mb-4 sm:mb-6">
              <span className="text-xl sm:text-2xl">🛡️</span>
            </div>
            <h3 className="font-bold text-xl sm:text-2xl text-[hsl(var(--heading-text))] mb-3 sm:mb-4">Turn Objections into Opportunities</h3>
            <p className="text-[hsl(var(--body-text))] leading-relaxed text-base sm:text-lg">
              Our co-pilot anticipates common pushbacks and prepares you with smart replies to keep the conversation moving.
            </p>
          </div>
        </section>

        {/* New Comparison Section */}
        <section id="about" className="mt-24 sm:mt-32 max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[hsl(var(--heading-text))] mb-6 sm:mb-8">
            Built for SMBs, Not Enterprises
          </h2>
          <p className="text-[hsl(var(--body-text))] text-lg sm:text-xl leading-relaxed text-center max-w-3xl mx-auto">
            Tools like Gong and other enterprise-level platforms are powerful, but they are often too complex and expensive for growing sales teams. Laryaa provides the core sales intelligence you need—like pitch suggestions and objection handling—in a simple, affordable package designed for the speed of SMBs in India.
          </p>
        </section>

        {/* New Founder Note Section */}
        <section className="mt-24 sm:mt-32 max-w-4xl mx-auto px-4">
          <div className="bg-[hsl(var(--secondary))] rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-[hsl(var(--border))]">
            <blockquote className="text-lg sm:text-xl italic text-[hsl(var(--body-text))] leading-relaxed mb-6">
              "For years, I've watched talented sales teams struggle with the same problem: guessing what a customer wants to hear. Laryaa is the tool I wish I had—a simple AI co-pilot designed to remove the guesswork. We're building it step-by-step with early users, and I'd love to build it with you."
            </blockquote>
            <div className="text-right">
              <p className="font-bold text-[hsl(var(--heading-text))] text-lg">
                - Raju B., Founder of Laryaa
              </p>
            </div>
          </div>
        </section>


        <section id="contact" className="mt-20 sm:mt-24 text-center px-4">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 text-[hsl(var(--muted-text))] text-sm sm:text-base">
            <a 
              className="hover:text-[hsl(var(--brand-mint))] transition-colors font-medium" 
              href="mailto:hello@laryaa.com"
            >
              hello@laryaa.com
            </a>
            <span className="text-gray-300 hidden sm:inline">•</span>
            <a 
              className="hover:text-[hsl(var(--brand-mint))] transition-colors font-medium" 
              href="https://instagram.com/mylaryaa" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Instagram @mylaryaa
            </a>
            <span className="text-gray-300 hidden sm:inline">•</span>
            <a 
              className="hover:text-[hsl(var(--brand-mint))] transition-colors font-medium" 
              href="https://x.com/laryaa544404" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              X @laryaa544404
            </a>
          </div>
          <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-[hsl(var(--muted-text))] max-w-md mx-auto px-4">
            We collect personal data only to manage early access and updates. Unsubscribe anytime.
          </p>
        </section>

        <footer className="mt-20 border-t border-[hsl(var(--border))] pt-8 text-center">
          <div className="mb-4">
            <a 
              className="text-[hsl(var(--body-text))] hover:text-[hsl(var(--brand-mint))] transition-colors font-medium" 
              href="mailto:hello@laryaa.com"
            >
              hello@laryaa.com
            </a>
          </div>
          <p className="text-sm text-[hsl(var(--muted-text))]">
            © 2025 Laryaa. All rights reserved.
          </p>
        </footer>
      </main>

      {/* Hidden SEO content (accessible) */}
      <section className="sr-only" aria-label="About and comparisons for search engines and assistive readers">
        <h2>About Laryaa</h2>
        <p>
          Laryaa is an AI Sales Co-Pilot focused on lead-wise personalization: tailored pitches and objection handling that help SMBs convert faster with WhatsApp-first outreach.
        </p>
        <h2>Comparisons & Alternatives</h2>
        <p>
          Teams often consider Delve.ai, Gong.io, Chorus, or Vodex. Laryaa differs by delivering practical outputs — personalized pitches and ready rebuttals for every lead.
        </p>
      </section>
    </div>
  );
};

export default Landing;