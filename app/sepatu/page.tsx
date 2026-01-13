// src/app/baju/page.tsx
import axiosInstance from "@/lib/axiosInstance"; // Import settingan axios tadi
import Image from "next/image"; // Komponen khusus Next.js buat gambar biar ringan

// 1. Kita definisikan dulu bentuk datanya (TypeScript)
// Biar codingan kita tau kalau 'price' itu angka, 'title' itu tulisan.
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string; // URL gambarnya
}

// Function utama halaman
export default async function SepatuPage() {
  
  // 2. LOGIKA FETCHING DATA
  // Kita nembak API DummyJSON kategori 'mens-shirts'
  let products: Product[] = [];
  
  try {
    const response = await axiosInstance.get("/products/category/mens-shoes");
    products = response.data.products; // Data produk ada di dalam properti 'products'
  } catch (error) {
    console.error("Gagal ambil data:", error);
    return <div>Error mengambil data produk...</div>;
  }

  // 3. LOGIKA TAMPILAN (HTML/JSX)
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Koleksi Sepatu Pria</h1>
      
      {/* Grid Layout biar rapi berjejer */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Disini kita looping datanya */}
        {products.map((item) => (
          <div key={item.id} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
            
            {/* Bagian Gambar */}
            <div className="relative w-full h-48 mb-4">
               {/* Pakai <img> biasa dulu biar gampang setupnya, nanti kalau error kita fix */}
               <img 
                 src={item.thumbnail} 
                 alt={item.title} 
                 className="w-full h-full object-contain"
               />
            </div>

            {/* Bagian Tulisan */}
            <h2 className="font-bold text-lg">{item.title}</h2>
            <p className="text-gray-500 text-sm mb-2 truncate">
                {item.description}
            </p>
            <p className="text-green-600 font-bold text-xl">
                $ {item.price}
            </p>
            
          </div>
        ))}

      </div>
    </div>
  );
}