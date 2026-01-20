
import React from 'react';

const ArchitectNotes: React.FC = () => {
  return (
    <div className="mt-8 p-6 bg-gray-800 text-gray-300 rounded-2xl shadow-lg">
      <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-600 pb-2">Catatan Arsitek & Keamanan</h3>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-blue-400 mb-2">Alur QR Code yang Aman</h4>
        <p className="text-sm font-mono leading-relaxed">
          String di dalam QR code BUKAN HANYA ID user. Untuk keamanan, kita generate sebuah <strong className="text-yellow-400">JWT (JSON Web Token)</strong> atau token unik sekali pakai yang disimpan di tabel `Payment_QRs`.
          <br /><br />
          <strong className="text-green-400">Alur Generate (Merchant/Penerima):</strong>
          <br />
          1. Merchant request QR ke backend dengan `amount` & `description`.
          <br />
          2. Backend membuat entri di `Payment_QRs` dengan status `PENDING`, `expiration_time` (e.g., 5 menit), dan `unique_token`.
          <br />
          3. Backend men-generate QR code yang berisi `unique_token` tersebut.
          <br /><br />
          <strong className="text-green-400">Alur Scan & Pay (Pengirim):</strong>
          <br />
          1. User scan QR, frontend mengirim `unique_token` ke backend.
          <br />
          2. Backend memvalidasi token: apakah ada, belum expired, dan belum digunakan (`is_used=false`).
          <br />
          3. Jika valid, backend mengambil detail transaksi (amount, receiver_id) dari tabel `Payment_QRs`.
          <br />
          4. Backend memulai **DATABASE TRANSACTION** untuk transfer dana.
          <br />
          5. Jika transfer `COMMIT` (sukses), status token di `Payment_QRs` diubah menjadi `is_used=true`. Jika `ROLLBACK`, token tetap bisa digunakan sampai expired.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-blue-400 mb-2">Security Checklist</h4>
        <ul className="list-disc list-inside text-sm font-mono space-y-2">
          <li><strong className="text-yellow-400">Hashing:</strong> Password dan PIN transaksi WAJIB di-hash menggunakan `bcrypt` atau `argon2`. Jangan simpan plain text.</li>
          <li><strong className="text-yellow-400">Input Validation:</strong> Selalu validasi semua input dari user (amount, user ID) di backend untuk mencegah SQL Injection & anomali data.</li>
          <li><strong className="text-yellow-400">Atomic Transactions:</strong> Semua operasi keuangan (kurangi saldo pengirim, tambah saldo penerima) harus dalam satu blok transaksi database untuk menjamin konsistensi data (ACID).</li>
          <li><strong className="text-yellow-400">Rate Limiting:</strong> Batasi jumlah percobaan login dan input PIN untuk mencegah brute-force attack.</li>
          <li><strong className="text-yellow-400">HTTPS:</strong> Gunakan HTTPS di semua komunikasi client-server untuk enkripsi data in-transit.</li>
          <li><strong className="text-yellow-400">JWT Authentication:</strong> Gunakan JWT untuk otentikasi sesi user, dengan masa berlaku yang singkat dan mekanisme refresh token.</li>
        </ul>
      </div>
    </div>
  );
};

export default ArchitectNotes;
