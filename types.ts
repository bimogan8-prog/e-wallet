
// Mirip dengan skema SQL 'Users'
export interface User {
  id: string;
  fullName: string;
  email: string;
  avatarUrl: string;
  wallet: Wallet; // Relasi 1-on-1
}

// Mirip dengan skema SQL 'Wallets'
export interface Wallet {
  id: string;
  userId: string;
  balance: number; // Constraint CHECK (balance >= 0) direpresentasikan di logic backend
}

// Enum untuk tipe transaksi, sesuai skema 'Transactions'
export enum TransactionType {
  TOPUP = 'TOPUP',
  TRANSFER = 'TRANSFER',
  PAYMENT = 'PAYMENT',
}

// Enum untuk status transaksi, sesuai skema 'Transactions'
export enum TransactionStatus {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
}

// Mirip dengan skema SQL 'Transactions'
export interface Transaction {
  id: string;
  amount: number;
  type: TransactionType;
  status: TransactionStatus;
  timestamp: string;
  description: string;
  isIncoming: boolean; // Helper untuk UI, menentukan apakah uang masuk atau keluar
}
