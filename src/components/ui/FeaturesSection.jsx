import React from 'react';
import { Shield, Zap, Globe, RefreshCw, Image, Layers } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Military-Grade Security',
    description: 'End-to-end encryption with biometric authentication. Your keys, your crypto, always.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Instant transactions with optimized gas fees. Never wait for confirmations again.',
  },
  {
    icon: Globe,
    title: 'Multi-Chain Support',
    description: 'Ethereum, Solana, Polygon, and 50+ more chains all in one unified wallet.',
  },
  {
    icon: RefreshCw,
    title: 'Built-in Swap',
    description: 'Swap any token directly in the app with the best rates aggregated from DEXs.',
  },
  {
    icon: Image,
    title: 'NFT Gallery',
    description: 'View, manage, and showcase your NFT collection with a beautiful gallery view.',
  },
  {
    icon: Layers,
    title: 'Staking Rewards',
    description: 'Earn passive income by staking your assets directly through the app.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="px-6 py-16 md:px-12 lg:px-16">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-[#D4FF00]">Features</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-4">Everything You Need</h2>
        <p className="text-lg text-[#8FA396] mt-4 max-w-xl mx-auto">
          A complete Web3 toolkit designed for both beginners and power users.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group bg-[#142018] rounded-[32px] p-8 border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:border-[#D4FF00]/30 relative overflow-hidden"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#1A2920] flex items-center justify-center text-[#D4FF00] mb-6 transition-all duration-300 group-hover:bg-[#D4FF00] group-hover:text-black">
              <feature.icon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-sm text-[#8FA396] leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
