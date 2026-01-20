
import React, { useState } from 'react';
import { Transaction, User } from './types';
import Header from './components/Header';
import BalanceCard from './components/BalanceCard';
import ActionMenu from './components/ActionMenu';
import TransactionList from './components/TransactionList';
import ArchitectNotes from './components/ArchitectNotes';
import { mockUser, mockTransactions } from './data/mockData';

const App: React.FC = () => {
  const [user] = useState<User>(mockUser);
  const [transactions] = useState<Transaction[]>(mockTransactions);
  const [isBalanceVisible, setIsBalanceVisible] = useState<boolean>(true);

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(prevState => !prevState);
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800">
      <div className="container mx-auto max-w-md p-4">
        <Header user={user} />
        <main>
          <BalanceCard 
            balance={user.wallet.balance} 
            isVisible={isBalanceVisible} 
            onToggleVisibility={toggleBalanceVisibility} 
          />
          <ActionMenu />
          <TransactionList transactions={transactions} />
          <ArchitectNotes />
        </main>
      </div>
    </div>
  );
};

export default App;
