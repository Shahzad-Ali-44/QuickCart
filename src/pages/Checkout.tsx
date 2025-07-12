import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { clearCart } from "@/features/cart/cartSlice";

export default function Checkout() {
  const cart = useSelector((state: RootState) => state.cart.items);
  const navigate = useNavigate();
 const dispatch = useDispatch();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const handlePlaceOrder = () => {
    dispatch(clearCart());                 
    localStorage.removeItem("cart");         
    navigate("/thank-you");
  };
  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white text-center">Checkout</h2>

      {cart.length === 0 ? (
        <div className="text-center mt-10">
          <p className="text-gray-600 dark:text-gray-400 text-lg">Your cart is empty.</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="divide-y divide-gray-200 dark:divide-gray-700 rounded-xl border border-gray-200 dark:border-gray-800 p-4 bg-white dark:bg-gray-900 shadow-sm">
            {cart.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row justify-between py-4">
                <div className="mb-2 sm:mb-0">
                  <p className="text-base font-medium text-gray-900 dark:text-white line-clamp-1">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    ${item.price.toFixed(2)} × {item.quantity}
                  </p>
                </div>
                <p className="text-base font-semibold text-gray-800 dark:text-gray-100">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center px-4 py-4 bg-muted rounded-xl border dark:border-gray-800">
            <span className="text-lg font-semibold text-gray-900 dark:text-white">Total</span>
            <span className="text-lg font-bold text-primary">${total.toFixed(2)}</span>
          </div>

         <Button className="w-full py-6 text-base font-semibold" size="lg" onClick={handlePlaceOrder}>
            Place Order
          </Button>
        </div>
      )}
    </div>
  );
}
