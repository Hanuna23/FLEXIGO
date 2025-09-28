import { useState } from 'react';
import UserTypeToggle from '../UserTypeToggle';

export default function UserTypeToggleExample() {
  const [activeType, setActiveType] = useState<"customer" | "mechanic">("customer");

  return (
    <div className="p-4">
      <UserTypeToggle
        activeType={activeType}
        onTypeChange={setActiveType}
      />
    </div>
  );
}