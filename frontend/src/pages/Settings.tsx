
import React from 'react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { Card } from '../components/common/Card';
import { Sliders } from 'lucide-react';

const Settings = () => {
  return (
    <DashboardLayout title="Settings">
      <div className="max-w-2xl mx-auto space-y-6">
        <Card className="p-8 text-center bg-white border border-gray-100 shadow-sm">
          <div className="mx-auto w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
            <Sliders className="h-8 w-8 text-electric-blue" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Settings Coming Soon</h2>
          <p className="text-gray-500">
            Customize your Vera experience properly in the next update.
          </p>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
