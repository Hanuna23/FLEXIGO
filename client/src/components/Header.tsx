import { MapPin, Bell, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeaderProps {
  userType: "customer" | "mechanic";
  location: string;
  notifications: number;
  onLocationClick: () => void;
  onNotificationClick: () => void;
  onMenuClick: () => void;
  onProfileClick: () => void;
}

export default function Header({
  userType,
  location,
  notifications,
  onLocationClick,
  onNotificationClick,
  onMenuClick,
  onProfileClick,
}: HeaderProps) {
  return (
    <header className="flex items-center justify-between p-4 border-b bg-background">
      <div className="flex items-center gap-3">
        <Button
          size="icon"
          variant="ghost"
          onClick={onMenuClick}
          data-testid="button-menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <div className="flex flex-col">
          <span className="text-sm font-medium">
            {userType === "customer" ? "Find Mechanics" : "My Services"}
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={onLocationClick}
            className="flex items-center gap-1 p-0 h-auto text-muted-foreground hover:text-foreground"
            data-testid="button-location"
          >
            <MapPin className="h-3 w-3" />
            <span className="text-xs">{location}</span>
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button
          size="icon"
          variant="ghost"
          onClick={onNotificationClick}
          className="relative"
          data-testid="button-notifications"
        >
          <Bell className="h-5 w-5" />
          {notifications > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs">
              {notifications}
            </Badge>
          )}
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={onProfileClick}
          data-testid="button-profile"
        >
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}