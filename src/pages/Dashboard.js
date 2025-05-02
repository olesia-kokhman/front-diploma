import React from 'react';
import TransactionModal from "../components/ui/transactions/TransactionModal/TransactionModal";

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to your personal finance dashboard.</p>
            <TransactionModal/>
        </div>
    );
};

export default Dashboard;