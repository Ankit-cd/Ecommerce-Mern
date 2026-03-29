import { Button } from "./components/ui/button";
import { Link, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import AuthLayout from "./components/AuthLayout";
import Register from "./pages/auth/register";
import AdminLayout from "./components/admin-view/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminProducts from "./pages/admin/AdminProducts";
import ShoppingLayout from "./components/shopping-view/ShoppingLayout";
import ShoppingProducts from "./pages/shop/ShoppingProducts";
import NotFound from "./pages/not-found/NotFound";
import ShoppingCheckout from "./pages/shop/ShoppingCheckout";
import ShoppingAccount from "./pages/shop/ShoppingAccount";
import ShoppingHome from "./pages/shop/ShoppingHome";

function App() {
  return (
    <>
      <div className="flex flex-col overflow-hidden bg-white">
        {/* Common Components */}
        <h1>Header Component</h1>

        {/* Routes */}
        <Routes>
          <Route path="/auth/*" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          {/* Other routes can be added here */}

          <Route path="/admin/*" element={<AdminLayout />}>
            {/* Admin routes will be nested here */}
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="products" element={<AdminProducts />} />
          </Route>

          <Route path="/shopping/*" element={<ShoppingLayout />}>
            {/* Shopping routes will be nested here */}
            <Route path="home" element={<ShoppingHome />} />
            <Route path="account" element={<ShoppingAccount />} />
            <Route path="checkout" element={<ShoppingCheckout />} />

            <Route path="products" element={<ShoppingProducts />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
