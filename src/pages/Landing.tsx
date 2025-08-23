import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Landing = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="bg-landing-bg text-landing-text antialiased min-h-screen">
      <main className="mx-auto max-w-5xl px-6 py-14">
        <header className="flex items-center justify-between">
          <Link to="/" className="font-extrabold tracking-tight text-5xl md:text-6xl leading-none">
            Laryaa
          </Link>
          <nav className="text-sm text-landing-muted space-x-4">
            <a className="hover:underline" href="#about">About</a>
            <a className="hover:underline" href="#contact">Contact</a>
          </nav>
        </header>

        <section className="mt-16 text-left md:text-center">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Every lead gets its own pitch.
            <br className="hidden md:block" />
            Objections? Pre-answered.
          </h1>
          <p className="mt-4 text-landing-muted md:text-lg">
            From first touch to close — Laryaa guides the pitch and the pushback.
          </p>
          <div className="mt-8">
            <Button asChild variant="secondary" size="lg" className="rounded-xl">
              <Link to="/reserve">Reserve Your Spot</Link>
            </Button>
          </div>
        </section>

        <section id="about" className="mt-20 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 p-6">
            <h3 className="font-semibold">AI-powered pitches</h3>
            <p className="mt-2 text-sm text-landing-muted">
              Each lead gets a tailored pitch aligned to their industry and pain points.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6">
            <h3 className="font-semibold">Objections handled</h3>
            <p className="mt-2 text-sm text-landing-muted">
              Pre-answered objections and ready rebuttals, before the call even starts.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6">
            <h3 className="font-semibold">WhatsApp-first</h3>
            <p className="mt-2 text-sm text-landing-muted">
              Built for modern, mobile sales workflows. Web, mobile, and desktop.
            </p>
          </div>
        </section>

        <section id="contact" className="mt-16 text-sm text-landing-muted">
          <div className="flex flex-wrap items-center gap-3">
            <a 
              className="underline hover:text-landing-text transition-colors" 
              href="mailto:hello@laryaa.com"
            >
              hello@laryaa.com
            </a>
            <span>·</span>
            <a 
              className="underline hover:text-landing-text transition-colors" 
              href="https://instagram.com/mylaryaa" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Instagram @mylaryaa
            </a>
            <span>·</span>
            <a 
              className="underline hover:text-landing-text transition-colors" 
              href="https://x.com/laryaa544404" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              X @laryaa544404
            </a>
          </div>
          <p className="mt-4 text-xs">
            We collect personal data only to manage early access and updates. Unsubscribe anytime.
          </p>
        </section>

        <footer className="mt-16 border-t border-white/10 pt-6 text-xs text-landing-muted/60">
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