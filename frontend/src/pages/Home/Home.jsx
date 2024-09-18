import React, { useEffect } from "react";
import { useState } from "react";
import Navigation from "../../components/navigation/Navigation";
import CardGrid from "../../components/HomeItemsGrid/CardGrid";
import { useCart } from "../../Context/CartProvider";

const Home = () => {
  const [products, setProducts] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`/api/products/search?query=${query}`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    handleSearch(searchQuery);
  }, [searchQuery]);

  const handleSearchSubmit = () => {
    handleSearch(searchQuery);
  };

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("Data is not an array", data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const { cart, addToCart, visibleAddedToCart, cartQuantity } = useCart();

  return (
    <>
      <Navigation
        cartQuantity={cartQuantity}
        onSearchChange={handleSearchChange}
        onSearchSubmit={handleSearchSubmit}
        searchQuery={searchQuery}
      />
      <div className="main">
        <div className="products-grid">
          <CardGrid
            data={products}
            addToCart={addToCart}
            visibleAddedToCart={visibleAddedToCart}
          />
        </div>
      </div>
      ;
    </>
  );
};

export default Home;
