import { Product, Order } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'RTX 4090 Founders Edition',
    category: 'Graphics Cards',
    price: 1599.99,
    rating: 5,
    reviews: 128,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAS9WvBa3u6OId9CUND8Vj9h2Ldd_GiTiLNB5gMRo_xj2QAWV33AmUTW_1pCC7ikwnvx8QPb6BWZNBuUAJHruMua4Q9eZDFFhzLj4YW9EsaJBw0v87e-MFcXtqQT59LsCUBnMeZ6CiZ17zv2C_4x765RSXu2acdn-Y5lT5cbLwpdhp_z8cVRCdG6Ve4Z-Ga2aQ0vUthBoP4W2w86wB41AGtqY60dldQ6t0Lp78edX95YxvWZoq528khHmQHoK_6ohbRnU1x56ojhzeY',
    description: 'The ultimate GeForce GPU. It brings an enormous leap in performance and AI-powered graphics.',
    isHot: true
  },
  {
    id: '2',
    name: 'Pro-Click Mechanical V3',
    category: 'Gaming',
    price: 149.00,
    rating: 4,
    reviews: 84,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEYln2Tni1XXAdJymMmmD5FhFY6JsVsQdEjcIyKMpCutydbVgNRGQVs4xuol_rZUpGW3RFyeA6GDPINyOfPZyQuaMuLmBjyf_xLAV2pQ_PlUM_9M6JfTF4QOIxSuoIBy7NSqjJbEPH1uRU083YRAnkdklK1DcT3V1GWPlBKTy37lvGAbNwifqVbkrdHYOlk8RfRHQZeV03BNYsdntb6NwuHti038n6h9XV1O1x6sQuhxtd2tn2wNzbloyE_J4ZUKpz2dzoaLu932J-',
    description: 'Precision mechanical switches for the ultimate gaming experience.'
  },
  {
    id: '3',
    name: '34" Ultra-Wide OLED Curve',
    category: 'Components',
    price: 899.99,
    rating: 5,
    reviews: 210,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDg2OaSoss-Les84VC_YHqHljSooSjcd6yvmvsZV3kYuS7pKP28ju5f6ibSMmdiFVidEopBMcjAYglUw8k60Y_HURHCjk-9KGwEKMY3QXwPAUEHiz90_ZML98tAP9lHmgJmKbLK_Ts2H4arZs1FoYhYUsnAvwWfBeaV5SL5vNtb1od3BtsJpaAArZfnON-OBVQ-aqyPJib-dBgYj82y9POaItn_ppYF9yTdJ0GJeYhuf70PB0HKlp5rWVksc2B1u9YUm_d6MesrWrPD',
    description: 'Immersive OLED display with ultra-wide perspective.'
  },
  {
    id: '4',
    name: 'Hyper-Sonic Wireless Z2',
    category: 'Audio',
    price: 199.00,
    rating: 4,
    reviews: 52,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYNgyA5AJFWWW97NRdGx13XA0UzdBxnnoPxFWhceHphunSBvE9Qdu9VjLP8wceprVVI06OruGvQ0zelirbOfTvW06wiLK10JgMRQN24kYrKqu9Ly4siRxDsMf4JaZBoEjEW7XyNCYe9LcHhErpWNGVae3yY2hzLWQtovA-XHZsQCzEoNzx-d46t1XTKBph0j0h2YuO-y4R_cuvOUhjLbIBueNJkdGDUFTBV0BXWEpn1OOFL_RIrcodW3HYEtPE0AMtfCbqfal7paXB',
    description: 'Crystal clear wireless audio for gaming and music.'
  },
  {
    id: '5',
    name: 'Radeon RX 7900 XTX',
    category: 'Graphics Cards',
    price: 949.00,
    rating: 4,
    reviews: 128,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3kzWKn5gVDVxfXNmpyYfrDgItFh2rPqNDzvnUpYG1Jalrfv2xii3p_KiQ1qJy2r4KREGLg2klCpD_cSh_JluOcjiqgBjgmR-3Sq7ORRamWngQq8iyw3-951FhTmvi6eBUdhujOinIJlTq1f0AB0qtgOH3j9anCzagGqzm5si-jE-SJLkGt4O6KtTmqJtY13KtHe6ovnKFmWYFua9CnEmnfEQzYMEBYpIBvYWvDQwVf23owDt3VTmLHuEgQJSnHgaF-ED2S0qS75-Z',
    description: 'Experience unprecedented performance, visuals, and efficiency at 4K and beyond.',
    isBestValue: true
  },
  {
    id: '6',
    name: 'RTX 4070 Ti White',
    category: 'Graphics Cards',
    price: 799.00,
    rating: 5,
    reviews: 89,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6SS9YaJfvUEl6vmwZAHuC6Nbeve7T9BDDtEDiSyGMVGAp5x9Lqw5dtD2QO7DD37OTnn5fTddZZqjNwz2184P2uaelRETNZIE2T8rsMeC2LrRmFrXBUJl7NBjiNF3yo6WDF6epk5lVKqFj0FPGphipif4ArkyBtwCxlk74MXjH_NCcIc9JYj_Qc-HXRRdNNhXzAimB8vxJ_32zgQzarvYm0BLaIBZoK6-pGquLEA8qprdFCHw9yyKQpIdus2FVg_Sy3M0e88ksPvmg',
    description: 'Aesthetic white shroud design perfect for clean builds with dual-fan cooling.'
  },
  {
    id: '7',
    name: 'ROG Strix RTX 4080',
    category: 'Graphics Cards',
    price: 1199.00,
    rating: 5,
    reviews: 211,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSx_b6qNKC4WJimFBxA3WN4kGNscTXNPxIhgb6cHUT-KMRi791g0GPDLTkp2UvS_bmXyutJX18GiJVWrniSZVHQnObzKVuTJPqQ96SJXxgciwzUzra2ta-X3o3OebUY635fEIzJVQbLbX1bZjDW38SVUQEkT5prD2i1Xv7AqGgRllXYtIeHbYVhR551HW7JaoYxzzVJg34_0cGFFAVqE6W_A9IvA_841u6JTl1fxzdAl7ckBjsvnQA69XCY-VAQ2B_yzzL6uH89eg4',
    description: 'Premium cooling and construction for elite gaming experiences.',
    isLimited: true
  },
  {
    id: '8',
    name: 'MacBook Pro 16-inch M3 Max',
    category: 'Laptops',
    price: 3499.00,
    rating: 4.9,
    reviews: 1250,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgMij8DtZ_iS3VPrE9LiuKIdVr3_l6raZYlKkzo7CBjwAXCcY5LAAtYgBu6HloHTF1_YN8Qc5UIamTOztJipuua0ayCLTEGky9w7hx0GNcXRlmoxtNb6k6QlcEuLgmP7Zx3FCqDZmKyp-MPHLQTsGwLO37OVquLaFkLMykRaSmYN6yry9Pd3FY-WxYch1-w4xMNF46z_7hLSoga80Dvr6371FXy3e6Td1BCYhDGrH6n5rWQ4LD_UIP9NPQjU9cHX4ugyGHoprrA6p2',
    description: 'The most powerful MacBook ever. Built for creators and professionals.',
    isNew: true
  }
];

export const ORDERS: Order[] = [
  { id: '#TS-9842', date: 'Oct 12, 2023', total: 1299.00, status: 'Shipped', tracking: 'Track Package' },
  { id: '#TS-9721', date: 'Oct 05, 2023', total: 89.00, status: 'Delivered' },
  { id: '#TS-9655', date: 'Sep 28, 2023', total: 249.50, status: 'Processing' }
];
