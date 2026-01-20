
import React from 'react';
import { Scan, Upload, Send, History } from './icons/ActionIcons';

const ActionButton: React.FC<{ icon: React.ReactNode; label: string; prominent?: boolean }> = ({ icon, label, prominent = false }) => {
  const baseClasses = "flex flex-col items-center justify-center space-y-2 p-3 rounded-2xl transition-transform transform hover:-translate-y-1";
  const prominentClasses = "bg-blue-600 text-white shadow-lg hover:bg-blue-700";
  const defaultClasses = "bg-white text-gray-700 shadow-sm";

  return (
    <button className={`${baseClasses} ${prominent ? prominentClasses : defaultClasses}`}>
      <div className={`${prominent ? '' : 'text-blue-600'}`}>{icon}</div>
      <span className={`text-xs font-semibold ${prominent ? '' : 'text-gray-600'}`}>{label}</span>
    </button>
  );
};

const ActionMenu: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mb-8">
      <ActionButton icon={<Send className="w-6 h-6" />} label="Transfer" />
      <ActionButton icon={<Upload className="w-6 h-6" />} label="Top Up" />
      <ActionButton icon={<Scan className="w-8 h-8" />} label="Scan QR" prominent />
      <ActionButton icon={<History className="w-6 h-6" />} label="Riwayat" />
    </div>
  );
};

export default ActionMenu;
