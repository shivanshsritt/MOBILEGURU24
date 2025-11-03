import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { getCategoryProducts } from '../data/products';
import { Smartphone, Laptop, Watch, Zap, Package } from 'lucide-react';

const categoryConfig: Record<string, { title: string; icon: any; gradient: string }> = {
  mobiles: { title: 'Premium Mobiles', icon: Smartphone, gradient: 'from-cyan-500 to-blue-600' },
  laptops: { title: 'Power Laptops', icon: Laptop, gradient: 'from-blue-500 to-purple-600' },
  watches: { title: 'Smart Watches', icon: Watch, gradient: 'from-purple-500 to-pink-600' },
  gadgets: { title: 'Amazing Gadgets', icon: Zap, gradient: 'from-pink-500 to-orange-600' },
  accessories: { title: 'Tech Accessories', icon: Package, gradient: 'from-orange-500 to-red-600' },
};

export default function CategoryPage() {
  const { category } = useParams();

  const categoryKey = category || 'mobiles';
  const categoryName = categoryKey.slice(0, -1);
  const config = categoryConfig[categoryKey];
  const products = getCategoryProducts(categoryName);

  if (!config) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center pt-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Category Not Found</h2>
        </div>
      </div>
    );
  }

  const Icon = config.icon;

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, type: 'spring' }}
              className={`p-4 rounded-2xl bg-gradient-to-br ${config.gradient}`}
            >
              <Icon className="text-white" size={40} />
            </motion.div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className={`bg-gradient-to-r ${config.gradient} text-transparent bg-clip-text`}>
                  {config.title}
                </span>
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className={`h-1 bg-gradient-to-r ${config.gradient} rounded-full mt-2`}
              />
            </div>
          </div>
          <p className="text-gray-400 text-lg">
            Explore our curated collection of {products.length} amazing products
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
