import MechanicCard from '../MechanicCard';
import mechanic1 from '@assets/generated_images/Professional_mechanic_portrait_photo_dea65d2d.png';

export default function MechanicCardExample() {
  // TODO: remove mock functionality
  const mockMechanic = {
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
  };

  return (
    <div className="p-4 max-w-md">
      <MechanicCard
        mechanic={mockMechanic}
        onSelect={() => console.log('Mechanic selected')}
        onMessage={() => console.log('Message clicked')}
        onCall={() => console.log('Call clicked')}
      />
    </div>
  );
}