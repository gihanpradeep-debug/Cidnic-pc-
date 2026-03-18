import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Shield, Truck, Clock, Star, Play } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface HomeProps {
  onProductClick: (product: Product) => void;
  onCategoryClick: (category: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onProductClick, onCategoryClick }) => {
  const featuredProducts = PRODUCTS.slice(0, 4);
  const newArrivals = PRODUCTS.slice(4, 8);

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgMij8DtZ_iS3VPrE9LiuKIdVr3_l6raZYlKkzo7CBjwAXCcY5LAAtYgBu6HloHTF1_YN8Qc5UIamTOztJipuua0ayCLTEGky9w7hx0GNcXRlmoxtNb6k6QlcEuLgmP7Zx3FCqDZmKyp-MPHLQTsGwLO37OVquLaFkLMykRaSmYN6yry9Pd3FY-WxYch1-w4xMNF46z_7hLSoga80Dvr6371FXy3e6Td1BCYhDGrH6n5rWQ4LD_UIP9NPQjU9cHX4ugyGHoprrA6p2"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              <Zap size={14} /> New Season Arrival
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
              UNLEASH THE <span className="text-primary">POWER</span> OF NEXT-GEN
            </h1>
            <p className="text-lg text-slate-300 max-w-lg leading-relaxed">
              Experience unparalleled performance with our curated selection of high-end hardware. 
              From custom PC builds to the latest laptops, we power your passion.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => onCategoryClick('graphics-cards')}
                className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-orange-600 transition-all flex items-center gap-2 group cursor-pointer"
              >
                Shop Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all backdrop-blur-md flex items-center gap-2 cursor-pointer">
                <Play size={20} fill="currentColor" /> Watch Trailer
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-slate-200">
          {[
            { icon: Truck, title: 'Fast Delivery', desc: 'Free on orders over $500' },
            { icon: Shield, title: 'Secure Payment', desc: '100% secure transactions' },
            { icon: Clock, title: '24/7 Support', desc: 'Always here to help you' },
            { icon: Star, title: 'Best Quality', desc: 'Curated premium hardware' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-primary">
                <item.icon size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">{item.title}</h4>
                <p className="text-xs text-slate-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">SHOP BY CATEGORY</h2>
            <p className="text-slate-500">Explore our wide range of premium hardware</p>
          </div>
          <button className="text-primary font-bold flex items-center gap-1 hover:underline cursor-pointer">
            View All <ArrowRight size={16} />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: 'Laptops', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgMij8DtZ_iS3VPrE9LiuKIdVr3_l6raZYlKkzo7CBjwAXCcY5LAAtYgBu6HloHTF1_YN8Qc5UIamTOztJipuua0ayCLTEGky9w7hx0GNcXRlmoxtNb6k6QlcEuLgmP7Zx3FCqDZmKyp-MPHLQTsGwLO37OVquLaFkLMykRaSmYN6yry9Pd3FY-WxYch1-w4xMNF46z_7hLSoga80Dvr6371FXy3e6Td1BCYhDGrH6n5rWQ4LD_UIP9NPQjU9cHX4ugyGHoprrA6p2' },
            { name: 'Graphics Cards', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAS9WvBa3u6OId9CUND8Vj9h2Ldd_GiTiLNB5gMRo_xj2QAWV33AmUTW_1pCC7ikwnvx8QPb6BWZNBuUAJHruMua4Q9eZDFFhzLj4YW9EsaJBw0v87e-MFcXtqQT59LsCUBnMeZ6CiZ17zv2C_4x765RSXu2acdn-Y5lT5cbLwpdhp_z8cVRCdG6Ve4Z-Ga2aQ0vUthBoP4W2w86wB41AGtqY60dldQ6t0Lp78edX95YxvWZoq528khHmQHoK_6ohbRnU1x56ojhzeY' },
            { name: 'Custom PCs', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDg2OaSoss-Les84VC_YHqHljSooSjcd6yvmvsZV3kYuS7pKP28ju5f6ibSMmdiFVidEopBMcjAYglUw8k60Y_HURHCjk-9KGwEKMY3QXwPAUEHiz90_ZML98tAP9lHmgJmKbLK_Ts2H4arZs1FoYhYUsnAvwWfBeaV5SL5vNtb1od3BtsJpaAArZfnON-OBVQ-aqyPJib-dBgYj82y9POaItn_ppYF9yTdJ0GJeYhuf70PB0HKlp5rWVksc2B1u9YUm_d6MesrWrPD' },
            { name: 'Audio', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYNgyA5AJFWWW97NRdGx13XA0UzdBxnnoPxFWhceHphunSBvE9Qdu9VjLP8wceprVVI06OruGvQ0zelirbOfTvW06wiLK10JgMRQN24kYrKqu9Ly4siRxDsMf4JaZBoEjEW7XyNCYe9LcHhErpWNGVae3yY2hzLWQtovA-XHZsQCzEoNzx-d46t1XTKBph0j0h2YuO-y4R_cuvOUhjLbIBueNJkdGDUFTBV0BXWEpn1OOFL_RIrcodW3HYEtPE0AMtfCbqfal7paXB' },
            { name: 'Gaming', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEYln2Tni1XXAdJymMmmD5FhFY6JsVsQdEjcIyKMpCutydbVgNRGQVs4xuol_rZUpGW3RFyeA6GDPINyOfPZyQuaMuLmBjyf_xLAV2pQ_PlUM_9M6JfTF4QOIxSuoIBy7NSqjJbEPH1uRU083YRAnkdklK1DcT3V1GWPlBKTy37lvGAbNwifqVbkrdHYOlk8RfRHQZeV03BNYsdntb6NwuHti038n6h9XV1O1x6sQuhxtd2tn2wNzbloyE_J4ZUKpz2dzoaLu932J-' },
            { name: 'Storage', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3kzWKn5gVDVxfXNmpyYfrDgItFh2rPqNDzvnUpYG1Jalrfv2xii3p_KiQ1qJy2r4KREGLg2klCpD_cSh_JluOcjiqgBjgmR-3Sq7ORRamWngQq8iyw3-951FhTmvi6eBUdhujOinIJlTq1f0AB0qtgOH3j9anCzagGqzm5si-jE-SJLkGt4O6KtTmqJtY13KtHe6ovnKFmWYFua9CnEmnfEQzYMEBYpIBvYWvDQwVf23owDt3VTmLHuEgQJSnHgaF-ED2S0qS75-Z' },
          ].map((cat) => (
            <button
              key={cat.name}
              onClick={() => onCategoryClick(cat.name.toLowerCase().replace(' ', '-'))}
              className="group relative h-40 rounded-2xl overflow-hidden bg-slate-100 cursor-pointer"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-white font-bold text-sm">{cat.name}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">FEATURED DEALS</h2>
            <p className="text-slate-500">Top picks for your ultimate setup</p>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors cursor-pointer">
              <ArrowRight size={18} className="rotate-180" />
            </button>
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors cursor-pointer">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onClick={() => onProductClick(product)} />
          ))}
        </div>
      </section>

      {/* Promo Banner */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 h-[400px] flex items-center">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg2OaSoss-Les84VC_YHqHljSooSjcd6yvmvsZV3kYuS7pKP28ju5f6ibSMmdiFVidEopBMcjAYglUw8k60Y_HURHCjk-9KGwEKMY3QXwPAUEHiz90_ZML98tAP9lHmgJmKbLK_Ts2H4arZs1FoYhYUsnAvwWfBeaV5SL5vNtb1od3BtsJpaAArZfnON-OBVQ-aqyPJib-dBgYj82y9POaItn_ppYF9yTdJ0GJeYhuf70PB0HKlp5rWVksc2B1u9YUm_d6MesrWrPD"
            alt="Promo"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-transparent to-transparent" />
          <div className="relative z-10 px-8 md:px-16 max-w-xl space-y-6">
            <span className="text-primary font-black tracking-widest uppercase text-sm">Limited Offer</span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              BUILD YOUR DREAM PC WITH <span className="text-primary">20% OFF</span>
            </h2>
            <p className="text-slate-300">
              Use code <span className="text-white font-bold">BUILDER20</span> at checkout. 
              Valid for all custom PC configurations and components.
            </p>
            <button className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-all cursor-pointer">
              Start Building
            </button>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">NEW ARRIVALS</h2>
            <p className="text-slate-500">The latest tech just landed</p>
          </div>
          <button className="text-primary font-bold flex items-center gap-1 hover:underline cursor-pointer">
            View All <ArrowRight size={16} />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} onClick={() => onProductClick(product)} />
          ))}
        </div>
      </section>
    </div>
  );
};

const ProductCard: React.FC<{ product: Product; onClick: () => void }> = ({ product, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group bg-white rounded-3xl p-4 border border-slate-100 hover:shadow-2xl hover:shadow-primary/5 transition-all cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-50 mb-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        {product.isHot && (
          <span className="absolute top-3 left-3 px-2 py-1 bg-red-500 text-white text-[10px] font-black uppercase rounded-lg">
            Hot
          </span>
        )}
        {product.isNew && (
          <span className="absolute top-3 left-3 px-2 py-1 bg-primary text-white text-[10px] font-black uppercase rounded-lg">
            New
          </span>
        )}
        <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors">
          <Star size={16} />
        </button>
      </div>
      <div className="space-y-2">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{product.category}</span>
        <h3 className="font-bold text-slate-900 line-clamp-1 group-hover:text-primary transition-colors">{product.name}</h3>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} className={i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-slate-200"} />
          ))}
          <span className="text-[10px] text-slate-400 font-medium">({product.reviews})</span>
        </div>
        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-black text-slate-900">${product.price.toLocaleString()}</span>
          <button className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center hover:bg-primary transition-colors">
            <Zap size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
