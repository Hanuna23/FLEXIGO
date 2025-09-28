import { Clock, MapPin, DollarSign, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ServiceRequest {
  id: string;
  title: string;
  description: string;
  location: string;
  estimatedCost: string;
  urgency: "low" | "medium" | "high";
  timePosted: string;
  vehicleInfo: string;
  status: "pending" | "accepted" | "in-progress" | "completed";
}

interface ServiceRequestCardProps {
  request: ServiceRequest;
  viewType: "customer" | "mechanic";
  onAccept?: () => void;
  onMessage: () => void;
  onViewDetails: () => void;
}

export default function ServiceRequestCard({
  request,
  viewType,
  onAccept,
  onMessage,
  onViewDetails,
}: ServiceRequestCardProps) {
  const urgencyColors = {
    low: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    high: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  };

  return (
    <Card className="hover-elevate" data-testid={`card-service-request-${request.id}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-base" data-testid={`text-title-${request.id}`}>
              {request.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1" data-testid={`text-vehicle-${request.id}`}>
              {request.vehicleInfo}
            </p>
          </div>
          <Badge className={urgencyColors[request.urgency]} data-testid={`badge-urgency-${request.id}`}>
            {request.urgency}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-sm text-foreground mb-4" data-testid={`text-description-${request.id}`}>
          {request.description}
        </p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span data-testid={`text-location-${request.id}`}>{request.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <DollarSign className="h-4 w-4" />
            <span data-testid={`text-cost-${request.id}`}>{request.estimatedCost}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span data-testid={`text-time-${request.id}`}>{request.timePosted}</span>
          </div>
        </div>

        <div className="flex gap-2">
          {viewType === "mechanic" && onAccept && request.status === "pending" && (
            <Button 
              className="flex-1" 
              onClick={onAccept}
              data-testid={`button-accept-${request.id}`}
            >
              Accept Job
            </Button>
          )}
          <Button
            variant="outline"
            onClick={onMessage}
            className="flex items-center gap-2"
            data-testid={`button-message-${request.id}`}
          >
            <MessageCircle className="h-4 w-4" />
            Message
          </Button>
          <Button
            variant="outline"
            onClick={onViewDetails}
            data-testid={`button-details-${request.id}`}
          >
            Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}