import axiosInstance from "@/lib/axiosInstance";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

export default async function BajuPage() {
  let products: Product[] = [];

  try {
    const response = await axiosInstance.get("/products/category/mens-shirts");
    products = response.data.products;
  } catch (error) {
    console.error("Gagal ambil data:", error);
    return <div>Error mengambil data produk...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Koleksi Baju Pria</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="relative w-full h-48 mb-4">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>

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
