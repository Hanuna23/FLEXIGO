import HeroSection from '../HeroSection';

export default function HeroSectionExample() {
  return (
    <div className="p-6">
      <HeroSection
        onGetStarted={() => console.log('Get started clicked')}
        onLearnMore={() => console.log('Learn more clicked')}
      />
    </div>
  );
}