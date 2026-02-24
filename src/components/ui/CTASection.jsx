import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="px-6 py-16 md:px-12">
      <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#142018] to-[#0C120F] rounded-[40px] p-12 md:p-16 border border-white/5 text-center relative overflow-hidden">
        {/* Top gradient line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#D4FF00] to-transparent" />

        {/* Bottom glow */}
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D4FF00] opacity-5 blur-[100px] rounded-full" />

        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 relative z-10">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-[#8FA396] mb-10 max-w-xl mx-auto relative z-10">
          Join 500,000+ users who trust uWallet to manage their digital assets securely.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          <Link
            to="/signup"
            className="inline-flex items-center justify-center gap-2 bg-[#D4FF00] hover:bg-[#bce600] text-black font-bold text-lg px-8 py-4 rounded-full transition-all hover:scale-[1.02]"
          >
            Create Free Account
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/signin"
            className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/10 hover:bg-white/5 text-white font-bold text-lg px-8 py-4 rounded-full transition-colors"
          >
            Sign In
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
