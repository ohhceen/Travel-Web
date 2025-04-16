# Travel-Web
# ✈️ Travel Booking Website

Ini adalah proyek **Travel Booking Website** yang dibangun menggunakan **Next.js** dan **Tailwind CSS**. Proyek ini terdiri dari komponen-komponen modular dengan arsitektur berbasis komponen untuk pengembangan yang efisien dan mudah dikelola.

## 🔧 Teknologi yang Digunakan

- [Next.js](https://nextjs.org/) – Framework React untuk pengembangan aplikasi web.
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework untuk styling cepat dan konsisten.
- [TypeScript](https://www.typescriptlang.org/) – Superset JavaScript untuk menambahkan type safety.

## 📁 Struktur Folder

Semua komponen disimpan di folder `components/`.

### ✨ Komponen Utama

| Komponen | Deskripsi |
|----------|-----------|
| `HeroSection.tsx` | Bagian utama landing page dengan headline dan call-to-action. Termasuk `PlayDemo.tsx` untuk menampilkan video demo atau tur virtual. |
| `Navbar.tsx` | Navigasi utama situs. |
| `Footer.tsx`, `FooterLinks.tsx` | Footer dengan link navigasi tambahan. |
| `Button.tsx` | Komponen tombol reusable. |

### 🧭 Fitur Booking

| Komponen | Deskripsi |
|----------|-----------|
| `BookingSection.tsx` | Bagian pemesanan utama. Menggabungkan `BookingSteps.tsx` dan `OnGoingTrip.tsx` untuk menampilkan alur pemesanan serta perjalanan yang sedang berlangsung. |
| `BookingSteps.tsx` | Langkah-langkah pemesanan yang mudah dipahami. |
| `OnGoingTrip.tsx` | Menampilkan perjalanan yang sedang berlangsung (dalam `BookingSection`). |

### 🌍 Eksplorasi Destinasi

| Komponen | Deskripsi |
|----------|-----------|
| `DestinationSection.tsx` | Menampilkan kumpulan destinasi populer. |
| `DestinationsCard.tsx` | Kartu individual untuk tiap destinasi. |

### 🧳 Layanan

| Komponen | Deskripsi |
|----------|-----------|
| `ServiceSection.tsx` | Penjelasan berbagai layanan travel. |
| `ServiceCard.tsx` | Kartu layanan individual. |

### 📢 Promosi & Testimoni

| Komponen | Deskripsi |
|----------|-----------|
| `Subscribe.tsx` | Bagian langganan newsletter atau promosi. |
| `Subscribeform.tsx` | Formulir input email untuk langganan. |
| `Testimonials.tsx` | Testimoni dari pengguna/pelanggan. |

## 🚀 Cara Menjalankan

```bash
npm install
npm run dev

UTS Pemrograman Web
