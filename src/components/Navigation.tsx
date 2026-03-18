import React from 'react';
import { ShoppingCart, User, Search, Menu, Heart, Bell, Globe, ChevronDown } from 'lucide-react';
import { cn } from '../utils';

interface HeaderProps {
  onNavigate: (view: string) => void;
  cartCount: number;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, cartCount }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Bell size={12} /> Free shipping on orders over $500</span>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline">24/7 Premium Support</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
              <Globe size={12} /> EN <ChevronDown size={10} />
            </button>
            <button className="hover:text-primary transition-colors cursor-pointer">Track Order</button>
            <button className="hover:text-primary transition-colors cursor-pointer">Find Store</button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-8">
        {/* Logo */}
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-black text-xl group-hover:rotate-6 transition-transform">
            TS
          </div>
          <span className="text-2xl font-black tracking-tighter text-slate-900">
            Cidnic<span className="text-primary">SHOP</span>
          </span>
        </button>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {['Laptops', 'Custom PCs', 'Components', 'Gaming', 'Configurator'].map((item) => (
            <button
              key={item}
              onClick={() => onNavigate(item.toLowerCase().replace(' ', '-'))}
              className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors cursor-pointer relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-md relative">
          <input
            type="text"
            placeholder="Search hardware, components..."
            className="w-full bg-slate-100 border-none rounded-full py-2.5 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors cursor-pointer relative">
            <Heart size={22} />
          </button>
          <button 
            onClick={() => onNavigate('dashboard')}
            className="p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
          >
            <User size={22} />
          </button>
          <button 
            onClick={() => onNavigate('checkout')}
            className="p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors cursor-pointer relative"
          >
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-5 h-5 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                {cartCount}
              </span>
            )}
          </button>
          <button className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors cursor-pointer">
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-black text-lg">
              TS
            </div>
            <span className="text-xl font-black tracking-tighter text-white">
              TECH<span className="text-primary">SHOP</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            Premium hardware provider for gamers, creators, and professionals. 
            Building the future of computing since 2012.
          </p>
          <div className="flex gap-4">
            {['fb', 'tw', 'ig', 'yt'].map((s) => (
              <button key={s} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer">
                <span className="uppercase text-xs font-bold">{s}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><button className="hover:text-primary transition-colors cursor-pointer">About Us</button></li>
            <li><button className="hover:text-primary transition-colors cursor-pointer">Contact</button></li>
            <li><button className="hover:text-primary transition-colors cursor-pointer">Careers</button></li>
            <li><button className="hover:text-primary transition-colors cursor-pointer">Blog</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Support</h4>
          <ul className="space-y-4 text-sm">
            <li><button className="hover:text-primary transition-colors cursor-pointer">Help Center</button></li>
            <li><button className="hover:text-primary transition-colors cursor-pointer">Shipping Info</button></li>
            <li><button className="hover:text-primary transition-colors cursor-pointer">Returns</button></li>
            <li><button className="hover:text-primary transition-colors cursor-pointer">Warranty</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Newsletter</h4>
          <p className="text-sm mb-4">Get the latest hardware news and exclusive deals.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 bg-slate-800 border-none rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-primary"
            />
            <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-orange-600 transition-colors cursor-pointer">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 flex flex-col md:row justify-between items-center gap-4 text-xs">
        <p>© 2026 TechShop International. All rights reserved.</p>
        <div className="flex gap-6">
          <button className="hover:text-white cursor-pointer">Privacy Policy</button>
          <button className="hover:text-white cursor-pointer">Terms of Service</button>
          <button className="hover:text-white cursor-pointer">Cookie Settings</button>
        </div>
      </div>
    </footer>
  );
};
