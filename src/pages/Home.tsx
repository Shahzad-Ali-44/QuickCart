import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Loader2 } from "lucide-react";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="flex flex-col gap-20">

      <section className="w-full bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-black py-24 px-4 sm:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
            Discover Better Shopping with <span className="text-blue-600 dark:text-blue-400">QuickCart</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Seamless shopping, unbeatable prices, and fast delivery all in one place.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Featured Products
        </h2>

        {loading ? (
          <div className="flex justify-center items-center h-60">
            <Loader2 className="w-8 h-8 text-gray-600 dark:text-gray-300 animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        )}
      </section>
      
      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">What our customers say</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            <blockquote className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow">
              <p className="text-gray-800 dark:text-gray-100">“QuickCart made shopping so easy. Fast delivery and great service!”</p>
              <footer className="text-sm text-gray-500 mt-2">— Sarah J.</footer>
            </blockquote>
            <blockquote className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow">
              <p className="text-gray-800 dark:text-gray-100">“I love the variety and prices. Highly recommend QuickCart.”</p>
              <footer className="text-sm text-gray-500 mt-2">— Michael D.</footer>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}
