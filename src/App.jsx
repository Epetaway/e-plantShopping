
import { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';
import Navbar from './Navbar';
import CartItem from './CartItem';

function App() {
  
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
    setShowCart(false);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
    setShowCart(false);
  };

  const handlePlantsClick = () => {
    setShowProductList(true);
    setShowCart(false);
  };

  const handleCartClick = () => {
    setShowCart(true);
    setShowProductList(true);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
  };

  return (
    <div className="app-container">
      <Navbar 
        onHomeClick={handleHomeClick}
        onPlantsClick={handlePlantsClick}
        onCartClick={handleCartClick}
      />
      
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content">
         <div className="landing_content">
         <h1>Welcome To Paradise Nursery</h1>
          <div className="divider"></div>
          <p>Where Green Meets Serenity</p>
         
          <button className="get-started-button" onClick={handleGetStartedClick}>
            Get Started
          </button>
         </div>
          <div className="aboutus_container">
          <AboutUs/>
          </div>
          </div>
      </div>

      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        {showCart ? (
          <CartItem onContinueShopping={handleContinueShopping} />
        ) : (
          <ProductList onHomeClick={handleHomeClick}/>
        )}
      </div>
    </div>
  );
}

export default App;



