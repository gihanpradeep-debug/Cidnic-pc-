import React, { useState } from 'react';
import { Cpu, Zap, Database, HardDrive, Monitor, Wind, ChevronRight, Check, Info, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { motion } from 'motion/react';

export const Configurator: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState<Record<number, string>>({});

  const steps = [
    { id: 1, name: 'Processor', icon: Cpu, options: PRODUCTS.filter(p => p.category === 'Processors' || p.id === '8') },
    { id: 2, name: 'Graphics', icon: Zap, options: PRODUCTS.filter(p => p.category === 'Graphics Cards') },
    { id: 3, name: 'Memory', icon: Database, options: PRODUCTS.filter(p => p.category === 'Memory' || p.id === '2') },
    { id: 4, name: 'Storage', icon: HardDrive, options: PRODUCTS.filter(p => p.category === 'Storage' || p.id === '3') },
    { id: 5, name: 'Cooling', icon: Wind, options: PRODUCTS.slice(0, 3) },
  ];

  const currentStep = steps.find(s => s.id === step);
  const total = Object.values(selections).reduce((acc: number, id) => {
    const p = PRODUCTS.find(prod => prod.id === id);
    return acc + (p?.price || 0);
  }, 1200); // Base price for case/psu/mobo

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Main Configurator */}
        <div className="flex-1 space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">PC CONFIGURATOR</h1>
            <p className="text-slate-500">Build your ultimate machine step-by-step with expert guidance.</p>
          </div>

          {/* Step Indicator */}
          <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-100 overflow-x-auto no-scrollbar">
            {steps.map((s, i) => (
              <React.Fragment key={s.id}>
                <button
                  onClick={() => setStep(s.id)}
                  className={`flex flex-col items-center gap-2 min-w-[80px] transition-all cursor-pointer ${step === s.id ? 'text-primary' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${step === s.id ? 'bg-primary text-white shadow-lg shadow-primary/20' : selections[s.id] ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-50'}`}>
                    {selections[s.id] ? <Check size={18} /> : <s.icon size={18} />}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest">{s.name}</span>
                </button>
                {i < steps.length - 1 && <div className="w-8 h-px bg-slate-100 flex-shrink-0" />}
              </React.Fragment>
            ))}
          </div>

          {/* Component Selection */}
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Select {currentStep?.name}</h2>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                <Info size={14} />
                <span>Need help choosing?</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentStep?.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelections({ ...selections, [step]: option.id })}
                  className={`relative flex items-center gap-6 p-6 rounded-3xl border-2 transition-all text-left cursor-pointer group ${selections[step] === option.id ? 'border-primary bg-primary/5' : 'border-slate-100 bg-white hover:border-slate-200'}`}
                >
                  <div className="w-24 h-24 rounded-2xl bg-slate-50 p-4 flex-shrink-0">
                    <img src={option.image} alt={option.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h4 className="font-bold text-slate-900 leading-tight">{option.name}</h4>
                    <p className="text-xs text-slate-500 line-clamp-2">{option.description}</p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="font-black text-slate-900">${option.price.toLocaleString()}</span>
                      {selections[step] === option.id && (
                        <span className="text-[10px] font-black text-primary uppercase tracking-widest flex items-center gap-1">
                          <Check size={12} /> Selected
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between pt-8">
            <button 
              disabled={step === 1}
              onClick={() => setStep(step - 1)}
              className="px-8 py-4 text-slate-400 font-bold hover:text-slate-600 disabled:opacity-0 transition-all cursor-pointer"
            >
              Previous Step
            </button>
            <button 
              onClick={() => step === steps.length ? null : setStep(step + 1)}
              className="px-12 py-4 bg-slate-900 text-white font-black rounded-xl hover:bg-primary transition-all flex items-center gap-2 cursor-pointer"
            >
              {step === steps.length ? 'Review Build' : 'Next Step'} <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Live Build Summary */}
        <aside className="w-full lg:w-96 space-y-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 space-y-8 sticky top-24">
            <div className="space-y-2">
              <h3 className="text-xl font-black text-slate-900 tracking-tight">BUILD SUMMARY</h3>
              <div className="flex items-center gap-2">
                <div className="h-1 flex-1 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-primary transition-all duration-500" style={{ width: `${(Object.keys(selections).length / steps.length) * 100}%` }} />
                </div>
                <span className="text-[10px] font-black text-primary">{Math.round((Object.keys(selections).length / steps.length) * 100)}%</span>
              </div>
            </div>

            <div className="space-y-4">
              {steps.map((s) => {
                const selectedId = selections[s.id];
                const product = PRODUCTS.find(p => p.id === selectedId);
                return (
                  <div key={s.id} className="flex justify-between items-start gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${product ? 'bg-primary/10 text-primary' : 'bg-slate-50 text-slate-300'}`}>
                        <s.icon size={14} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{s.name}</p>
                        <p className={`text-xs font-bold ${product ? 'text-slate-900' : 'text-slate-300 italic'}`}>
                          {product ? product.name : 'Not selected'}
                        </p>
                      </div>
                    </div>
                    {product && <span className="text-xs font-black text-slate-900">${product.price.toLocaleString()}</span>}
                  </div>
                );
              })}
              <div className="flex justify-between items-start gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400">
                    <Monitor size={14} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Base Components</p>
                    <p className="text-xs font-bold text-slate-900">Case, PSU, Motherboard</p>
                  </div>
                </div>
                <span className="text-xs font-black text-slate-900">$1,200</span>
              </div>
            </div>

            <div className="h-px bg-slate-100" />

            <div className="flex justify-between items-center">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Estimated Total</p>
                <p className="text-3xl font-black text-primary">${total.toLocaleString()}</p>
              </div>
              <button className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <ArrowRight size={20} />
              </button>
            </div>

            <button className="w-full py-4 bg-primary/10 text-primary font-black rounded-xl hover:bg-primary hover:text-white transition-all cursor-pointer">
              SAVE CONFIGURATION
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};
