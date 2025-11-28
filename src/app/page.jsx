import HeroSection from '@/components/sections/HeroSection';
import HeroSubSection from '@/components/sections/HeroSubSection';
import WhyDifferent from '@/components/sections/WhyDifferent';
import VenuesGallery from '@/components/sections/VenuesGallery';
import FeaturedProjects from '@/components/sections/FeaturedProjects';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <HeroSubSection />
      <WhyDifferent />
      <VenuesGallery />
      <FeaturedProjects />
    </div>
  );
}
