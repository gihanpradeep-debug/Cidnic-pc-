import React, { useState, useEffect } from 'react';
import { Header, Footer } from './components/Navigation';
import { Home } from './components/Home';
import { ProductList } from './components/ProductList';
import { ProductDetail } from './components/ProductDetail';
import { Checkout } from './components/Checkout';
import { Dashboard } from './components/Dashboard';
import { Configurator } from './components/Configurator';
import { Product, CartItem } from './types';
import { motion, AnimatePresence } from 'motion/react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    // Scroll to top on view change
    window.scrollTo(0, 0);
  }, [currentView, selectedProduct]);

  const handleNavigate = (view: string) => {
    if (view === 'home') {
      setCurrentView('home');
      setSelectedProduct(null);
    } else if (['laptops', 'custom-pcs', 'components', 'gaming', 'graphics-cards'].includes(view)) {
      setSelectedCategory(view);
      setCurrentView('category');
      setSelectedProduct(null);
    } else {
      setCurrentView(view);
      setSelectedProduct(null);
    }
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('detail');
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setCurrentView('category');
    setSelectedProduct(null);
  };

  const handleAddToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  if (!isLoaded) return null;

  return (
    <div className="min-h-screen flex flex-col bg-background-light">
      <Header onNavigate={handleNavigate} cartCount={cartCount} />
      
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView + (selectedProduct?.id || '')}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {currentView === 'home' && (
              <Home onProductClick={handleProductClick} onCategoryClick={handleCategoryClick} />
            )}
            
            {currentView === 'category' && (
              <ProductList category={selectedCategory} onProductClick={handleProductClick} />
            )}
            
            {currentView === 'detail' && selectedProduct && (
              <ProductDetail product={selectedProduct} onAddToCart={handleAddToCart} />
            )}
            
            {currentView === 'checkout' && (
              <Checkout 
                cart={cart} 
                onBack={() => setCurrentView('home')} 
                onComplete={() => {
                  alert('Order placed successfully!');
                  setCart([]);
                  setCurrentView('home');
                }} 
              />
            )}
            
            {currentView === 'dashboard' && (
              <Dashboard />
            )}
            
            {currentView === 'configurator' && (
              <Configurator />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default App;
