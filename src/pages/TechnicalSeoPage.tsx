import React from "react";
import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroSplitKpi from "@/components/sections/hero/HeroSplitKpi";
import FeaturesIconCards from "@/components/sections/features/FeaturesIconCards";
import FaqSimple from "@/components/sections/faq/FaqSimple";
import ContactCta from "@/components/sections/contact/ContactCta";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function TechnicalSeoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarCentered
        logo="Webild SEO"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Free SEO Audit", href: "/contact" }}
      />

      <HeroSplitKpi
        tag="TECHNICAL SEO ARCHITECTURE"
        title="Maximize Crawl Efficiency & Core Web Vitals"
        description="Empower your website with enterprise-grade technical SEO audits, site speed optimization, structured data schemas, and seamless indexation."
        primaryButton={{ text: "Request Technical Audit", href: "/contact" }}
        secondaryButton={{ text: "Explore Features", href: "#features" }}
        kpis={[
          { value: "99+", label: "Google PageSpeed Score" },
          { value: "3.2x", label: "Faster Indexation Rate" },
          { value: "100%", label: "Schema Compliance" },
        ]}
        imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
        textAnimation="slide-up"
      />

      <div id="features">
        <FeaturesIconCards
          tag="CORE CAPABILITIES"
          title="Engineered for Search Engine Dominance"
          description="Fix crawl errors, boost rendering speeds, and dominate search engine results with our comprehensive technical infrastructure."
          primaryButton={{ text: "Get Started", href: "/contact" }}
          secondaryButton={{ text: "View Case Studies", href: "/about" }}
          features={[
            { icon: "⚡", title: "Core Web Vitals Boost", description: "Optimize LCP, FID, and CLS scores for maximum ranking performance and ultra-fast user experiences." },
            { icon: "🔍", title: "Crawl Budget Optimization", description: "Eliminate duplicate content, optimize robots.txt, and streamline XML sitemaps to ensure efficient crawling." },
            { icon: "⚙️", title: "Structured Data & Schema", description: "Implement JSON-LD schemas to win rich snippets, Knowledge Graph cards, and featured results." },
            { icon: "🛡️", title: "JavaScript SEO & SSR", description: "Ensure search engine bots render your React, Vue, and Next.js applications seamlessly with dynamic rendering." },
            { icon: "🚀", title: "Site Architecture & Internal Links", description: "Build scalable siloing, optimized anchor text distribution, and clean canonical hierarchies." },
            { icon: "🔒", title: "Security & HTTPS Integrity", description: "Audit SSL certificates, security headers, and redirect chains to maintain uninterrupted domain trust." },
          ]}
          textAnimation="slide-up"
        />
      </div>

      <FaqSimple
        tag="COMMON QUESTIONS"
        title="Technical SEO FAQ"
        description="Everything you need to know about optimizing your site's underlying code and infrastructure."
        items={[
          { question: "What is Technical SEO?", answer: "Technical SEO focuses on server and code optimizations that help search engine spiders crawl and index your site effectively." },
          { question: "How does Core Web Vitals affect search rankings?", answer: "Google directly factors page loading speed, visual stability, and interactivity metrics into mobile and desktop ranking algorithms." },
          { question: "Can you optimize JavaScript-rendered React applications?", answer: "Yes! We specialize in server-side rendering (SSR), pre-rendering, and dynamic rendering strategies for modern JS web apps." },
          { question: "How long does a technical audit take?", answer: "Comprehensive audits are completed in 3 to 5 business days, complete with prioritized developer recommendations." },
        ]}
        textAnimation="slide-up"
      />

      <ContactCta
        tag="READY TO RANK HIGHER?"
        text="Fix your technical foundation and outrank your competitors today."
        primaryButton={{ text: "Schedule Consultation", href: "/contact" }}
        secondaryButton={{ text: "View Pricing", href: "/pricing" }}
        textAnimation="slide-up"
      />

      <FooterSimple
        brand="Webild SEO"
        columns={[
          { title: "Solutions", items: [{ label: "Technical SEO", href: "/technical-seo" }, { label: "Core Web Vitals", href: "/technical-seo" }] },
          { title: "Company", items: [{ label: "About Us", href: "/about" }, { label: "Contact", href: "/contact" }] },
        ]}
        copyright="© 2025 Webild SEO. All rights reserved."
        links={[
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" },
        ]}
      />
    </div>
  );
}