import { useState } from "react";
import { Plus, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import UserTypeToggle from "@/components/UserTypeToggle";
import ServiceRequestCard from "@/components/ServiceRequestCard";
import MechanicCard from "@/components/MechanicCard";
import ServiceRequestForm from "@/components/ServiceRequestForm";
import HeroSection from "@/components/HeroSection";
import BottomNavigation from "@/components/BottomNavigation";
import ThemeToggle from "@/components/ThemeToggle";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import mechanic1 from '@assets/generated_images/Professional_mechanic_portrait_photo_dea65d2d.png';
import mechanic2 from '@assets/generated_images/Female_mechanic_professional_portrait_504001e8.png';

export default function Home() {
  const [userType, setUserType] = useState<"customer" | "mechanic">("customer");
  const [activeTab, setActiveTab] = useState("home");
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // TODO: remove mock functionality
  const mockRequests = [
    {
      id: "req-001",
      title: "Brake Pad Replacement",
      description: "Front brake pads are squeaking and need immediate replacement. Vehicle pulls to the right when braking.",
      location: "Downtown Seattle, WA",
      estimatedCost: "$150 - $300",
      urgency: "high" as const,
      timePosted: "2 hours ago",
      vehicleInfo: "2018 Honda Civic",
      status: "pending" as const,
    },
    {
      id: "req-002", 
      title: "Oil Change Service",
      description: "Regular maintenance oil change needed. Vehicle has 5,000 miles on current oil.",
      location: "Capitol Hill, Seattle",
      estimatedCost: "$50 - $80",
      urgency: "low" as const,
      timePosted: "4 hours ago",
      vehicleInfo: "2020 Toyota Camry",
      status: "pending" as const,
    },
  ];

  const mockMechanics = [
    {
      id: "mech-001",
      name: "Mike Johnson",
      photo: mechanic1,
      rating: 4.8,
      reviewCount: 127,
      distance: "2.3 miles",
      eta: "15-20 min",
      specialties: ["Brakes", "Engine", "Transmission"],
      isVerified: true,
      isAvailable: true,
      completedJobs: 145,
    },
    {
      id: "mech-002",
      name: "Sarah Martinez",
      photo: mechanic2,
      rating: 4.9,
      reviewCount: 203,
      distance: "1.8 miles", 
      eta: "10-15 min",
      specialties: ["Electrical", "AC/Heating", "Diagnostics"],
      isVerified: true,
      isAvailable: true,
      completedJobs: 278,
    },
  ];

  const handleServiceRequest = (data: any) => {
    console.log('Service request submitted:', data);
    setShowRequestForm(false);
    // TODO: Handle actual service request submission
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <Header
        userType={userType}
        location="Seattle, WA"
        notifications={3}
        onLocationClick={() => console.log('Location clicked')}
        onNotificationClick={() => console.log('Notifications clicked')}
        onMenuClick={() => console.log('Menu clicked')}
        onProfileClick={() => console.log('Profile clicked')}
      />

      {/* Main Content */}
      <div className="px-4 py-6 space-y-6">
        {/* Hero Section (only show when no search query) */}
        {!searchQuery && (
          <HeroSection
            onGetStarted={() => setShowRequestForm(true)}
            onLearnMore={() => console.log('Learn more clicked')}
          />
        )}

        {/* User Type Toggle & Theme Toggle */}
        <div className="flex items-center justify-between">
          <UserTypeToggle activeType={userType} onTypeChange={setUserType} />
          <ThemeToggle />
        </div>

        {/* Search & Filter */}
        <div className="flex gap-3">
          <div className="flex-1">
            <Input
              placeholder={
                userType === "customer" 
                  ? "Search for mechanics or services..." 
                  : "Search service requests..."
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-testid="input-search"
            />
          </div>
          <Button variant="outline" size="icon" data-testid="button-filter">
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        {/* Customer View */}
        {userType === "customer" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Available Mechanics</h2>
              <Button onClick={() => setShowRequestForm(true)} data-testid="button-request-service">
                <Plus className="h-4 w-4 mr-2" />
                Request Service
              </Button>
            </div>
            
            <div className="space-y-4">
              {mockMechanics.map((mechanic) => (
                <MechanicCard
                  key={mechanic.id}
                  mechanic={mechanic}
                  onSelect={() => console.log('Mechanic selected:', mechanic.name)}
                  onMessage={() => console.log('Message mechanic:', mechanic.name)}
                  onCall={() => console.log('Call mechanic:', mechanic.name)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Mechanic View */}
        {userType === "mechanic" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Available Jobs</h2>
              <Button variant="outline" data-testid="button-manage-availability">
                Manage Availability
              </Button>
            </div>
            
            <div className="space-y-4">
              {mockRequests.map((request) => (
                <ServiceRequestCard
                  key={request.id}
                  request={request}
                  viewType="mechanic"
                  onAccept={() => console.log('Job accepted:', request.id)}
                  onMessage={() => console.log('Message customer:', request.id)}
                  onViewDetails={() => console.log('View details:', request.id)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Service Request Form Modal */}
      <Dialog open={showRequestForm} onOpenChange={setShowRequestForm}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Request Automotive Service</DialogTitle>
          </DialogHeader>
          <ServiceRequestForm
            onSubmit={handleServiceRequest}
            onCancel={() => setShowRequestForm(false)}
          />
        </DialogContent>
      </Dialog>

      {/* Bottom Navigation */}
      <BottomNavigation
        activeTab={activeTab}
        onTabChange={setActiveTab}
        messageCount={2}
      />
    </div>
  );
}