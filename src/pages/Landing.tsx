import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import laryaaLogo from "@/assets/laryaa-logo.png";

const Landing = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="bg-landing-bg text-landing-text antialiased min-h-screen">
      <main className="mx-auto max-w-6xl px-6 py-16">
        <header className="flex items-center justify-between mb-20">
          <Link to="/" className="flex items-center gap-4">
            <img 
              src={laryaaLogo} 
              alt="Laryaa Logo" 
              className="h-12 w-auto"
            />
          </Link>
          <nav className="text-sm text-landing-muted space-x-6">
            <a className="hover:text-landing-text transition-colors" href="#about">About</a>
            <a className="hover:text-landing-text transition-colors" href="#contact">Contact</a>
          </nav>
        </header>

        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            Every lead gets its own{" "}
            <span className="text-brand-blue">pitch</span>.
            <br className="hidden md:block" />
            <span className="text-brand-yellow">Objections</span>? Pre-answered.
          </h1>
          <p className="mt-8 text-landing-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            From first touch to close — Laryaa guides the pitch and the pushback.
          </p>
          <div className="mt-12">
            <Button 
              asChild 
              size="lg" 
              className="rounded-full px-8 py-6 text-lg font-medium bg-brand-mint text-white hover:opacity-90 transition-opacity"
            >
              <Link to="/reserve">Reserve Your Spot</Link>
            </Button>
          </div>
        </section>

        <section id="about" className="mt-32 grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          <div className="rounded-3xl border border-gray-200 p-8 bg-white/60 backdrop-blur-sm hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-xl text-landing-text">AI-powered pitches</h3>
            <p className="mt-4 text-landing-muted leading-relaxed">
              Each lead gets a tailored pitch aligned to their industry and pain points.
            </p>
          </div>
          <div className="rounded-3xl border border-gray-200 p-8 bg-white/60 backdrop-blur-sm hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-xl text-landing-text">Objections handled</h3>
            <p className="mt-4 text-landing-muted leading-relaxed">
              Pre-answered objections and ready rebuttals, before the call even starts.
            </p>
          </div>
          <div className="rounded-3xl border border-gray-200 p-8 bg-white/60 backdrop-blur-sm hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-xl text-landing-text">WhatsApp-first</h3>
            <p className="mt-4 text-landing-muted leading-relaxed">
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

        <footer className="mt-20 border-t border-gray-200 pt-8 text-center text-sm text-landing-muted">
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