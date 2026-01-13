import axiosInstance from "@/lib/axiosInstance";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

export default async function JamTanganPage() {
  let products: Product[] = [];
  let errorMessage = "";

  try {
    const response = await axiosInstance.get("/products/category/mens-watches");
    products = response.data.products;
  } catch (error) {
    console.error(error);
    errorMessage = "Gagal mengambil data Jam Tangan. Cek koneksi atau URL API.";
  }

  if (errorMessage) {
    return <div className="p-10 text-red-500 text-center">{errorMessage}</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Koleksi Jam Tangan Pria</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition bg-white"
          >
            <div className="relative w-full h-48 mb-4">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>

            <h2 className="font-bold text-lg">{item.title}</h2>
            <p className="text-red-600 font-bold text-xl mt-2">
              Rp {item.price * 15000}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
