import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Shop<span className="text-amber-500">Kart</span>.
          </Link>
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-slate-600 hover:text-amber-500 font-medium transition">Home</Link>
            <Link to="/products" className="text-slate-600 hover:text-amber-500 font-medium transition">Products</Link>
            <Link to="/cart" className="relative bg-slate-900 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-amber-500 hover:text-slate-900 transition flex items-center gap-2">
              <span>Cart</span>
              {totalItems > 0 && (
                <span className="bg-amber-500 text-slate-900 text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}