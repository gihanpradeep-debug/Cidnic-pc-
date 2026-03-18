import React, { useState } from 'react';
import { Filter, ChevronDown, Grid, List, SlidersHorizontal, Search, Star, Zap } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import { motion } from 'motion/react';

interface ProductListProps {
  category: string;
  onProductClick: (product: Product) => void;
}

export const ProductList: React.FC<ProductListProps> = ({ category, onProductClick }) => {
  const [priceRange, setPriceRange] = useState(2000);
  
  // Filter products by category (mock filtering for now)
  const filteredProducts = PRODUCTS.filter(p => 
    category === 'all' || p.category.toLowerCase().replace(' ', '-') === category
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 space-y-8">
          <div>
            <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2">
              <SlidersHorizontal size={18} /> FILTERS
            </h3>
            
            <div className="space-y-8">
              {/* Categories */}
              <div className="space-y-4">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider">Categories</h4>
                <div className="space-y-2">
                  {['Graphics Cards', 'Processors', 'Memory', 'Storage', 'Motherboards', 'Power Supplies'].map((cat) => (
                    <label key={cat} className="flex items-center gap-3 group cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary" />
                      <span className="text-sm text-slate-600 group-hover:text-primary transition-colors">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider">Price Range</h4>
                  <span className="text-xs font-bold text-primary">${priceRange}</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="5000" 
                  value={priceRange}
                  onChange={(e) => setPriceRange(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary" 
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-bold">
                  <span>$0</span>
                  <span>$5,000+</span>
                </div>
              </div>

              {/* Brands */}
              <div className="space-y-4">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider">Brand</h4>
                <div className="space-y-2">
                  {['NVIDIA', 'AMD', 'ASUS', 'MSI', 'Gigabyte', 'EVGA'].map((brand) => (
                    <label key={brand} className="flex items-center gap-3 group cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary" />
                      <span className="text-sm text-slate-600 group-hover:text-primary transition-colors">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Resolution */}
              <div className="space-y-4">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider">Target Resolution</h4>
                <div className="flex flex-wrap gap-2">
                  {['1080p', '1440p', '4K', '8K'].map((res) => (
                    <button key={res} className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-600 hover:border-primary hover:text-primary transition-all cursor-pointer">
                      {res}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Promo in Sidebar */}
          <div className="bg-slate-900 rounded-2xl p-6 text-white space-y-4 relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-[10px] font-black text-primary uppercase tracking-widest">Upgrade Now</span>
              <h4 className="font-bold text-lg leading-tight">GeForce RTX™ 40 Series</h4>
              <p className="text-xs text-slate-400">Beyond Fast for Gamers and Creators.</p>
              <button className="text-xs font-bold text-white underline hover:text-primary transition-colors pt-2 cursor-pointer">Learn More</button>
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 space-y-8">
          {/* Header & Sorting */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100">
            <div>
              <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                {category.replace('-', ' ')}
              </h1>
              <p className="text-sm text-slate-500">{filteredProducts.length} items found</p>
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="flex items-center gap-2 border-r border-slate-200 pr-4">
                <button className="p-2 bg-slate-100 text-primary rounded-lg cursor-pointer"><Grid size={18} /></button>
                <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-lg cursor-pointer"><List size={18} /></button>
              </div>
              <div className="relative flex-1 md:flex-none">
                <select className="appearance-none bg-slate-50 border-none rounded-lg py-2 pl-4 pr-10 text-sm font-bold text-slate-700 focus:ring-2 focus:ring-primary/20 w-full cursor-pointer">
                  <option>Sort by: Popularity</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onClick={() => onProductClick(product)} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 pt-8">
            <button className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 hover:border-primary hover:text-primary transition-all cursor-pointer">1</button>
            <button className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-bold cursor-pointer">2</button>
            <button className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 hover:border-primary hover:text-primary transition-all cursor-pointer">3</button>
            <span className="px-2 text-slate-400">...</span>
            <button className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 hover:border-primary hover:text-primary transition-all cursor-pointer">12</button>
            <button className="px-4 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-sm font-bold text-slate-600 hover:border-primary hover:text-primary transition-all cursor-pointer">Next</button>
          </div>
        </main>
      </div>
    </div>
  );
};

const ProductCard: React.FC<{ product: Product; onClick: () => void }> = ({ product, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group bg-white rounded-3xl p-4 border border-slate-100 hover:shadow-xl transition-all cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-50 mb-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isHot && (
            <span className="px-2 py-1 bg-red-500 text-white text-[10px] font-black uppercase rounded-lg">Hot</span>
          )}
          {product.isBestValue && (
            <span className="px-2 py-1 bg-emerald-500 text-white text-[10px] font-black uppercase rounded-lg">Best Value</span>
          )}
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="font-bold text-slate-900 line-clamp-2 group-hover:text-primary transition-colors min-h-[3rem]">{product.name}</h3>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} className={i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-slate-200"} />
          ))}
          <span className="text-[10px] text-slate-400 font-medium">({product.reviews})</span>
        </div>
        <div className="flex items-center justify-between pt-4">
          <div>
            <span className="text-xs text-slate-400 line-through block">$ {(product.price * 1.2).toFixed(2)}</span>
            <span className="text-xl font-black text-slate-900">${product.price.toLocaleString()}</span>
          </div>
          <button className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center hover:bg-primary transition-colors">
            <Zap size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
