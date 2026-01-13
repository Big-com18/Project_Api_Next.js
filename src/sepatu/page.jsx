"use client"; // Wajib karena pakai useEffect (Client Side)
import { useEffect, useState } from "react";
import axios from "axios";

export default function PakaianPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // GANTI URL INI DENGAN LINK MOCKAPI KAMU SENDIRI
  const API_URL = "https://67xxxxxx.mockapi.io/products"; 

  // Fungsi ambil data
  const fetchPakaian = async () => {
    try {
      const response = await axios.get(API_URL);
      // Filter data agar yang muncul cuma kategori 'pakaian'
      const dataPakaian = response.data.filter((item) => item.category === "pakaian");
      setProducts(dataPakaian);
    } catch (error) {
      alert("Gagal mengambil data!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPakaian();
  }, []);

  if (loading) return <p>Sedang memuat data...</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Sepatu</h2>
      
      {/* Grid tampilan produk */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <div key={item.id} className="border p-4 rounded shadow hover:shadow-lg">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-48 object-cover rounded mb-4" 
            />
            <h3 className="font-bold text-lg">{item.name}</h3>
            <p className="text-gray-500 text-sm">{item.description}</p>
            <p className="text-blue-600 font-bold mt-2">Rp {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}