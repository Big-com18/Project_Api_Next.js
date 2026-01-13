// src/app/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full">
      
      {/* BAGIAN 1: Top Bar (Brand & Search) - Merah Ramayana */}
      <div className="bg-red-700 text-white py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Logo Brand */}
          <Link href="/" className="text-3xl font-extrabold tracking-widest italic hover:opacity-90">
            RAMAYANA <span className="text-yellow-400 not-italic text-sm">PRIME</span>
          </Link>

          {/* Search Bar (Visual Saja) */}
          <div className="relative w-full md:w-1/2">
            <input 
              type="text" 
              placeholder="Cari baju, celana, atau brand favorit..." 
              className="w-full py-2 px-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-800 p-1.5 rounded-full hover:bg-red-900">
              {/* Icon Search (SVG Sederhana) */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Menu Akun (Pura-pura) */}
          <div className="flex gap-6 text-sm font-semibold">
            <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-300">
               {/* Icon User */}
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Masuk</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-300">
              {/* Icon Keranjang */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Keranjang</span>
            </div>
          </div>
        </div>
      </div>

      {/* BAGIAN 2: Menu Navigasi (Putih Bersih) - Sticky biar nempel pas scroll */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center gap-8 text-sm md:text-base font-medium text-gray-700 py-3">
            <li>
              <Link href="/" className="hover:text-red-600 hover:border-b-2 border-red-600 pb-1 transition-all">
                BERANDA
              </Link>
            </li>
            <li>
              <Link href="/baju" className="hover:text-red-600 hover:border-b-2 border-red-600 pb-1 transition-all">
                PAKAIAN PRIA
              </Link>
            </li>
            <li>
              <Link href="/celana" className="hover:text-red-600 hover:border-b-2 border-red-600 pb-1 transition-all">
                JAM TANGAN
              </Link>
            </li>
            <li>
              <Link href="/sepatu" className="hover:text-red-600 hover:border-b-2 border-red-600 pb-1 transition-all">
                SEPATU
              </Link>
            </li>
            <li>
              <span className="text-gray-400 cursor-not-allowed">WANITA (Coming Soon)</span>
            </li>
          </ul>
        </div>
      </nav>

    </header>
  );
}