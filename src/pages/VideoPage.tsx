import HeroVideoScroll from "@/components/sections/hero/HeroVideoScroll";

export default function VideoPage() {
  return (
    <>
      <div data-webild-section="HeroVideoScroll"><HeroVideoScroll
        videoSrc="https://player.vimeo.com/video/1218481527?h=0bdceadd5a"
        tag="AI Video SEO Strategy"
        title="Scale Organic Reach with AI Video Search"
        description="Discover how enterprise SEO teams leverage AI-driven video optimization to capture top search rankings and accelerate organic growth."
        primaryButton={{"text":"Get Started","href":"#contact"}}
        secondaryButton={{"text":"View Features","href":"#features"}}
        bottomText="Trusted by 500+ marketing leaders and technical SEOs"
        avatarsSrc={["https://img.freepik.com/free-photo/portrait-smiling-executive-businessman_23-2148123214.jpg","https://img.freepik.com/free-photo/confident-businesswoman-standing-modern-office_23-2148123220.jpg","https://img.freepik.com/free-photo/cheerful-young-man-position-office_23-2148123230.jpg"]}
        avatarsLabel="2,500+ SEO leaders active"
        textAnimation="slide-up"
      /></div>
    </>
  );
}
