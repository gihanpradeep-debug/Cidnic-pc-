import React, { useState } from 'react';
import { Star, ShoppingCart, Heart, Share2, ShieldCheck, Truck, RotateCcw, ChevronRight, Check, Info } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../constants';
import { motion } from 'motion/react';

interface ProductDetailProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onAddToCart }) => {
  const [selectedColor, setSelectedColor] = useState('Space Gray');
  const [selectedRam, setSelectedRam] = useState('32GB');
  const [selectedStorage, setSelectedStorage] = useState('1TB');
  const [quantity, setQuantity] = useState(1);

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
        <button className="hover:text-primary cursor-pointer">Home</button>
        <ChevronRight size={14} />
        <button className="hover:text-primary cursor-pointer">{product.category}</button>
        <ChevronRight size={14} />
        <span className="text-slate-900">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square rounded-3xl bg-white border border-slate-100 p-12 flex items-center justify-center overflow-hidden">
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <button key={i} className="aspect-square rounded-2xl bg-white border border-slate-100 p-4 hover:border-primary transition-all cursor-pointer">
                <img src={product.image} alt="Thumb" className="w-full h-full object-contain opacity-60" referrerPolicy="no-referrer" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase rounded-lg tracking-widest">
                  {product.isNew ? 'New Arrival' : 'In Stock'}
                </span>
                <h1 className="text-4xl font-black text-slate-900 tracking-tight leading-tight">{product.name}</h1>
              </div>
              <div className="flex gap-2">
                <button className="p-3 rounded-xl border border-slate-200 text-slate-400 hover:text-red-500 hover:border-red-500 transition-all cursor-pointer">
                  <Heart size={20} />
                </button>
                <button className="p-3 rounded-xl border border-slate-200 text-slate-400 hover:text-primary hover:border-primary transition-all cursor-pointer">
                  <Share2 size={20} />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-slate-200"} />
                ))}
                <span className="text-sm font-bold text-slate-900 ml-2">{product.rating}</span>
              </div>
              <span className="text-slate-300">|</span>
              <button className="text-sm font-bold text-primary hover:underline cursor-pointer">{product.reviews} Reviews</button>
              <span className="text-slate-300">|</span>
              <span className="text-sm font-bold text-emerald-500 flex items-center gap-1">
                <Check size={16} /> Verified Purchase
              </span>
            </div>

            <div className="flex items-baseline gap-4">
              <span className="text-5xl font-black text-slate-900">${product.price.toLocaleString()}</span>
              <span className="text-xl text-slate-400 line-through">${(product.price * 1.15).toLocaleString()}</span>
              <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-lg">-15% OFF</span>
            </div>
          </div>

          <div className="h-px bg-slate-100" />

          {/* Configuration Options */}
          <div className="space-y-6">
            {/* Color Selection */}
            <div className="space-y-3">
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">Color: <span className="text-slate-500 font-bold">{selectedColor}</span></h4>
              <div className="flex gap-3">
                {['Space Gray', 'Silver', 'Midnight'].map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 transition-all cursor-pointer ${selectedColor === color ? 'border-primary ring-2 ring-primary/20' : 'border-transparent'}`}
                    style={{ backgroundColor: color === 'Space Gray' ? '#4b5563' : color === 'Silver' ? '#e5e7eb' : '#1f2937' }}
                  />
                ))}
              </div>
            </div>

            {/* RAM Selection */}
            <div className="space-y-3">
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">Memory (RAM)</h4>
              <div className="grid grid-cols-3 gap-3">
                {['16GB', '32GB', '64GB'].map((ram) => (
                  <button
                    key={ram}
                    onClick={() => setSelectedRam(ram)}
                    className={`py-3 rounded-xl border-2 font-bold text-sm transition-all cursor-pointer ${selectedRam === ram ? 'border-primary bg-primary/5 text-primary' : 'border-slate-100 text-slate-600 hover:border-slate-200'}`}
                  >
                    {ram}
                  </button>
                ))}
              </div>
            </div>

            {/* Storage Selection */}
            <div className="space-y-3">
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">Storage</h4>
              <div className="grid grid-cols-3 gap-3">
                {['512GB', '1TB', '2TB'].map((storage) => (
                  <button
                    key={storage}
                    onClick={() => setSelectedStorage(storage)}
                    className={`py-3 rounded-xl border-2 font-bold text-sm transition-all cursor-pointer ${selectedStorage === storage ? 'border-primary bg-primary/5 text-primary' : 'border-slate-100 text-slate-600 hover:border-slate-200'}`}
                  >
                    {storage}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-4">
            <div className="flex items-center bg-slate-100 rounded-xl px-2">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 flex items-center justify-center text-slate-600 hover:text-primary font-bold cursor-pointer"
              >
                -
              </button>
              <span className="w-10 text-center font-black text-slate-900">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 flex items-center justify-center text-slate-600 hover:text-primary font-bold cursor-pointer"
              >
                +
              </button>
            </div>
            <button 
              onClick={() => onAddToCart(product)}
              className="flex-1 bg-primary text-white font-black rounded-xl py-4 flex items-center justify-center gap-3 hover:bg-orange-600 transition-all shadow-lg shadow-primary/20 cursor-pointer"
            >
              <ShoppingCart size={20} /> ADD TO CART
            </button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 pt-8">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                <Truck size={18} />
              </div>
              <span className="text-[10px] font-bold text-slate-500 uppercase">Free Delivery</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                <ShieldCheck size={18} />
              </div>
              <span className="text-[10px] font-bold text-slate-500 uppercase">2 Year Warranty</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                <RotateCcw size={18} />
              </div>
              <span className="text-[10px] font-bold text-slate-500 uppercase">30 Day Returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs / Detailed Specs */}
      <div className="space-y-8 pt-12 border-t border-slate-100">
        <div className="flex gap-8 border-b border-slate-100">
          {['Specifications', 'Description', 'Reviews', 'Support'].map((tab, i) => (
            <button
              key={tab}
              className={`pb-4 text-sm font-black uppercase tracking-widest transition-all cursor-pointer relative ${i === 0 ? 'text-primary' : 'text-slate-400 hover:text-slate-600'}`}
            >
              {tab}
              {i === 0 && <div className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-full" />}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-black text-slate-900">TECHNICAL SPECIFICATIONS</h3>
            <div className="space-y-4">
              {[
                { label: 'Processor', value: 'Apple M3 Max chip with 16-core CPU' },
                { label: 'Graphics', value: '40-core GPU, 16-core Neural Engine' },
                { label: 'Memory', value: 'Up to 128GB unified memory' },
                { label: 'Display', value: '16.2-inch Liquid Retina XDR display' },
                { label: 'Battery', value: 'Up to 22 hours Apple TV app movie playback' },
                { label: 'Weight', value: '4.8 pounds (2.16 kg)' },
              ].map((spec) => (
                <div key={spec.label} className="flex justify-between py-3 border-b border-slate-50">
                  <span className="text-sm font-bold text-slate-500">{spec.label}</span>
                  <span className="text-sm font-black text-slate-900">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-50 rounded-3xl p-8 space-y-6">
            <div className="flex items-center gap-2 text-primary">
              <Info size={20} />
              <h4 className="font-black text-sm uppercase tracking-widest">Expert Note</h4>
            </div>
            <p className="text-slate-600 leading-relaxed italic">
              "The M3 Max variant of the MacBook Pro 16 is a beast for video editing and 3D rendering. 
              The thermal management is significantly improved over the previous generation, 
              maintaining peak performance for longer workloads."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-200" />
              <div>
                <p className="font-bold text-slate-900">Alex Rivera</p>
                <p className="text-xs text-slate-400">Lead Hardware Reviewer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="space-y-8 pt-12">
        <h2 className="text-2xl font-black text-slate-900 tracking-tight">YOU MAY ALSO LIKE</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedProducts.map((p) => (
            <div key={p.id} className="group bg-white rounded-3xl p-4 border border-slate-100 hover:shadow-xl transition-all cursor-pointer">
              <div className="aspect-square rounded-2xl bg-slate-50 mb-4 p-4 flex items-center justify-center overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform" referrerPolicy="no-referrer" />
              </div>
              <h4 className="font-bold text-slate-900 line-clamp-1">{p.name}</h4>
              <p className="text-lg font-black text-primary mt-2">${p.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
