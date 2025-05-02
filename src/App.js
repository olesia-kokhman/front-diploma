import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Accounts from './pages/Accounts';
import Budget from './pages/Budget';
import Transactions from './pages/Transactions';
import Analytics from './pages/Analytics';
import Navbar from './components/ui/Navbar/Navbar';
import './App.css';

function App() {
    return (
        <>
            <Navbar />
            <div className="routes">
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/accounts" element={<Accounts />} />
                    <Route path="/budget" element={<Budget />} />
                    <Route path="/transactions" element={<Transactions />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/" element={<Dashboard />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
