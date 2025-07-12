import { Facebook, Instagram, Twitter, Github } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer({ onCartClick }: { onCartClick: () => void }) {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 pt-10 pb-6 mt-20 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">QuickCart</h2>
            <p className="mt-2 text-sm leading-relaxed">
              Your one-stop online store for quality products and fast delivery.
            </p>
          </div>
          
          <div>
            <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-2">Shop</h3>
            <ul className="space-y-1 text-sm">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to={''} onClick={onCartClick}
                className="hover:underline">Cart</Link></li>
              <li><Link to="/checkout" className="hover:underline">Checkout</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-2">Support</h3>
            <ul className="space-y-1 text-sm">
              <li><Link to="/contact us" className="hover:underline">Contact Us</Link></li>
              <li><Link to="About" className="hover:underline">About Us</Link></li>
              <li><a href="" className="hover:underline">Privacy Policy</a></li>
              <li><a href="" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-2">Follow Us</h3>
            <div className="flex gap-4 mt-2 text-muted-foreground">
              <a href=""><Facebook className="w-5 h-5 hover:text-blue-500" /></a>
              <a href=""><Instagram className="w-5 h-5 hover:text-pink-500" /></a>
              <a href=""><Twitter className="w-5 h-5 hover:text-sky-500" /></a>
              <a href=""><Github className="w-5 h-5 hover:text-black dark:hover:text-white" /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-sm text-center text-gray-500 dark:text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} QuickCart | All Rights Reserved | Developed by{" "}
            <a className="hover:underline" href="https://shahzadali.vercel.app/" target="_blank" rel="noopener noreferrer">
              Shahzad Ali
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
