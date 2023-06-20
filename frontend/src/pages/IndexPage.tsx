import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./main/HomePage";
import AboutPage from "./main/AboutPage";
import ShoppingCartPage from "./main/ShoppingCartPage";
import LikedProductsPage from "./buyers/LikedProductsPage";
import OrderHistoryPage from "./buyers/OrderHistoryPage";
import AddProductPage from "./products/AddProductPage";
import ProductDetailPage from "./products/ProductDetailPage";
import ProductListingPage from "./products/ProductListingPage";
import LoginPage from "./auth/LoginPage";
import RegisterPage from "./auth/RegisterPage";
import OrderReceivedPage from "./sellers/OrderReceivedPage";
import ProfilePage from "./main/ProfilePage";
import CreateSellerProfile from "./auth/CreateSellerProfile";

const IndexPage = () => {
  const isAuthenticated = true;
  const isSeller = true;
  
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/cart"
          element={
            isAuthenticated ? <ShoppingCartPage /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/products/liked"
          element={
            isAuthenticated ? <LikedProductsPage /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/products/ordered"
          element={
            isAuthenticated ? <OrderHistoryPage /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/products/add"
          element={
            isAuthenticated && isSeller ? (
              <AddProductPage />
            ) : isAuthenticated ? (
              <Navigate to="/create-seller-profile" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route path="/products/detail" element={<ProductDetailPage />} />
        <Route path="/products/all" element={<ProductListingPage />} />

        <Route
          path="/seller/received-orders"
          element={
            isAuthenticated && isSeller ? (
              <OrderReceivedPage />
            ) : isAuthenticated ? (
              <Navigate to="/" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route path="/profile/:id" element={<ProfilePage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/create-seller-profile"
          element={<CreateSellerProfile />}
        />
      </Routes>
    </div>
  );
};

export default IndexPage;
