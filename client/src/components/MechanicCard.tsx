import { Star, MapPin, Clock, Shield, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Mechanic {
  id: string;
  name: string;
  photo: string;
  rating: number;
  reviewCount: number;
  distance: string;
  eta: string;
  specialties: string[];
  isVerified: boolean;
  isAvailable: boolean;
  completedJobs: number;
}

interface MechanicCardProps {
  mechanic: Mechanic;
  onSelect: () => void;
  onMessage: () => void;
  onCall: () => void;
}

export default function MechanicCard({
  mechanic,
  onSelect,
  onMessage,
  onCall,
}: MechanicCardProps) {
  return (
    <Card className="hover-elevate" data-testid={`card-mechanic-${mechanic.id}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <div className="relative">
            <Avatar className="h-12 w-12">
              <AvatarImage src={mechanic.photo} alt={mechanic.name} />
              <AvatarFallback>{mechanic.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            {mechanic.isVerified && (
              <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-1">
                <Shield className="h-3 w-3 text-primary-foreground" />
              </div>
            )}
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-base" data-testid={`text-name-${mechanic.id}`}>
                {mechanic.name}
              </h3>
              {mechanic.isAvailable ? (
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  Available
                </Badge>
              ) : (
                <Badge variant="secondary">Busy</Badge>
              )}
            </div>
            
            <div className="flex items-center gap-1 mt-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium" data-testid={`text-rating-${mechanic.id}`}>
                {mechanic.rating}
              </span>
              <span className="text-sm text-muted-foreground" data-testid={`text-reviews-${mechanic.id}`}>
                ({mechanic.reviewCount} reviews)
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span data-testid={`text-distance-${mechanic.id}`}>{mechanic.distance} away</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span data-testid={`text-eta-${mechanic.id}`}>{mechanic.eta} ETA</span>
          </div>
          <div className="text-sm text-muted-foreground">
            <span data-testid={`text-jobs-${mechanic.id}`}>{mechanic.completedJobs} jobs completed</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {mechanic.specialties.map((specialty, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs"
              data-testid={`badge-specialty-${mechanic.id}-${index}`}
            >
              {specialty}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2">
          <Button
            className="flex-1"
            onClick={onSelect}
            disabled={!mechanic.isAvailable}
            data-testid={`button-select-${mechanic.id}`}
          >
            Select Mechanic
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={onMessage}
            data-testid={`button-message-${mechanic.id}`}
          >
            <MessageCircle className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={onCall}
            data-testid={`button-call-${mechanic.id}`}
          >
            <Phone className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}