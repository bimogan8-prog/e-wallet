
import { User, Transaction, TransactionType, TransactionStatus } from '../types';

export const mockUser: User = {
  id: 'user-001',
  fullName: 'Budi Santoso',
  email: 'budi.s@example.com',
  avatarUrl: 'https://i.pravatar.cc/150?u=budi',
  wallet: {
    id: 'wallet-001',
    userId: 'user-001',
    balance: 500000,
  },
};

export const mockTransactions: Transaction[] = [
  {
    id: 'txn-001',
    amount: 75000,
    type: TransactionType.PAYMENT,
    status: TransactionStatus.SUCCESS,
    timestamp: '2024-07-29T10:30:00Z',
    description: 'Pembayaran Kopi Kenangan',
    isIncoming: false,
  },
  {
    id: 'txn-002',
    amount: 250000,
    type: TransactionType.TOPUP,
    status: TransactionStatus.SUCCESS,
    timestamp: '2024-07-29T08:15:00Z',
    description: 'Top Up dari Bank BCA',
    isIncoming: true,
  },
  {
    id: 'txn-003',
    amount: 125000,
    type: TransactionType.TRANSFER,
    status: TransactionStatus.SUCCESS,
    timestamp: '2024-07-28T19:45:00Z',
    description: 'Transfer ke Siti',
    isIncoming: false,
  },
  {
    id: 'txn-004',
    amount: 50000,
    type: TransactionType.TRANSFER,
    status: TransactionStatus.SUCCESS,
    timestamp: '2024-07-28T14:00:00Z',
    description: 'Terima dari Agus',
    isIncoming: true,
  },
  {
    id: 'txn-005',
    amount: 22500,
    type: TransactionType.PAYMENT,
    status: TransactionStatus.FAILED,
    timestamp: '2024-07-27T12:00:00Z',
    description: 'Pembelian Pulsa (Gagal)',
    isIncoming: false,
  },
];
