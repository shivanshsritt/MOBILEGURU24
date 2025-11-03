export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'mobile' | 'laptop' | 'watch' | 'gadget' | 'accessory';
  features: string[];
  specs: {
    [key: string]: string;
  };
}

export const products: Product[] = [
  {
    id: 'mobile-1',
    name: 'Quantum X Pro',
    price: 1299,
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'mobile',
    features: ['6.8" OLED Display', '200MP Camera', '5000mAh Battery'],
    specs: {
      Display: '6.8" AMOLED, 120Hz',
      Processor: 'Snapdragon 8 Gen 3',
      RAM: '12GB LPDDR5',
      Storage: '512GB UFS 4.0',
      Camera: '200MP + 50MP + 12MP',
      Battery: '5000mAh, 65W Fast Charging',
      OS: 'Android 14'
    }
  },
  {
    id: 'mobile-2',
    name: 'Stellar Edge',
    price: 999,
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'mobile',
    features: ['Under-display Camera', 'AI Photography', 'Titanium Frame'],
    specs: {
      Display: '6.7" Dynamic AMOLED, 144Hz',
      Processor: 'Dimensity 9300',
      RAM: '16GB',
      Storage: '256GB',
      Camera: '108MP + 48MP + 12MP',
      Battery: '4800mAh, 120W SuperCharge',
      OS: 'Android 14'
    }
  },
  {
    id: 'mobile-3',
    name: 'Infinity Fold',
    price: 1799,
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'mobile',
    features: ['Foldable Display', 'S-Pen Support', 'Dual Battery'],
    specs: {
      Display: '7.6" Foldable AMOLED, 120Hz',
      Processor: 'Snapdragon 8 Gen 3',
      RAM: '12GB',
      Storage: '1TB',
      Camera: '50MP + 50MP + 12MP',
      Battery: '4400mAh, 45W Fast Charging',
      OS: 'Android 14'
    }
  },
  {
    id: 'laptop-1',
    name: 'UltraBook Pro X',
    price: 2499,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
    category: 'laptop',
    features: ['4K OLED Display', 'RTX 4070', '32GB RAM'],
    specs: {
      Display: '15.6" 4K OLED, 120Hz',
      Processor: 'Intel Core i9-14900H',
      GPU: 'NVIDIA RTX 4070 8GB',
      RAM: '32GB DDR5',
      Storage: '1TB NVMe SSD',
      Battery: '90Wh, up to 10 hours',
      Weight: '1.8kg'
    }
  },
  {
    id: 'laptop-2',
    name: 'Creator Elite',
    price: 3299,
    image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'laptop',
    features: ['Touch Bar', 'Studio Display', 'M3 Pro'],
    specs: {
      Display: '16" Liquid Retina XDR',
      Processor: 'Apple M3 Pro',
      GPU: '18-core GPU',
      RAM: '36GB Unified Memory',
      Storage: '1TB SSD',
      Battery: 'Up to 22 hours',
      Weight: '2.1kg'
    }
  },
  {
    id: 'laptop-3',
    name: 'Gaming Beast Z',
    price: 2799,
    image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
    category: 'laptop',
    features: ['RGB Keyboard', 'RTX 4080', 'Liquid Cooling'],
    specs: {
      Display: '17.3" QHD, 240Hz',
      Processor: 'AMD Ryzen 9 7945HX',
      GPU: 'NVIDIA RTX 4080 12GB',
      RAM: '64GB DDR5',
      Storage: '2TB NVMe SSD',
      Battery: '99Wh, up to 6 hours',
      Weight: '2.9kg'
    }
  },
  {
    id: 'watch-1',
    name: 'Zenith Smart Pro',
    price: 499,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'watch',
    features: ['ECG Monitor', 'GPS Tracking', '7-Day Battery'],
    specs: {
      Display: '1.9" AMOLED, Always-On',
      Battery: '7 days typical use',
      'Water Resistance': '5 ATM',
      Sensors: 'Heart Rate, SpO2, ECG, GPS',
      Connectivity: 'Bluetooth 5.3, Wi-Fi, LTE',
      Compatibility: 'iOS & Android',
      Weight: '42g'
    }
  },
  {
    id: 'watch-2',
    name: 'Pulse Elite',
    price: 699,
    image: 'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'watch',
    features: ['Titanium Case', 'Blood Pressure', 'Sapphire Glass'],
    specs: {
      Display: '1.92" Retina LTPO',
      Battery: '36 hours',
      'Water Resistance': '10 ATM',
      Sensors: 'Blood Pressure, Temperature, Heart Rate',
      Connectivity: 'Bluetooth 5.3, Wi-Fi, 5G',
      Compatibility: 'iOS',
      Weight: '49g'
    }
  },
  {
    id: 'watch-3',
    name: 'Athlete Max',
    price: 349,
    image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'watch',
    features: ['100+ Sports Modes', 'Music Storage', '14-Day Battery'],
    specs: {
      Display: '1.43" AMOLED',
      Battery: '14 days',
      'Water Resistance': '5 ATM',
      Sensors: 'Heart Rate, SpO2, GPS, Barometer',
      Connectivity: 'Bluetooth 5.2',
      Compatibility: 'iOS & Android',
      Weight: '35g'
    }
  },
  {
    id: 'gadget-1',
    name: 'AeroPods Max',
    price: 299,
    image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'gadget',
    features: ['Active Noise Cancellation', '40-Hour Battery', 'Spatial Audio'],
    specs: {
      Type: 'Over-ear Wireless',
      'Noise Cancellation': 'Adaptive ANC',
      Battery: '40 hours with ANC',
      Drivers: '45mm Dynamic',
      Connectivity: 'Bluetooth 5.3, USB-C',
      Weight: '385g',
      Features: 'Spatial Audio, Transparency Mode'
    }
  },
  {
    id: 'gadget-2',
    name: 'VR Odyssey',
    price: 599,
    image: 'https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'gadget',
    features: ['4K Per Eye', 'Hand Tracking', 'Wireless PC VR'],
    specs: {
      Display: 'Dual 4K OLED',
      'Refresh Rate': '120Hz',
      'Field of View': '110°',
      Tracking: '6DOF, Hand & Eye Tracking',
      Connectivity: 'Wi-Fi 6E, USB-C',
      Battery: '3 hours gameplay',
      Weight: '515g'
    }
  },
  {
    id: 'gadget-3',
    name: 'Smart Home Hub',
    price: 199,
    image: 'https://images.pexels.com/photos/4219861/pexels-photo-4219861.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'gadget',
    features: ['Voice Control', 'Matter Support', '10" Display'],
    specs: {
      Display: '10" HD Touchscreen',
      Processor: 'Octa-core',
      Speakers: 'Dual 2" Full-range',
      Camera: '13MP Wide-angle',
      Connectivity: 'Wi-Fi 6, Zigbee, Thread, Bluetooth',
      Compatibility: 'Matter, Alexa, Google Home',
      Power: 'Wired, 30W'
    }
  },
  {
    id: 'accessory-1',
    name: 'PowerBank Ultra',
    price: 89,
    image: 'https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'accessory',
    features: ['30000mAh Capacity', '100W Output', 'USB-C PD'],
    specs: {
      Capacity: '30000mAh',
      'Max Output': '100W USB-C PD',
      Ports: '2x USB-C, 1x USB-A',
      'Charge Time': '2 hours (100W input)',
      Display: 'LED percentage display',
      Weight: '680g',
      Features: 'Pass-through charging, Low-current mode'
    }
  },
  {
    id: 'accessory-2',
    name: 'Wireless Charger Pro',
    price: 79,
    image: 'https://images.pexels.com/photos/4613868/pexels-photo-4613868.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'accessory',
    features: ['3-in-1 Charging', 'MagSafe Compatible', 'Ambient Light'],
    specs: {
      Type: '3-in-1 Wireless Charger',
      'Phone Output': '15W Fast Wireless',
      'Watch Output': '5W',
      'Earbuds Output': '5W',
      Compatibility: 'MagSafe, Qi-enabled devices',
      Features: 'Ambient LED light, Foldable',
      Power: '30W adapter included'
    }
  },
  {
    id: 'accessory-3',
    name: 'Smart Backpack',
    price: 149,
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'accessory',
    features: ['USB Charging Port', 'Anti-Theft', 'Water Resistant'],
    specs: {
      Capacity: '30L',
      'Laptop Compartment': 'Up to 17"',
      Material: 'Water-resistant Nylon',
      Features: 'USB charging port, TSA-approved, RFID protection',
      Pockets: '12 compartments',
      Weight: '1.2kg',
      Warranty: '2 years'
    }
  }
];

export const getCategoryProducts = (category: string, limit?: number) => {
  const filtered = products.filter(p => p.category === category);
  return limit ? filtered.slice(0, limit) : filtered;
};

export const getProductById = (id: string) => {
  return products.find(p => p.id === id);
};
