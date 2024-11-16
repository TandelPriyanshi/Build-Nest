import './App.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Footer from './components/Footer';
import AboutUs from './pages/about_us';
import Services from './pages/services';
import Product from './pages/product';
import Cart from './pages/cart';
import Terms from './pages/terms';
import Cement from './SidebarComponent/cement';
import BricksBlocks from './SidebarComponent/BricksBlocks';
import ElectricalMaterials from './SidebarComponent/ElectricalMaterials';
import NaturalStones from './SidebarComponent/NaturalStones';
import { AuthProvider } from './Context/AuthContext';
import { ProductProvider } from './Context/ProductContext';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { ProductDetailProvider } from './Context/ProductDetailsContext';
import Plumbing from './SidebarComponent/Plumbing';
import PaintsFinishes from './SidebarComponent/PaintsFinishes';
import SandAggregates from './SidebarComponent/SandAggregates';
import Tiles from './SidebarComponent/Tiles';
import TMTSteel from './SidebarComponent/TMTSteel';
import WoodenProducts from './SidebarComponent/WoodenProducts';
import { CartProvider } from './Context/CartContext';
import ContactUs from './pages/contactus';

function App() {
  return (
    <Router>
      <ProductDetailProvider>

        <ProductProvider>
          <AuthProvider>
            <CartProvider>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/signup" element={<SignUp />} />
              <Route exact path="/signin" element={<SignIn />} />
              <Route exact path="/terms" element={<Terms />} />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/footer" element={<Footer />} />
              <Route exact path="/aboutus" element={<AboutUs />} />
              <Route exact path="/services" element={<Services />} />
              <Route exact path="/contact" element={<ContactUs />} />
              <Route exact path="/product" element={<Product />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/cement" element={<Cement />} />
              <Route exact path="/bricksblocks" element={<BricksBlocks />} />
              <Route exact path="/electricalmaterials" element={<ElectricalMaterials />} />
              <Route exact path="/naturalstones" element={<NaturalStones />} />
              <Route exact path="/paintsfinishes" element={<PaintsFinishes />} />
              <Route exact path="/plumbing" element={<Plumbing />} />
              <Route exact path="/sandaggregates" element={<SandAggregates />} />
              <Route exact path="/tiles" element={<Tiles />} />
              <Route exact path="/tmtsteel" element={<TMTSteel />} />
              <Route exact path="/woodenproducts" element={<WoodenProducts />} />
            </Routes>
            </CartProvider>
          </AuthProvider>
        </ProductProvider>
      </ProductDetailProvider>
    </Router>
  );
}

export default App;