import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/navbar';
import { Footer } from './components/layout/footer';
import { Home } from './pages/home';
import { Products } from './pages/products';
import { ProductDetail } from './pages/product-detail';
import { Cart } from './pages/cart';
import { Checkout } from './pages/checkout';
import { Account } from './pages/account';
import { About } from './pages/about';
import { Contact } from './pages/contact';
import { Blog } from './pages/blog';
import { FAQ } from './pages/faq';
import { Policies } from './pages/policies';
import { LoyaltyProgram } from './pages/loyalty-program';
import { SearchResults } from './pages/search-results';
import { NewArrivals } from './pages/new-arrivals';
import { WinterEssentials } from './pages/winter-essentials';
import { LimitedEdition } from './pages/limited-edition';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/account/*" element={<Account />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/policies/*" element={<Policies />} />
            <Route path="/loyalty" element={<LoyaltyProgram />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/new-arrivals" element={<NewArrivals />} />
            <Route path="/winter-essentials" element={<WinterEssentials />} />
            <Route path="/limited-edition" element={<LimitedEdition />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}