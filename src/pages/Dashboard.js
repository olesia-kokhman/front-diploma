import React from 'react';
import TransactionModal from "../components/ui/pages/transactions/TransactionModal/TransactionModal";
import TopSavingTipWidget from "../components/ui/pages/dashboard/TopSavingTipWidget/TopSavingTipWidget";
import UpcomingPaymentWidget from "../components/ui/pages/dashboard/UpcomingPaymentWidget/UpcomingPaymentWidget";
import StockTrendsWidget from "../components/ui/pages/dashboard/StockTrendsWidget/StockTrendsWidget";
import MonthlyBudgetWidget from "../components/ui/pages/dashboard/MonthlyBudgetWidget/MonthlyBudgetWidget";

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to your personal finance dashboard.</p>
            <StockTrendsWidget/>
            <MonthlyBudgetWidget/>
            <UpcomingPaymentWidget/>
            <TopSavingTipWidget/>
            <TransactionModal/>
        </div>
    );
};

export default Dashboard;