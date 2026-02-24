import React, { useState } from 'react';
import { Box, Mail, Lock, ArrowRight, Github, Layout, ShieldCheck, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FormInput } from '@/components/ui';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("name", name)
    localStorage.setItem("password", password)
    navigate("/seed-phrase")
  };

  return (
    <div className="w-full min-h-screen bg-[#050807] flex flex-col md:flex-row relative overflow-hidden">
      {/* Decoration */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(212,255,0,0.1), rgba(212,255,0,0.1) 4px, transparent 4px, transparent 8px)'
        }}
      />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#D4FF00] opacity-5 blur-[120px] rounded-full" />

      {/* Sidebar / Branding (Desktop Only) */}
      <div className="hidden md:flex w-1/2 bg-[#0C120F] p-16 flex-col justify-between border-r border-white/5 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-12">
            <Box className="w-10 h-10 text-[#D4FF00] stroke-[2.5]" />
            <h1 className="text-3xl font-extrabold text-white tracking-tight">uWallet</h1>
          </div>
          <h2 className="text-5xl font-extrabold text-white leading-tight tracking-tighter">
            The secure <br /> way to <span className="text-[#D4FF00]">Web3</span>.
          </h2>
        </div>
        <div className="space-y-4">
          <p className="text-[#8FA396] text-lg max-w-sm">
            Join 500k+ users managing their assets with military-grade security.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white">
              <Zap className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white">
              <Globe className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Form Area */}
      <div className="flex-1 p-8 md:p-16 flex flex-col justify-center relative z-10">
        <div className="max-w-md mx-auto w-full space-y-8">
          {/* Mobile Header */}
          <div className="md:hidden flex flex-col items-center mb-10">
            <Box className="w-12 h-12 text-[#D4FF00] mb-4" />
            <h1 className="text-3xl font-extrabold text-white">Welcome Back</h1>
          </div>

          <div className="text-center md:text-left">
            <h3 className="hidden md:block text-3xl font-bold text-white mb-2 tracking-tight">Sign In</h3>
            <p className="text-[#8FA396]">Enter your credentials to access your dashboard.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <FormInput
              label="Name"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              icon={Mail}
              required
            />

            <FormInput
              label="Password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              icon={Lock}
              rightLink={{ href: '#', text: 'Forgot?' }}
              required
            />

            <button
              type="submit"
              className="w-full bg-[#D4FF00] hover:bg-[#bce600] text-black font-extrabold py-4 rounded-2xl shadow-lg shadow-[#D4FF00]/10 transition-all flex items-center justify-center gap-2 group"
            >
              Log In
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/5" />
            </div>
            <div className="relative flex justify-center text-[10px] uppercase font-bold tracking-widest">
              <span className="bg-[#050807] px-4 text-[#8FA396]">Or continue with</span>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 bg-[#1A2920] border border-white/5 hover:border-white/10 py-3 rounded-2xl transition-colors">
              <Github className="w-4 h-4 text-white" />
              <span className="text-xs font-bold text-white">GitHub</span>
            </button>
            <button className="flex items-center justify-center gap-2 bg-[#1A2920] border border-white/5 hover:border-white/10 py-3 rounded-2xl transition-colors">
              <Layout className="w-4 h-4 text-white" />
              <span className="text-xs font-bold text-white">Wallet</span>
            </button>
          </div>

          <p className="text-center text-[#8FA396] text-sm">
            Don't have an account?{' '}
            <Link to="/signup" className="text-[#D4FF00] font-bold hover:underline">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
