import { useState } from 'react';
import BottomNavigation from '../BottomNavigation';

export default function BottomNavigationExample() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="relative h-20 border rounded-lg overflow-hidden">
      <BottomNavigation
        activeTab={activeTab}
        onTabChange={setActiveTab}
        messageCount={3}
      />
    </div>
  );
}