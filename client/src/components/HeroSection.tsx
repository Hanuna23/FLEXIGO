import { ArrowRight, Shield, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import workshopImage from '@assets/generated_images/Professional_automotive_workshop_interior_67233cd3.png';

interface HeroSectionProps {
  onGetStarted: () => void;
  onLearnMore: () => void;
}

export default function HeroSection({ onGetStarted, onLearnMore }: HeroSectionProps) {
  return (
    <div className="relative">
      {/* Hero Image with Overlay */}
      <div className="relative h-96 overflow-hidden rounded-lg">
        <img 
          src={workshopImage} 
          alt="Professional automotive workshop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-2xl px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-hero-title">
              Connect with Trusted Mechanics Instantly
            </h1>
            <p className="text-xl mb-8 text-white/90" data-testid="text-hero-subtitle">
              Get fast, reliable automotive services on-demand. Expert mechanics come to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={onGetStarted}
                className="bg-primary/90 backdrop-blur-sm border border-primary-foreground/20"
                data-testid="button-get-started"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={onLearnMore}
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                data-testid="button-learn-more"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover-elevate" data-testid="card-feature-trusted">
          <CardContent className="p-6 text-center">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Verified Mechanics</h3>
            <p className="text-muted-foreground">
              All mechanics are background-checked and certified professionals
            </p>
          </CardContent>
        </Card>

        <Card className="hover-elevate" data-testid="card-feature-fast">
          <CardContent className="p-6 text-center">
            <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Fast Response</h3>
            <p className="text-muted-foreground">
              Get help within 30 minutes for emergency repairs
            </p>
          </CardContent>
        </Card>

        <Card className="hover-elevate" data-testid="card-feature-location">
          <CardContent className="p-6 text-center">
            <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Mobile Service</h3>
            <p className="text-muted-foreground">
              Mechanics come to your location with all necessary tools
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}