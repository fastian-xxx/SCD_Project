import React from 'react';
import DarkModeToggle from '../components/DarkModeToggle';

export default function ProfileSettings() {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Profile Settings</h1>
      <DarkModeToggle />
      {/* Additional settings go here */}
    </div>
  );
}
