import { useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { NavMenu } from "./components/NavMenu";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Checkout from "./pages/Checkout";
import ThankYou from "./pages/ThankYou";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col min-h-screen">
        <NavMenu onCartClick={() => setCartOpen(true)} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer onCartClick={() => setCartOpen(true)} />
        <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      </div>
    </ThemeProvider>
  );
}
export default App;
