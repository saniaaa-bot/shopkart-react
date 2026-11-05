import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=8")
      .then((res) => res.json())
      .then((data) => setFeatured(data.products));
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Professional Hero Section */}
      <section className="bg-slate-900 text-white py-20 px-6 text-center rounded-b-3xl shadow-lg">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
            Elevate Your Shopping Experience
          </h1>
          <p className="text-lg text-slate-300 mb-10">
            Discover premium products curated just for you. Quality meets affordability at ShopKart.
          </p>
          <Link
            to="/products"
            className="inline-block bg-amber-500 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-400 transition shadow-lg"
          >
            Explore Collection
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-extrabold text-slate-900">Featured Products</h2>
          <Link to="/products" className="text-amber-500 font-semibold hover:text-amber-600">View All &rarr;</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}