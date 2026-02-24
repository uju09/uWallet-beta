import React, { useState } from 'react';
import { Box, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FormInput } from '@/components/ui';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign up:', { firstName, lastName, email, password, agreedToTerms });
  };

  return (
    <div className="w-full min-h-screen bg-[#0C120F] flex flex-col md:flex-row-reverse relative overflow-hidden">
      {/* Decoration */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#14F195]/5 via-transparent to-[#9945FF]/5 opacity-50 pointer-events-none" />

      {/* Visual Sidebar (Desktop Only) */}
      <div className="hidden md:flex w-2/5 bg-black p-12 flex-col justify-center border-l border-white/5 relative">
        <div className="space-y-8">
          <div className="bg-[#142018] border border-white/5 p-6 rounded-[32px] rotate-3 hover:rotate-0 transition-transform cursor-default">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#D4FF00] flex items-center justify-center text-black font-bold">
                1
              </div>
              <h4 className="text-white font-bold">Create Account</h4>
            </div>
            <p className="text-[#8FA396] text-xs leading-relaxed">
              Secure your unique ID on the blockchain and link your multi-chain addresses.
            </p>
          </div>
          <div className="bg-[#142018] border border-white/5 p-6 rounded-[32px] -rotate-3 hover:rotate-0 transition-transform cursor-default opacity-60">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#1A2920] border border-white/10 flex items-center justify-center text-[#8FA396] font-bold">
                2
              </div>
              <h4 className="text-white font-bold">Verify Security</h4>
            </div>
            <p className="text-[#8FA396] text-xs leading-relaxed">
              Setup biometric login and back up your non-custodial recovery phrase.
            </p>
          </div>
        </div>
      </div>

      {/* Form Area */}
      <div className="flex-1 p-8 md:p-16 flex flex-col justify-center bg-[#0C120F] relative z-10">
        <div className="max-w-md mx-auto w-full space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Box className="w-8 h-8 text-[#D4FF00]" />
              <span className="text-xl font-extrabold text-white tracking-tight">uWallet</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">Create Account</h3>
            <p className="text-[#8FA396]">Join the decentralized future in seconds.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormInput
                label="First Name"
                type="text"
                placeholder="Alex"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <FormInput
                label="Last Name"
                type="text"
                placeholder="Doe"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            <FormInput
              label="Email Address"
              type="email"
              placeholder="alex@uwallet.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <FormInput
              label="Password"
              type="password"
              placeholder="Create a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="flex items-start gap-3 px-1 py-2">
              <input
                type="checkbox"
                id="terms"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="mt-1 accent-[#D4FF00]"
                required
              />
              <label htmlFor="terms" className="text-xs text-[#8FA396] leading-relaxed">
                I agree to the <a href="#" className="text-white hover:underline">Terms of Service</a> and{' '}
                <a href="#" className="text-white hover:underline">Privacy Policy</a>.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#D4FF00] hover:bg-[#bce600] text-black font-extrabold py-4 rounded-2xl shadow-lg shadow-[#D4FF00]/10 transition-all flex items-center justify-center gap-2 group"
            >
              Create Account
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <p className="text-center text-[#8FA396] text-sm">
            Already have an account?{' '}
            <Link to="/signin" className="text-[#D4FF00] font-bold hover:underline">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
