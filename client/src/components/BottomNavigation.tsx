import { Home, Search, MessageCircle, User, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  messageCount?: number;
}

export default function BottomNavigation({ 
  activeTab, 
  onTabChange, 
  messageCount = 0 
}: BottomNavigationProps) {
  const tabs = [
    { id: "home", icon: Home, label: "Home" },
    { id: "search", icon: Search, label: "Search" },
    { id: "messages", icon: MessageCircle, label: "Messages" },
    { id: "profile", icon: User, label: "Profile" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50">
      <div className="flex justify-around items-center py-2 px-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <Button
              key={tab.id}
              variant="ghost"
              size="sm"
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center gap-1 h-auto py-2 px-3 relative ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
              data-testid={`button-nav-${tab.id}`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs">{tab.label}</span>
              
              {tab.id === "messages" && messageCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs">
                  {messageCount}
                </Badge>
              )}
            </Button>
          );
        })}
      </div>
    </nav>
  );
}