import ServiceRequestCard from '../ServiceRequestCard';

export default function ServiceRequestCardExample() {
  // TODO: remove mock functionality
  const mockRequest = {
    id: "req-001",
    title: "Brake Pad Replacement",
    description: "Front brake pads are squeaking and need immediate replacement. Vehicle pulls to the right when braking.",
    location: "Downtown Seattle, WA",
    estimatedCost: "$150 - $300",
    urgency: "high" as const,
    timePosted: "2 hours ago",
    vehicleInfo: "2018 Honda Civic",
    status: "pending" as const,
  };

  return (
    <div className="p-4 max-w-md">
      <ServiceRequestCard
        request={mockRequest}
        viewType="mechanic"
        onAccept={() => console.log('Job accepted')}
        onMessage={() => console.log('Message clicked')}
        onViewDetails={() => console.log('Details clicked')}
      />
    </div>
  );
}