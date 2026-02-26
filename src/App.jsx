import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage, Dashboard, ProfilePage, AssetsPage, SwapPage, AirdropPage, SettingsPage } from './pages';
import { LogIn, SeedPhrasePage } from '@/features/auth';
import TransactionTestPage from './pages/TransactionTestPage';
import SendPage from './pages/SendPage';
import AirdropTestPage from './pages/AirdropTestPage';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/assets" element={<AssetsPage />} />
        <Route path="/airdrop" element={<AirdropPage />} />
        <Route path="/assets/swap" element={<SwapPage />} />
        <Route path="/profile" element={<SettingsPage />} />
        <Route path="/seed-phrase" element={<SeedPhrasePage />} />
        <Route path="/test-transactions" element={<TransactionTestPage />} />
        <Route path="/assets/transation" element={<SendPage />} />
        <Route path="/test-airdrop" element={<AirdropTestPage />} />
      </Routes>
    </Router>
  );
}

export default App;
