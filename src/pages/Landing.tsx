import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import laryaaLogo from "@/assets/laryaa-logo.png";

const Landing = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="bg-gradient-to-br from-[hsl(225,15%,8%)] to-[hsl(225,20%,12%)] text-landing-text antialiased min-h-screen">
      <main className="mx-auto max-w-6xl px-6 py-16">
        <header className="flex items-center justify-between mb-20">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-gradient-to-r from-brand-mint/10 to-brand-blue/10 border border-brand-mint/20 backdrop-blur-sm transition-all duration-300 group-hover:from-brand-mint/20 group-hover:to-brand-blue/20">
              <img 
                src={laryaaLogo} 
                alt="Laryaa Logo" 
                className="h-8 w-auto brightness-110 contrast-120 group-hover:brightness-125 transition-all duration-300"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-brand-mint to-brand-blue bg-clip-text text-transparent">
                Laryaa
              </span>
            </div>
          </Link>
          <nav className="text-sm text-landing-muted space-x-6">
            <a className="hover:text-brand-mint transition-colors font-medium" href="#about">About</a>
            <a className="hover:text-brand-mint transition-colors font-medium" href="#contact">Contact</a>
          </nav>
        </header>

        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            Every lead gets its own{" "}
            <span className="bg-gradient-to-r from-brand-blue to-brand-mint bg-clip-text text-transparent">pitch</span>.
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-brand-yellow to-brand-blue bg-clip-text text-transparent">Objections</span>? Pre-answered.
          </h1>
          <p className="mt-8 text-landing-muted text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
            From first touch to close — Laryaa guides the pitch and the pushback.
          </p>
          <div className="mt-16">
            <Button 
              asChild 
              size="lg" 
              className="rounded-full px-12 py-8 text-xl font-semibold bg-gradient-to-r from-brand-mint to-brand-blue text-white hover:shadow-2xl hover:shadow-brand-mint/25 transition-all duration-500 transform hover:-translate-y-1"
            >
              <Link to="/reserve">Reserve Your Spot</Link>
            </Button>
          </div>
        </section>

        <section id="about" className="mt-40 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="rounded-3xl border border-brand-mint/20 p-10 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm hover:shadow-2xl hover:shadow-brand-mint/10 transition-all duration-500 transform hover:-translate-y-2">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-brand-mint/20 to-brand-blue/20 flex items-center justify-center mb-6">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-bold text-2xl text-card-foreground mb-4">AI-powered pitches</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Each lead gets a tailored pitch aligned to their industry and pain points.
            </p>
          </div>
          <div className="rounded-3xl border border-brand-blue/20 p-10 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm hover:shadow-2xl hover:shadow-brand-blue/10 transition-all duration-500 transform hover:-translate-y-2">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-brand-blue/20 to-brand-yellow/20 flex items-center justify-center mb-6">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="font-bold text-2xl text-card-foreground mb-4">Objections handled</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Pre-answered objections and ready rebuttals, before the call even starts.
            </p>
          </div>
          <div className="rounded-3xl border border-brand-yellow/20 p-10 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm hover:shadow-2xl hover:shadow-brand-yellow/10 transition-all duration-500 transform hover:-translate-y-2">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-brand-yellow/20 to-brand-mint/20 flex items-center justify-center mb-6">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="font-bold text-2xl text-card-foreground mb-4">WhatsApp-first</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Built for modern, mobile sales workflows. Web, mobile, and desktop.
            </p>
          </div>
        </section>

        <section id="contact" className="mt-24 text-center">
          <div className="flex flex-wrap justify-center items-center gap-6 text-landing-muted">
            <a 
              className="hover:text-brand-mint transition-colors font-medium" 
              href="mailto:hello@laryaa.com"
            >
              hello@laryaa.com
            </a>
            <span className="text-gray-300">•</span>
            <a 
              className="hover:text-brand-mint transition-colors font-medium" 
              href="https://instagram.com/mylaryaa" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Instagram @mylaryaa
            </a>
            <span className="text-gray-300">•</span>
            <a 
              className="hover:text-brand-mint transition-colors font-medium" 
              href="https://x.com/laryaa544404" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              X @laryaa544404
            </a>
          </div>
          <p className="mt-6 text-sm text-landing-muted max-w-md mx-auto">
            We collect personal data only to manage early access and updates. Unsubscribe anytime.
          </p>
        </section>

        <footer className="mt-20 border-t border-border pt-8 text-center text-sm text-landing-muted">
          © {currentYear} Laryaa.
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