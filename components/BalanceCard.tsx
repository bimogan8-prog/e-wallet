
import React from 'react';
import { Eye, EyeOff } from './icons/EyeIcons';

interface BalanceCardProps {
  balance: number;
  isVisible: boolean;
  onToggleVisibility: () => void;
}

const BalanceCard: React.FC<BalanceCardProps> = ({ balance, isVisible, onToggleVisibility }) => {
  const formattedBalance = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(balance);

  return (
    <div className="bg-gradient-to-br from-blue-900 to-purple-800 text-white rounded-2xl p-6 mb-6 shadow-lg transition-all duration-300 transform hover:scale-105">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-light opacity-80">Total Saldo</p>
          <div className="flex items-center space-x-2 mt-1">
            <h2 className="text-4xl font-bold tracking-tight">
              {isVisible ? formattedBalance : 'Rp •••••••'}
            </h2>
          </div>
        </div>
        <button onClick={onToggleVisibility} className="focus:outline-none p-2 rounded-full hover:bg-white/10">
          {isVisible ? <EyeOff className="w-6 h-6" /> : <Eye className="w-6 h-6" />}
        </button>
      </div>
    </div>
  );
};

export default BalanceCard;
