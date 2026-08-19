import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import FeaturesIconCards from "@/components/sections/features/FeaturesIconCards";
import ContactCta from "@/components/sections/contact/ContactCta";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function VideoPage() {
  const videoUrl = "https://player.vimeo.com/video/1218481527?h=0bdceadd5a";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarCentered
        logo="Brand"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Get Started", href: "/contact" }}
      />

      <HeroBillboard
        tag="Featured Presentation"
        title="Experience Next-Level Visual Storytelling"
        description="Watch our featured video presentation showcasing high-quality visuals and innovative concepts."
        primaryButton={{ text: "Watch Video", href: "#featured-video" }}
        secondaryButton={{ text: "Learn More", href: "/about" }}
        videoSrc={videoUrl}
        textAnimation="slide-up"
      />

      <section id="featured-video" className="px-4 py-12 max-w-5xl mx-auto">
        <ScrollReveal variant="fade-blur">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border bg-card shadow-2xl">
            <iframe
              src={videoUrl}
              className="w-full h-full border-0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Featured Video Showcase"
            />
          </div>
        </ScrollReveal>
      </section>

      <FeaturesIconCards
        tag="Highlights"
        title="Key Presentation Insights"
        description="Discover the core benefits and technical highlights presented in this video."
        features={[
          {
            icon: "Sparkles",
            title: "High Definition",
            description: "Streamed with crystal clear resolution and optimized playback."
          },
          {
            icon: "Zap",
            title: "Instant Streaming",
            description: "Fast loading speeds for a smooth viewing experience across devices."
          },
          {
            icon: "Shield",
            title: "Premium Quality",
            description: "Hosted securely with enterprise-grade streaming technology."
          }
        ]}
        textAnimation="slide-up"
      />

      <ContactCta
        tag="Get in Touch"
        text="Ready to take your video experiences to the next level?"
        primaryButton={{ text: "Contact Us", href: "/contact" }}
        secondaryButton={{ text: "Explore Features", href: "/features" }}
        textAnimation="fade-blur"
      />

      <FooterSimple
        brand="Brand"
        columns={[
          {
            title: "Navigation",
            items: routes.map((r) => ({ label: r.label, href: r.path }))
          }
        ]}
        copyright="© 2025 Brand. All rights reserved."
        links={[
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" }
        ]}
      />
    </div>
  );
}