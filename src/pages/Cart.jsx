import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-32 text-center min-h-screen">
        <div className="text-6xl mb-6">🛒</div>
        <h1 className="text-3xl font-extrabold text-slate-900 mb-4">Your cart is empty</h1>
        <p className="text-slate-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link
          to="/products"
          className="inline-block bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-amber-500 hover:text-slate-900 transition"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-8">Shopping Cart</h1>
      <div className="grid lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <div className="w-24 h-24 bg-gray-50 rounded-xl p-2 flex-shrink-0">
                <img src={item.thumbnail} alt={item.title} className="w-full h-full object-contain" />
              </div>
              
              <div className="flex-grow text-center sm:text-left">
                <h3 className="font-bold text-slate-900 text-lg line-clamp-1">{item.title}</h3>
                <p className="text-amber-500 font-bold mt-1">${item.price}</p>
              </div>
              
              <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1 border border-gray-200">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center bg-white rounded shadow-sm text-slate-600 hover:text-amber-500 font-bold">-</button>
                <span className="w-6 text-center font-semibold">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center bg-white rounded shadow-sm text-slate-600 hover:text-amber-500 font-bold">+</button>
              </div>

              <div className="text-right sm:w-24 flex flex-row sm:flex-col justify-between items-center sm:items-end w-full sm:w-auto">
                <p className="font-extrabold text-slate-900">${(item.price * item.quantity).toFixed(2)}</p>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-sm font-semibold hover:underline mt-1">Remove</button>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 sticky top-24">
            <h2 className="text-xl font-bold text-slate-900 mb-4 border-b pb-4">Order Summary</h2>
            <div className="flex justify-between mb-2 text-slate-600">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4 text-slate-600">
              <span>Shipping</span>
              <span className="text-green-500 font-semibold">Free</span>
            </div>
            <div className="border-t pt-4 flex justify-between items-center mb-6">
              <span className="text-lg font-bold text-slate-900">Total</span>
              <span className="text-2xl font-extrabold text-amber-500">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-amber-500 hover:text-slate-900 transition mb-3">
              Proceed to Checkout
            </button>
            <button onClick={clearCart} className="w-full text-red-500 text-sm font-semibold hover:underline">
              Clear Cart
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}