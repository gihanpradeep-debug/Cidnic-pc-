import React, { useState } from 'react';
import { ChevronRight, ShieldCheck, Truck, CreditCard, CheckCircle2, MapPin, ShoppingBag, ArrowLeft, Zap } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutProps {
  cart: CartItem[];
  onBack: () => void;
  onComplete: () => void;
}

export const Checkout: React.FC<CheckoutProps> = ({ cart, onBack, onComplete }) => {
  const [step, setStep] = useState(1);
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 500 ? 0 : 25;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Main Checkout Flow */}
        <div className="flex-1 space-y-12">
          {/* Progress Bar */}
          <div className="flex items-center justify-between max-w-md mx-auto">
            {[
              { id: 1, label: 'Shipping', icon: MapPin },
              { id: 2, label: 'Payment', icon: CreditCard },
              { id: 3, label: 'Review', icon: CheckCircle2 },
            ].map((s, i) => (
              <React.Fragment key={s.id}>
                <div className="flex flex-col items-center gap-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${step >= s.id ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400'}`}>
                    <s.icon size={18} />
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-widest ${step >= s.id ? 'text-primary' : 'text-slate-400'}`}>{s.label}</span>
                </div>
                {i < 2 && <div className={`flex-1 h-0.5 mx-4 ${step > s.id ? 'bg-primary' : 'bg-slate-100'}`} />}
              </React.Fragment>
            ))}
          </div>

          {step === 1 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">SHIPPING INFORMATION</h2>
                <button className="text-sm font-bold text-primary hover:underline cursor-pointer">Login for faster checkout</button>
              </div>
              
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-wider">First Name</label>
                  <input type="text" className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-wider">Last Name</label>
                  <input type="text" className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Doe" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-wider">Street Address</label>
                  <input type="text" className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all" placeholder="123 Tech Avenue" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-wider">City</label>
                  <input type="text" className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all" placeholder="San Francisco" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-wider">State</label>
                    <input type="text" className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all" placeholder="CA" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-wider">ZIP Code</label>
                    <input type="text" className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all" placeholder="94103" />
                  </div>
                </div>
              </form>

              <div className="space-y-4">
                <h3 className="font-black text-sm text-slate-900 uppercase tracking-widest">Delivery Method</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { id: 'standard', title: 'Standard Delivery', price: 'Free', time: '3-5 business days', icon: Truck },
                    { id: 'express', title: 'Express Shipping', price: '$25.00', time: 'Next day delivery', icon: Zap },
                  ].map((method) => (
                    <label key={method.id} className="relative flex items-center gap-4 p-4 rounded-2xl border-2 border-slate-100 hover:border-primary/50 cursor-pointer transition-all has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                      <input type="radio" name="delivery" className="hidden" defaultChecked={method.id === 'standard'} />
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600">
                        <method.icon size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-slate-900">{method.title}</span>
                          <span className="text-sm font-black text-primary">{method.price}</span>
                        </div>
                        <p className="text-xs text-slate-500">{method.time}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">PAYMENT METHOD</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { id: 'card', label: 'Credit Card', icon: CreditCard },
                  { id: 'paypal', label: 'PayPal', icon: ShoppingBag },
                  { id: 'crypto', label: 'Crypto', icon: ShieldCheck },
                ].map((p) => (
                  <button key={p.id} className="flex flex-col items-center gap-3 p-6 rounded-2xl border-2 border-slate-100 hover:border-primary transition-all cursor-pointer">
                    <p.icon size={24} className="text-slate-400" />
                    <span className="text-sm font-black uppercase tracking-widest text-slate-600">{p.label}</span>
                  </button>
                ))}
              </div>

              <div className="space-y-6 bg-white p-8 rounded-3xl border border-slate-100">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-wider">Card Number</label>
                  <div className="relative">
                    <input type="text" className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 pl-12 focus:ring-2 focus:ring-primary/20 transition-all" placeholder="0000 0000 0000 0000" />
                    <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-wider">Expiry Date</label>
                    <input type="text" className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all" placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-wider">CVC / CVV</label>
                    <input type="text" className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all" placeholder="123" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">REVIEW YOUR ORDER</h2>
              
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100">
                    <div className="w-20 h-20 rounded-xl bg-slate-50 p-2">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900">{item.name}</h4>
                      <p className="text-xs text-slate-500">Qty: {item.quantity}</p>
                    </div>
                    <span className="font-black text-slate-900">${(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-slate-50 rounded-2xl space-y-2">
                  <h4 className="font-black text-xs uppercase tracking-widest text-slate-400">Shipping To</h4>
                  <p className="font-bold text-slate-900">John Doe</p>
                  <p className="text-sm text-slate-600">123 Tech Avenue, San Francisco, CA 94103</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl space-y-2">
                  <h4 className="font-black text-xs uppercase tracking-widest text-slate-400">Payment Method</h4>
                  <p className="font-bold text-slate-900">Visa ending in 4242</p>
                  <p className="text-sm text-slate-600">Exp: 12/26</p>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between pt-8">
            <button 
              onClick={() => step === 1 ? onBack() : setStep(step - 1)}
              className="px-8 py-4 text-slate-600 font-bold flex items-center gap-2 hover:text-primary transition-colors cursor-pointer"
            >
              <ArrowLeft size={18} /> {step === 1 ? 'Back to Shop' : 'Previous Step'}
            </button>
            <button 
              onClick={() => step === 3 ? onComplete() : setStep(step + 1)}
              className="px-12 py-4 bg-primary text-white font-black rounded-xl hover:bg-orange-600 transition-all shadow-lg shadow-primary/20 flex items-center gap-2 cursor-pointer"
            >
              {step === 3 ? 'Place Order' : 'Continue to Payment'} <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Order Summary Sidebar */}
        <aside className="w-full lg:w-96 space-y-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 space-y-6">
            <h3 className="text-xl font-black text-slate-900 tracking-tight">ORDER SUMMARY</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 font-bold">Subtotal</span>
                <span className="text-slate-900 font-black">${subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 font-bold">Shipping</span>
                <span className="text-emerald-500 font-black">{shipping === 0 ? 'FREE' : `$${shipping}`}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 font-bold">Estimated Tax</span>
                <span className="text-slate-900 font-black">${tax.toLocaleString()}</span>
              </div>
              <div className="h-px bg-slate-100 my-2" />
              <div className="flex justify-between text-xl">
                <span className="text-slate-900 font-black">Total</span>
                <span className="text-primary font-black">${total.toLocaleString()}</span>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <div className="relative">
                <input type="text" placeholder="Promo Code" className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20" />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-primary font-bold text-xs hover:underline cursor-pointer">Apply</button>
              </div>
              <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-xl text-emerald-700">
                <ShieldCheck size={20} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Secure Checkout Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Help Card */}
          <div className="bg-slate-900 rounded-3xl p-8 text-white space-y-4">
            <h4 className="font-bold">Need Help?</h4>
            <p className="text-xs text-slate-400">Our experts are available 24/7 to assist you with your purchase.</p>
            <button className="w-full py-3 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-bold transition-all cursor-pointer">
              Chat with Expert
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};
