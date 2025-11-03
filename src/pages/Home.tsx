import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { getCategoryProducts } from '../data/products';
import { Smartphone, Laptop, Watch, Zap, Package } from 'lucide-react';

const categories = [
  {
    title: 'Mobile of the Month',
    category: 'mobile',
    icon: Smartphone,
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Laptop of the Month',
    category: 'laptop',
    icon: Laptop,
    gradient: 'from-blue-500 to-purple-600',
  },
  {
    title: 'Watch of the Month',
    category: 'watch',
    icon: Watch,
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    title: 'Other Gadgets of the Month',
    category: 'gadget',
    icon: Zap,
    gradient: 'from-pink-500 to-orange-600',
  },
  {
    title: 'Accessory of the Month',
    category: 'accessory',
    icon: Package,
    gradient: 'from-orange-500 to-red-600',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />

      <div id="products" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {categories.map((cat, catIndex) => {
            const products = getCategoryProducts(cat.category, 3);
            const Icon = cat.icon;

            return (
              <motion.section
                key={cat.category}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="mb-20"
              >
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center gap-4 mb-12"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className={`p-4 rounded-2xl bg-gradient-to-br ${cat.gradient}`}
                  >
                    <Icon className="text-white" size={32} />
                  </motion.div>
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold">
                      <span
                        className={`bg-gradient-to-r ${cat.gradient} text-transparent bg-clip-text`}
                      >
                        {cat.title}
                      </span>
                    </h2>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className={`h-1 bg-gradient-to-r ${cat.gradient} rounded-full mt-2`}
                    />
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {products.map((product, index) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      index={catIndex * 3 + index}
                    />
                  ))}
                </div>

                {catIndex < categories.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-20 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
                  />
                )}
              </motion.section>
            );
          })}
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
}
