import { User, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

interface UserTypeToggleProps {
  activeType: "customer" | "mechanic";
  onTypeChange: (type: "customer" | "mechanic") => void;
}

export default function UserTypeToggle({ activeType, onTypeChange }: UserTypeToggleProps) {
  return (
    <div className="flex bg-muted rounded-md p-1 gap-1">
      <Button
        variant={activeType === "customer" ? "default" : "ghost"}
        size="sm"
        onClick={() => onTypeChange("customer")}
        className="flex-1 flex items-center gap-2"
        data-testid="button-customer-mode"
      >
        <User className="h-4 w-4" />
        Customer
      </Button>
      <Button
        variant={activeType === "mechanic" ? "default" : "ghost"}
        size="sm"
        onClick={() => onTypeChange("mechanic")}
        className="flex-1 flex items-center gap-2"
        data-testid="button-mechanic-mode"
      >
        <Wrench className="h-4 w-4" />
        Mechanic
      </Button>
    </div>
  );
}