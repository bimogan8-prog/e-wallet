
import React from 'react';
import { Transaction, TransactionStatus } from '../types';
import { ArrowUpRight, ArrowDownLeft, XCircle } from './icons/TransactionIcons';

const TransactionItem: React.FC<{ tx: Transaction }> = ({ tx }) => {
  const isSuccess = tx.status === TransactionStatus.SUCCESS;
  const amountColor = tx.isIncoming ? 'text-green-600' : 'text-red-600';
  const sign = tx.isIncoming ? '+' : '-';

  const formattedAmount = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(tx.amount);

  return (
    <li className="flex items-center justify-between py-4 border-b border-gray-200 last:border-b-0">
      <div className="flex items-center space-x-4">
        <div className={`p-2 rounded-full ${tx.isIncoming ? 'bg-green-100' : 'bg-red-100'}`}>
          {tx.status === TransactionStatus.FAILED ? (
            <XCircle className="w-6 h-6 text-gray-500" />
          ) : tx.isIncoming ? (
            <ArrowDownLeft className="w-6 h-6 text-green-600" />
          ) : (
            <ArrowUpRight className="w-6 h-6 text-red-600" />
          )}
        </div>
        <div>
          <p className="font-semibold text-gray-800">{tx.description}</p>
          <p className={`text-sm ${isSuccess ? 'text-gray-500' : 'text-yellow-600'}`}>
            {new Date(tx.timestamp).toLocaleDateString('id-ID', { day: 'numeric', month: 'long' })}
            {tx.status !== TransactionStatus.SUCCESS && ` - ${tx.status}`}
          </p>
        </div>
      </div>
      <p className={`font-bold ${!isSuccess && 'line-through text-gray-400'} ${amountColor}`}>
        {sign} {formattedAmount}
      </p>
    </li>
  );
};


const TransactionList: React.FC<{ transactions: Transaction[] }> = ({ transactions }) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 mb-2 px-2">Transaksi Terakhir</h3>
      <ul>
        {transactions.map(tx => (
          <TransactionItem key={tx.id} tx={tx} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
