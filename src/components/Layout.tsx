import FooterBasic from '@/components/sections/footer/FooterBasic';
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
  }
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
        <FooterBasic
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
          title: "Legal",
          items: [
            {
              label: "Privacy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
            {
              label: "Cookies",
              href: "#",
            },
          ],
        },
      ]}
      leftText="© 2024 AI SEO Agency. All rights reserved."
      rightText="Data-driven growth, redefined."
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
