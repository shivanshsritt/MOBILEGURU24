import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProductById } from '../data/products';
import { ArrowLeft, ShoppingCart, Check } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id || '');

  if (!product) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center pt-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Product Not Found</h2>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-semibold"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ x: -5 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 font-semibold"
        >
          <ArrowLeft size={20} />
          Back
        </motion.button>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-30"
              animate={{
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[500px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-block px-4 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-semibold mb-4 uppercase"
              >
                {product.category}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl font-bold text-white mb-4"
              >
                {product.name}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-baseline gap-2"
              >
                <span className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
                  ${product.price}
                </span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-3"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                Key Features
              </h3>
              {product.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <div className="p-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600">
                    <Check size={16} className="text-white" />
                  </div>
                  <span>{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                Full Specifications
              </h3>
              <div className="space-y-3">
                {Object.entries(product.specs).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.05 }}
                    className="flex justify-between items-center py-2 border-b border-gray-700 last:border-0"
                  >
                    <span className="text-gray-400 font-medium">{key}</span>
                    <span className="text-white font-semibold text-right">
                      {value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full relative group overflow-hidden px-8 py-4 rounded-xl font-bold text-white text-lg"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <span className="relative z-10 flex items-center justify-center gap-3">
                <ShoppingCart size={24} />
                Buy Now
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
