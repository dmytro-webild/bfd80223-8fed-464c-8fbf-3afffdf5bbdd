import CustomFooter from '@/components/CustomFooter';
import NavbarFloating from '@/components/ui/NavbarFloating';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Features",
    "href": "#features"
  },
  {
    "name": "Pricing",
    "href": "#pricing"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Social Proof",
    "href": "#social-proof"
  },
  {
    "name": "Features Bento",
    "href": "#features-bento"
  },
  {
    "name": "Process",
    "href": "#process"
  },
  { name: "Technical Seo", href: "/technical-seo" },
  { name: "Video", href: "/video" },


];

  return (
    <StyleProvider buttonVariant="arrow" siteBackground="noise" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloating
      logo="AI SEO Agency"
      ctaButton={{
        text: "Schedule Call",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <CustomFooter
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#",
            },
            {
              label: "Careers",
              href: "#",
            },
            {
              label: "Press",
              href: "#",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "AI Strategy",
              href: "#",
            },
            {
              label: "Technical SEO",
              href: "#",
            },
            {
              label: "Audit",
              href: "#",
            },
          ],
        },
        {
          title: "Design & SEO",
          items: [
            {
              label: "Total Design RS",
              href: "https://totaldesign.rs/",
            },
            {
              label: "Total Dizajn",
              href: "https://www.xn--80ahjd1a5n.com/total-dizajn",
            },
            {
              label: "Logo Dizajn Showcase",
              href: "https://fr.linkedin.com/showcase/logo-dizajn",
            },
            {
              label: "LinkedIn Service Page",
              href: "https://www.totaldizajn.com/in/linkedin/linkedin-service-page.html",
            },
            {
              label: "Total Design Agency",
              href: "https://www.xn--80agfmikluu.agency/total-design",
            },
            {
              label: "Grafički Dizajn Beograd",
              href: "https://sites.google.com/site/grafickidizajnbeogradsrbija/linkedin",
            },
            {
              label: "Srbija Design",
              href: "https://srbija.design/",
            },
          ],
        },
        {
          title: "SEO & Resources",
          items: [
            {
              label: "SEO Expert Beograd",
              href: "https://vimeopro.com/optimizacijasajta/seo-expert-beograd/",
            },
            {
              label: "SEO Srbija",
              href: "https://sites.google.com/site/seosrbija/",
            },
            {
              label: "SEO & Dizajn",
              href: "https://xn--e1ash.xn--90a3ac/",
            },
            {
              label: "SEO AI Strategist Serbia",
              href: "https://www.xn--c1aagxna.com/seo-ai-strategist-serbia",
            },
            {
              label: "Dizajn Srbija",
              href: "https://www.xn--80abln2amec4s.com/",
            },
            {
              label: "Apparatchik Band",
              href: "https://grokipedia.com/page/Apparatchik_band",
            },
          ],
        },
      ]}
      leftText="© 2026 AI SEO Agency. All rights reserved."
      rightText="Data-driven growth, redefined."
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
