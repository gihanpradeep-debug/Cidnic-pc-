import React from 'react';
import { User, Package, Heart, Settings, LogOut, ChevronRight, Clock, Star, MapPin, CreditCard } from 'lucide-react';
import { ORDERS, PRODUCTS } from '../constants';

export const Dashboard: React.FC = () => {
  const wishlist = PRODUCTS.slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Nav */}
        <aside className="w-full lg:w-64 space-y-4">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-black text-xl">
                JD
              </div>
              <div>
                <h3 className="font-black text-slate-900 leading-tight">John Doe</h3>
                <p className="text-xs text-slate-400">Premium Member</p>
              </div>
            </div>
            
            <nav className="space-y-1">
              {[
                { icon: User, label: 'Profile', active: true },
                { icon: Package, label: 'Orders' },
                { icon: Heart, label: 'Wishlist' },
                { icon: MapPin, label: 'Addresses' },
                { icon: CreditCard, label: 'Payments' },
                { icon: Settings, label: 'Settings' },
              ].map((item) => (
                <button
                  key={item.label}
                  className={`w-full flex items-center justify-between p-3 rounded-xl transition-all cursor-pointer ${item.active ? 'bg-primary/5 text-primary' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={18} />
                    <span className="text-sm font-bold">{item.label}</span>
                  </div>
                  {item.active && <ChevronRight size={14} />}
                </button>
              ))}
            </nav>

            <div className="h-px bg-slate-100" />

            <button className="w-full flex items-center gap-3 p-3 text-red-500 hover:bg-red-50 rounded-xl transition-all cursor-pointer">
              <LogOut size={18} />
              <span className="text-sm font-bold">Logout</span>
            </button>
          </div>

          <div className="bg-slate-900 rounded-3xl p-6 text-white space-y-4 relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-[10px] font-black text-primary uppercase tracking-widest">Rewards</span>
              <h4 className="font-bold text-lg leading-tight">You have 2,450 points</h4>
              <p className="text-xs text-slate-400">Redeem for exclusive discounts.</p>
              <button className="mt-4 px-4 py-2 bg-primary text-white text-xs font-bold rounded-lg hover:bg-orange-600 transition-colors cursor-pointer">View Rewards</button>
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 space-y-12">
          {/* Welcome Banner */}
          <section className="bg-white p-8 rounded-3xl border border-slate-100 flex flex-col md:row justify-between items-center gap-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Welcome back, John! 👋</h2>
              <p className="text-slate-500">You have 2 active orders and 1 item in your wishlist.</p>
            </div>
            <div className="flex gap-4">
              <div className="text-center px-6 py-4 bg-slate-50 rounded-2xl">
                <p className="text-2xl font-black text-slate-900">12</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Orders</p>
              </div>
              <div className="text-center px-6 py-4 bg-slate-50 rounded-2xl">
                <p className="text-2xl font-black text-primary">$4.2k</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Spent</p>
              </div>
            </div>
          </section>

          {/* Recent Orders */}
          <section className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-black text-slate-900 tracking-tight">RECENT ORDERS</h3>
              <button className="text-sm font-bold text-primary hover:underline cursor-pointer">View All</button>
            </div>
            <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-100">
                  <tr>
                    <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">Order ID</th>
                    <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">Date</th>
                    <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">Status</th>
                    <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">Total</th>
                    <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {ORDERS.map((order) => (
                    <tr key={order.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-bold text-slate-900">{order.id}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">{order.date}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                          order.status === 'Shipped' ? 'bg-blue-100 text-blue-600' :
                          order.status === 'Delivered' ? 'bg-emerald-100 text-emerald-600' :
                          'bg-orange-100 text-orange-600'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-black text-slate-900">${order.total.toLocaleString()}</td>
                      <td className="px-6 py-4">
                        <button className="text-sm font-bold text-primary hover:underline cursor-pointer">Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Wishlist Preview */}
          <section className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-black text-slate-900 tracking-tight">YOUR WISHLIST</h3>
              <button className="text-sm font-bold text-primary hover:underline cursor-pointer">Manage Wishlist</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {wishlist.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group cursor-pointer">
                  <div className="aspect-square rounded-2xl bg-slate-50 mb-4 p-4 flex items-center justify-center overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform" referrerPolicy="no-referrer" />
                  </div>
                  <h4 className="font-bold text-slate-900 line-clamp-1">{item.name}</h4>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-black text-primary">${item.price.toLocaleString()}</span>
                    <button className="text-xs font-bold text-slate-400 hover:text-primary transition-colors cursor-pointer">Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
