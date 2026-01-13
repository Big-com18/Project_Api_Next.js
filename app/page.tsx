import axiosInstance from "@/lib/axiosInstance";
import Link from "next/link";

// Kita ambil beberapa produk buat pajangan di depan
async function getFlashSaleProducts() {
  try {
    // Ambil 4 produk acak (skip 10 produk awal biar beda sama halaman lain)
    const res = await axiosInstance.get('/products?limit=4&skip=30'); 
    return res.data.products;
  } catch (error) {
    return [];
  }
}

export default async function Home() {
  const flashSaleProducts = await getFlashSaleProducts();

  return (
    <div className="space-y-10">
      
      {/* 1. HERO SECTION (Banner Merah a la Ramayana) */}
      <section className="bg-red-600 text-white rounded-xl p-10 text-center shadow-lg">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 uppercase tracking-tighter">
          Pesta Diskon
        </h1>
        <p className="text-lg md:text-xl mb-6 opacity-90">
          Cuci Gudang Awal Tahun! Diskon hingga 70% untuk semua brand lokal.
        </p>
        <button className="bg-yellow-400 text-red-700 px-8 py-3 rounded-full font-bold text-lg hover:bg-white transition">
          Belanja Sekarang
        </button>
      </section>

      {/* 2. KATEGORI PILIHAN (Navigasi Cepat) */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-800 border-l-4 border-red-600 pl-3">
          Kategori Pilihan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <Link href="/baju" className="group block">
            <div className="bg-blue-100 p-6 rounded-lg text-center hover:bg-blue-200 transition cursor-pointer h-full border border-blue-200">
              <span className="text-4xl">👕</span>
              <h3 className="text-xl font-bold mt-2 text-blue-800">Fashion Pria</h3>
              <p className="text-sm text-blue-600">Kemeja & Kaos Terbaru</p>
            </div>
          </Link>

          <Link href="/celana" className="group block"> 
            {/* Link ini mengarah ke Jam Tangan kalau kamu pakai folder celana tadi */}
            <div className="bg-orange-100 p-6 rounded-lg text-center hover:bg-orange-200 transition cursor-pointer h-full border border-orange-200">
              <span className="text-4xl">⌚</span>
              <h3 className="text-xl font-bold mt-2 text-orange-800">Jam Tangan</h3>
              <p className="text-sm text-orange-600">Aksesoris Keren</p>
            </div>
          </Link>

          <Link href="/sepatu" className="group block">
            <div className="bg-green-100 p-6 rounded-lg text-center hover:bg-green-200 transition cursor-pointer h-full border border-green-200">
              <span className="text-4xl">👟</span>
              <h3 className="text-xl font-bold mt-2 text-green-800">Sepatu & Sneakers</h3>
              <p className="text-sm text-green-600">Langkah Pasti</p>
            </div>
          </Link>

        </div>
      </section>

      {/* 3. FLASH SALE (Data dari API) */}
      <section>
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-red-600 pl-3">
            Flash Sale 🔥
          </h2>
          <span className="text-red-500 font-semibold text-sm">Berakhir dalam 02:15:00</span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {flashSaleProducts.map((item: any) => (
            <div key={item.id} className="border p-3 rounded-lg hover:shadow-lg transition bg-white relative">
              {/* Label Diskon */}
              <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                -50%
              </span>
              
              <div className="w-full h-32 mb-2 relative">
                 <img src={item.thumbnail} alt={item.title} className="w-full h-full object-contain" />
              </div>
              
              <h3 className="font-bold text-sm truncate">{item.title}</h3>
              <div className="mt-2">
                <p className="text-xs text-gray-400 line-through">Rp {(item.price * 15000 * 2).toLocaleString()}</p>
                <p className="text-red-600 font-bold">Rp {(item.price * 15000).toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}