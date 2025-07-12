import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { removeFromCart, increment, decrement } from "@/features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

export default function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 max-w-full bg-white dark:bg-gray-900 shadow-lg transform ${open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50 flex flex-col`}
    >
   
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Your Cart</h2>
        <Button variant="ghost" onClick={onClose}>
          Close
        </Button>
      </div>

     
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full p-4">
          {cart.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-600 dark:text-gray-400">Cart is empty.</p>
            </div>
          ) : (
            <div className="space-y-4 pr-2">
              {cart.map((item) => (
                <div key={item.id} className="flex items-start gap-3 border-b pb-3">
                  <img src={item.image} className="w-12 h-12 object-contain" alt={item.title} />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-800 dark:text-gray-100 line-clamp-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">${item.price.toFixed(2)}</p>
                    <div className="flex flex-wrap gap-2 items-center mt-1">
                      <Button size="sm" onClick={() => dispatch(decrement(item.id))}>
                        -
                      </Button>
                      <span className="text-gray-800 dark:text-gray-100">{item.quantity}</span>
                      <Button size="sm" onClick={() => dispatch(increment(item.id))}>
                        +
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </div>

 
      {cart.length > 0 && (
        <div className="p-4 border-t space-y-2">
          <div className="flex justify-between text-lg font-semibold text-gray-800 dark:text-gray-100">
            <span>Total:</span>
            <span>
              ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
            </span>
          </div>
          <Button
            className="w-full"
            onClick={() => {
              onClose();
              navigate("/checkout");
            }}
          >
            Proceed to Checkout
          </Button>
        </div>
      )}
    </div>
  );
}
