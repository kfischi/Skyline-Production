import HeroSection from '@/components/sections/HeroSection';
import WhyDifferent from '@/components/sections/WhyDifferent';
import FeaturedProjects from '@/components/sections/FeaturedProjects';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <WhyDifferent />
      <FeaturedProjects />
    </div>
  );
}
