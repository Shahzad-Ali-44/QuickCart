import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { addToCart } from "@/features/cart/cartSlice";
import { toast } from "react-toastify";

interface ProductProps {
  id: number;
  title: string;
  image: string;
  price: number;
}
const getToastTheme = () => {
    const theme = localStorage.getItem("vite-ui-theme") || "dark";
    if (theme === "dark") return "dark";
    if (theme === "light") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

export default function ProductCard({ id, title, image, price }: ProductProps) {
  const dispatch = useDispatch();

  const handleCart = () => {
    dispatch(addToCart({ id, title, price, image }))
    toast.success("Product added to the cart." ,{ theme: getToastTheme() })
  }

  return (
    <div className="flex flex-col justify-between h-full border rounded-2xl shadow-md p-4 bg-white dark:bg-gray-900">

      <div className="w-full h-40 sm:h-48 flex justify-center items-center overflow-hidden rounded-md">
        <img
          src={image}
          alt={title}
          className="object-contain w-full h-full"
        />
      </div>

      <h2 className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-100 mt-3 line-clamp-2">
        {title}
      </h2>

      <div className="flex-grow" />

      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2">
        ${price.toFixed(2)}
      </p>

      <Button
        onClick={handleCart}
        className="w-full mt-3"
      >
        Add to Cart
      </Button>
    </div>
  );
}
