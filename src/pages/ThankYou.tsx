import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-4xl font-bold text-green-600 mb-4">🎉 Thank You!</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Your order has been placed successfully. We appreciate your purchase!
      </p>
      <Link to="/">
        <Button>Continue Shopping</Button>
      </Link>
    </div>
  );
}
