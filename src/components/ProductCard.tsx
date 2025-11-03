import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Product } from '../data/products';
import { Eye, DollarSign } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      <motion.div
        className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ filter: 'blur(20px)' }}
        />

        <motion.div
          className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"
          style={{ zIndex: -1 }}
        />

        <div className="relative z-10 p-6">
          <div className="relative h-64 mb-4 overflow-hidden rounded-xl">
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
            {product.name}
          </h3>

          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="text-green-400" size={20} />
            <span className="text-3xl font-bold text-green-400">
              {product.price}
            </span>
          </div>

          <div className="space-y-2 mb-6">
            {product.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + i * 0.1 }}
                className="flex items-center gap-2 text-gray-300"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span className="text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(`/product/${product.id}`)}
            className="w-full relative group/btn overflow-hidden px-6 py-3 rounded-lg font-semibold text-white"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 transition-transform group-hover/btn:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Eye size={18} />
              View Details
            </span>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
