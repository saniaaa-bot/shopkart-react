import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100">
      <Link to={`/product/${product.id}`} className="relative overflow-hidden bg-gray-50 h-64 flex items-center justify-center p-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </Link>
      <div className="p-5 flex flex-col flex-grow">
        <p className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-2">{product.category}</p>
        <h3 className="font-bold text-slate-800 text-lg line-clamp-1 mb-1">
          {product.title}
        </h3>
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-2xl font-extrabold text-slate-900">
            ${product.price}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="bg-slate-100 text-slate-900 px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-900 hover:text-white transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}