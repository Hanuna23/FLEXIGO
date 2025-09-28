import { useState } from "react";
import { MapPin, Car, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface ServiceRequestFormProps {
  onSubmit: (data: any) => void;
  onCancel: () => void;
}

export default function ServiceRequestForm({ onSubmit, onCancel }: ServiceRequestFormProps) {
  const [formData, setFormData] = useState({
    vehicleYear: "",
    vehicleMake: "",
    vehicleModel: "",
    serviceType: "",
    description: "",
    location: "",
    urgency: "medium",
  });

  const serviceTypes = [
    "Brake Repair",
    "Oil Change", 
    "Battery Replacement",
    "Tire Repair/Replacement",
    "Engine Diagnostics",
    "Transmission Service",
    "AC/Heating Repair",
    "Other",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    console.log('Service request submitted:', formData);
  };

  return (
    <Card className="w-full max-w-md mx-auto" data-testid="form-service-request">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wrench className="h-5 w-5" />
          Request Service
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Vehicle Information */}
          <div className="space-y-3">
            <Label className="text-sm font-medium flex items-center gap-2">
              <Car className="h-4 w-4" />
              Vehicle Information
            </Label>
            
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label htmlFor="year" className="text-xs text-muted-foreground">Year</Label>
                <Input
                  id="year"
                  placeholder="2020"
                  value={formData.vehicleYear}
                  onChange={(e) => setFormData(prev => ({ ...prev, vehicleYear: e.target.value }))}
                  data-testid="input-vehicle-year"
                />
              </div>
              <div>
                <Label htmlFor="make" className="text-xs text-muted-foreground">Make</Label>
                <Input
                  id="make"
                  placeholder="Honda"
                  value={formData.vehicleMake}
                  onChange={(e) => setFormData(prev => ({ ...prev, vehicleMake: e.target.value }))}
                  data-testid="input-vehicle-make"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="model" className="text-xs text-muted-foreground">Model</Label>
              <Input
                id="model"
                placeholder="Civic"
                value={formData.vehicleModel}
                onChange={(e) => setFormData(prev => ({ ...prev, vehicleModel: e.target.value }))}
                data-testid="input-vehicle-model"
              />
            </div>
          </div>

          {/* Service Type */}
          <div>
            <Label className="text-sm font-medium">Service Needed</Label>
            <Select value={formData.serviceType} onValueChange={(value) => setFormData(prev => ({ ...prev, serviceType: value }))}>
              <SelectTrigger data-testid="select-service-type">
                <SelectValue placeholder="Select service type" />
              </SelectTrigger>
              <SelectContent>
                {serviceTypes.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Description */}
          <div>
            <Label htmlFor="description" className="text-sm font-medium">Problem Description</Label>
            <Textarea
              id="description"
              placeholder="Describe the issue you're experiencing..."
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className="min-h-20"
              data-testid="textarea-description"
            />
          </div>

          {/* Location */}
          <div>
            <Label htmlFor="location" className="text-sm font-medium flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Service Location
            </Label>
            <Input
              id="location"
              placeholder="123 Main St, Seattle, WA"
              value={formData.location}
              onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
              data-testid="input-location"
            />
          </div>

          {/* Urgency */}
          <div>
            <Label className="text-sm font-medium">Urgency Level</Label>
            <div className="flex gap-2 mt-2">
              {[
                { value: "low", label: "Low", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
                { value: "medium", label: "Medium", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" },
                { value: "high", label: "High", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" },
              ].map((urgency) => (
                <Badge
                  key={urgency.value}
                  className={`cursor-pointer hover-elevate ${
                    formData.urgency === urgency.value ? urgency.color : "bg-muted text-muted-foreground"
                  }`}
                  onClick={() => setFormData(prev => ({ ...prev, urgency: urgency.value }))}
                  data-testid={`badge-urgency-${urgency.value}`}
                >
                  {urgency.label}
                </Badge>
              ))}
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={onCancel}
              data-testid="button-cancel"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1"
              data-testid="button-submit"
            >
              Request Service
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}