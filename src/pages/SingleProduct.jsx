import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function SingleProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [id]);

  if (!product) return <div className="text-center py-20 text-xl font-semibold">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-screen">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">
        <div className="bg-gray-50 p-10 flex items-center justify-center h-[400px] md:h-auto">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="max-h-full w-auto object-contain"
          />
        </div>
        <div className="p-10 flex flex-col justify-center">
          <p className="text-amber-500 font-bold uppercase tracking-wider mb-2">{product.category}</p>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">{product.title}</h1>
          <p className="text-3xl font-bold text-slate-900 mb-6">${product.price}</p>
          <p className="text-slate-600 leading-relaxed mb-8">{product.description}</p>
          
          <div className="flex gap-4">
            <button
              onClick={() => addToCart(product)}
              className="flex-1 bg-slate-900 text-white px-6 py-4 rounded-xl font-bold hover:bg-slate-800 transition shadow-lg"
            >
              Add to Cart
            </button>
            <button
              onClick={() => { addToCart(product); navigate("/cart"); }}
              className="flex-1 bg-amber-500 text-slate-900 px-6 py-4 rounded-xl font-bold hover:bg-amber-400 transition shadow-lg"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}