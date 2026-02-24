import { ArrowUpRight, Search, Bell } from 'lucide-react';

const AssetsHeader = () => {
  return (
    <header className="sticky top-0 z-30 bg-[#050807]/95 backdrop-blur-sm flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 lg:py-4 border-b border-white/5">
      <div className="w-12 lg:hidden" />
      <h2 className="text-lg font-bold text-white hidden sm:block">Assets Overview</h2>
      <div className="flex-1" />
    </header>
  );
};

export default AssetsHeader;
