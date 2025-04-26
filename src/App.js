import React from 'react';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Accounts from './pages/Accounts';
import Budget from './pages/Budget';
import Transactions from './pages/Transactions';
import Analytics from './pages/Analytics';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <h1>Personal Finance App</h1>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/accounts" element={<Accounts />} />
                    <Route path="/budget" element={<Budget />} />
                    <Route path="/transactions" element={<Transactions />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/" element={<Dashboard />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
