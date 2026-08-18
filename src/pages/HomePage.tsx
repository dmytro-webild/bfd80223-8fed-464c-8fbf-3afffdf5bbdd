import AboutFeaturesSplit from '@/components/sections/about/AboutFeaturesSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeaturesDetailedSteps from '@/components/sections/features/FeaturesDetailedSteps';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroCenteredLogos from '@/components/sections/hero/HeroCenteredLogos';
import MetricsIconCards from '@/components/sections/metrics/MetricsIconCards';
import PricingSplitCards from '@/components/sections/pricing/PricingSplitCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TestimonialTrustCard from '@/components/sections/testimonial/TestimonialTrustCard';
import { Clock, DollarSign, Shield, Star, TrendingUp, Zap } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroCenteredLogos
      avatarsSrc={[
        "http://img.b2bpic.net/free-photo/attractive-armenian-guy-with-hat-yellow-black-wall_181624-32940.jpg",
        "http://img.b2bpic.net/free-photo/smiley-businesswoman-posing-outdoors_23-2148767054.jpg",
        "http://img.b2bpic.net/free-photo/portrait-smiling-indian-businessman-office_1262-3271.jpg",
        "http://img.b2bpic.net/free-photo/inspiring-new-boss_1098-93.jpg",
      ]}
      avatarText="Trusted by 500+ Enterprises"
      title="AI-Powered SEO That Scales Your Revenue"
      description="Enterprise marketing teams trust us to automate strategy, accelerate rankings, and deliver measurable growth. Proven results for Fortune 500 and scaling startups alike."
      primaryButton={{
        text: "Schedule Your Strategy Call",
        href: "#contact",
      }}
      secondaryButton={{
        text: "View Case Studies",
        href: "#about",
      }}
      names={[
        "Google",
        "Microsoft",
        "Salesforce",
        "Hubspot",
        "Shopify",
        "Stripe",
        "Amazon",
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/3d-render-modern-technology-background-with-plexus-design_1048-14928.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="social-proof" data-section="social-proof">
    <SectionErrorBoundary name="social-proof">
          <SocialProofMarquee
      tag="Trusted By Industry Leaders"
      title="Driving Results For The World's Best Brands"
      description="We partner with companies that demand precision, scale, and intelligence in their marketing stack."
      names={[
        "Google",
        "Amazon",
        "Microsoft",
        "Stripe",
        "Salesforce",
        "Shopify",
        "Hubspot",
        "Intel",
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutFeaturesSplit
      tag="About Our Agency"
      title="Enterprise Growth Through Intelligent AI"
      description="We bridge the gap between complex data and actionable marketing results. Our AI platform processes billions of data points to optimize your SEO performance in real-time."
      items={[
        {
          icon: Zap,
          title: "Automated Strategy",
          description: "AI-driven execution for rapid scalability.",
        },
        {
          icon: Shield,
          title: "Data Transparency",
          description: "Real-time reporting on ROI and traffic metrics.",
        },
        {
          icon: Star,
          title: "Enterprise Focus",
          description: "Built for complex multi-market campaigns.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/business-data-analytics_23-2151957121.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features-bento" data-section="features-bento">
    <SectionErrorBoundary name="features-bento">
          <FeaturesRevealCardsBento
      tag="Core Capabilities"
      title="An Intelligence-First Marketing Engine"
      description="Seven pillars of performance that redefine what's possible for your organic search growth."
      items={[
        {
          title: "Predictive SEO",
          description: "Forecast traffic patterns before they happen.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/programming-background-with-html_23-2150038862.jpg",
        },
        {
          title: "Automated Link Building",
          description: "High-quality acquisition powered by AI.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-african-american-entrepreneur-analyzing-company-profit_482257-20207.jpg",
        },
        {
          title: "Content Intelligence",
          description: "Generate high-converting search content.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-sitting-bed-with-laptop-phone_23-2148751554.jpg",
        },
        {
          title: "Competitive Monitoring",
          description: "Real-time tracking of search rivals.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/data-center-computer-scientist-wheelchair-using-ai-node-tree-software_482257-126137.jpg",
        },
        {
          title: "Tech SEO Audits",
          description: "Automated fixes for technical debt.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/business-graphs-figures-laptop-left-open-desk-empty-office_482257-84546.jpg",
        },
        {
          title: "ROI Attribution",
          description: "Direct tie-back to business revenue.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/businesswoman-looking-company-charts_482257-124401.jpg",
        },
        {
          title: "Global Scaling",
          description: "Automated multi-language localization.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/programmer-developing-software-large-computer-screen_53876-101149.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="process" data-section="process">
    <SectionErrorBoundary name="process">
          <FeaturesDetailedSteps
      tag="Our Methodology"
      title="Scaling Organic Traffic In 3 Steps"
      description="A proven, data-centric process designed for enterprise-grade complexity."
      steps={[
        {
          tag: "Phase 01",
          title: "Data Discovery",
          subtitle: "Deep analysis of your current stack.",
          description: "Uncovering hidden opportunities with proprietary AI mapping.",
          imageSrc: "http://img.b2bpic.net/free-photo/5g-connection-technology-background-with-man-using-futuristic-virtual-screen-digital-remix_53876-108511.jpg",
        },
        {
          tag: "Phase 02",
          title: "Strategy Execution",
          subtitle: "Precision-targeted optimizations.",
          description: "Implementing data-backed adjustments across your entire digital footprint.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-computer-peripherals-server-room-desk_482257-118044.jpg",
        },
        {
          tag: "Phase 03",
          title: "Growth Acceleration",
          subtitle: "Ongoing intelligent refinements.",
          description: "Continuous monitoring and iterative improvements for sustained growth.",
          imageSrc: "http://img.b2bpic.net/free-photo/arrangement-with-colorful-shapes_23-2148879428.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsIconCards
      tag="Results Driven"
      title="Proven Performance Metrics"
      description="The numbers don't lie. Our partners see immediate, scalable returns on their organic investments."
      metrics={[
        {
          icon: TrendingUp,
          title: "Average Traffic Increase",
          value: "145%",
        },
        {
          icon: DollarSign,
          title: "ROI Improvement",
          value: "210%",
        },
        {
          icon: Clock,
          title: "Strategy Automation",
          value: "80%",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="pricing" data-section="pricing">
    <SectionErrorBoundary name="pricing">
          <PricingSplitCards
      tag="Transparent Pricing"
      title="Designed For Growth at Any Scale"
      description="Clear tiers for teams that require enterprise reliability and high-end results."
      plans={[
        {
          tag: "Growth",
          price: "$4,900",
          period: "/mo",
          description: "Perfect for growing midmarket companies.",
          primaryButton: {
            text: "Start Growth",
            href: "#contact",
          },
          featuresTitle: "Included Features",
          features: [
            "Advanced SEO Audit",
            "AI Content Strategy",
            "Weekly Reporting",
            "Dedicated Support",
          ],
        },
        {
          tag: "Enterprise",
          price: "$12,500",
          period: "/mo",
          description: "For large organizations with complex needs.",
          primaryButton: {
            text: "Contact Sales",
            href: "#contact",
          },
          featuresTitle: "Included Features",
          features: [
            "Full AI Stack Access",
            "Multi-Market Scaling",
            "Custom API Integration",
            "24/7 Priority Support",
          ],
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialTrustCard
      quote="This AI-driven strategy has transformed our organic search from a secondary channel into a core revenue driver. Absolute game changer."
      rating={5}
      author="Sarah Miller, CMO at GrowthCo"
      avatars={[
        {
          name: "Sarah Miller",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-afro-businessman-wearing-shirt-black-suit-glasses-looking-front-while-standing-beige-wall_158595-7638.jpg",
        },
        {
          name: "David Kim",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-man-white-long-sleeve-tee-portrait_53876-97108.jpg",
        },
        {
          name: "Emily Rose",
          imageSrc: "http://img.b2bpic.net/free-photo/business-woman-banner-concept-with-copy-space_23-2149601533.jpg",
        },
        {
          name: "John Doe",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-man-suit-looking-camera_23-2148112202.jpg",
        },
        {
          name: "Jane Smith",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-business-woman-posing_23-2149457762.jpg",
        },
        {
          name: "Mike Ross",
          imageSrc: "http://img.b2bpic.net/free-photo/executive-assistant-multinational-company-work-big-business-project_482257-113916.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSplitMedia
      tag="Common Questions"
      title="Everything You Need To Know"
      description="Get clear, concise answers to your questions about AI-driven SEO scaling."
      items={[
        {
          question: "How quickly do you see results?",
          answer: "Clients typically see initial growth signals within 30-60 days due to our AI-accelerated indexing techniques.",
        },
        {
          question: "Is this a whitelabel solution?",
          answer: "Yes, we work with agencies and internal marketing teams as a seamless, high-performance extension.",
        },
        {
          question: "What tools do you integrate with?",
          answer: "We integrate with all major analytics, CRM, and marketing automation platforms currently used by enterprise firms.",
        },
        {
          question: "What industries do you serve?",
          answer: "We specialize in B2B SaaS, E-commerce, Finance, and complex enterprise organizations where scaling organic traffic is paramount.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/dynamic-data-visualization-3d_23-2151904326.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Get Started"
      text="Ready to scale your organic performance? Let's build your AI growth roadmap today."
      primaryButton={{
        text: "Schedule Your Strategy Call",
        href: "#",
      }}
      secondaryButton={{
        text: "View Our Methodology",
        href: "#",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
