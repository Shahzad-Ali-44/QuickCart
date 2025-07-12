import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";

import { useSelector } from "react-redux";
import { ShoppingCart } from "lucide-react";
import { RootState } from "@/store";


export function NavMenu({ onCartClick }: { onCartClick: () => void }) {
  const { setTheme, theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const cartCount = useSelector((state: RootState) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );



  return (
<nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white flex-shrink-0">
          <Link to={"/"}>QuickCart</Link>

        </h1>



        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex flex-grow justify-center items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-6">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/"
                    className="text-gray-900 font-bold dark:text-white hover:text-black"
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/about"
                    className="text-gray-900 font-bold dark:text-white hover:text-black"
                  >
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>


                  <Link
                    to="/contact"
                    className="text-gray-900 font-bold dark:text-white hover:text-black"
                  >
                    Contact us
                  </Link>

                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>



        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={onCartClick}
            className="relative h-10 w-10"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
                {cartCount}
              </span>
            )}
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="h-10 w-10"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={toggleMenu}
            className="lg:hidden h-10 w-10"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          
        </div>

      </div>

       {/* Mobile Navigation Links  */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden bg-white dark:bg-gray-900`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col gap-6 text-center">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/"
                    className="text-gray-900 font-bold dark:text-white hover:text-black"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/about"
                    className="text-gray-900 font-bold dark:text-white hover:text-black"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>

                  <Link
                    to="/contact"
                    className="text-gray-900 font-bold dark:text-white hover:text-black"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    contact us
                  </Link>

                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>


        </div>
      </div>
    </nav>
  );
}
