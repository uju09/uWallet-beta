import React from 'react';
import { Key, Scan, ShieldAlert, Lock } from 'lucide-react';

const securityFeatures = [
  {
    icon: Key,
    title: 'Non-Custodial Architecture',
    description: 'Your keys are stored locally on your device, encrypted with your biometrics.',
  },
  {
    icon: Scan,
    title: 'Biometric Authentication',
    description: 'Face ID, Touch ID, and fingerprint support for quick and secure access.',
  },
  {
    icon: ShieldAlert,
    title: 'Phishing Protection',
    description: 'Built-in transaction simulation warns you before interacting with malicious contracts.',
  },
];

const SecuritySection = () => {
  return (
    <section id="security" className="px-6 py-16 md:px-12 lg:px-16 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4FF00] opacity-[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4FF00]">Security</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-4 leading-tight">
            Your Assets,<br />Your Control
          </h2>
          <p className="text-lg text-[#8FA396] mt-6 leading-relaxed">
            We take security seriously. uWallet is non-custodial, meaning only you have access to your private keys.
            Your crypto stays safe, even if our servers go down.
          </p>

          <div className="flex flex-col gap-6 mt-10">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1A2920] flex items-center justify-center text-[#D4FF00] shrink-0">
                  <feature.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">{feature.title}</h4>
                  <p className="text-sm text-[#8FA396]">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Card */}
        <div className="relative">
          <div className="bg-[#142018] rounded-[40px] p-10 border border-white/5 relative overflow-hidden">
            {/* Card glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4FF00] opacity-10 blur-[60px] rounded-full" />

            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-[#D4FF00] flex items-center justify-center">
                <Lock className="w-8 h-8 text-black" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Vault Security</h3>
                <p className="text-sm text-[#8FA396]">256-bit AES Encryption</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center p-4 bg-[#0C120F] rounded-2xl border border-white/5">
                <span className="text-sm text-[#8FA396]">Encryption Status</span>
                <span className="text-sm font-bold text-[#14F195]">Active</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-[#0C120F] rounded-2xl border border-white/5">
                <span className="text-sm text-[#8FA396]">Biometrics</span>
                <span className="text-sm font-bold text-[#14F195]">Enabled</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-[#0C120F] rounded-2xl border border-white/5">
                <span className="text-sm text-[#8FA396]">Last Backup</span>
                <span className="text-sm font-bold text-white">Today, 2:30 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
