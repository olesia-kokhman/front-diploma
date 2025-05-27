import React, {useEffect, useState} from 'react';
import TransactionModal from "../components/ui/pages/transactions/TransactionModal/TransactionModal";
import TopSavingTipWidget from "../components/ui/pages/dashboard/TopSavingTipWidget/TopSavingTipWidget";
import UpcomingPaymentWidget from "../components/ui/pages/dashboard/UpcomingPaymentWidget/UpcomingPaymentWidget";
import StockTrendsWidget from "../components/ui/pages/dashboard/StockTrendsWidget/StockTrendsWidget";
import MonthlyBudgetWidget from "../components/ui/pages/dashboard/MonthlyBudgetWidget/MonthlyBudgetWidget";
import {useFetch} from "../hooks/useFetch";
import AllExpensesDonutChart from "../components/ui/pages/dashboard/AllExpensesDonutChart/AllExpensesDonutChart";

const Dashboard = () => {
    const [showModal, setShowModal] = useState(false);

    const { data: accounts, loading: accountsLoading, error: accountsFetchErrorMessage } =
        useFetch('http://localhost:8080/api/accounts');
    const { data: categories, loading: categoriesLoading, error: categoriesFetchErrorMessage } =
        useFetch('http://localhost:8080/api/categories');

    const { data: gainers, loading: gainersLoading, error: gainersFetchErrorMessage} =
        useFetch('http://localhost:8080/api/stocks/gainers');

    const { data: losers, loading: losersLoading, error: losersFetchErrorMessage} =
        useFetch('http://localhost:8080/api/stocks/losers');

    const { data: tip, loading: tipLoading, error: tipFetchErrorMessage} =
        useFetch('http://localhost:8080/api/saving-tips/random');

    const logError = (label, error) => {
        if (error) console.error(`${label}:`, error);
    };

    useEffect(() => {
        logError("Gainers error", gainersFetchErrorMessage);
        logError("Losers error", losersFetchErrorMessage);
        logError("Tip error", tipFetchErrorMessage);
        logError("Accounts error", accountsFetchErrorMessage);
        logError("Categories error", categoriesFetchErrorMessage);
    }, [
        gainersFetchErrorMessage,
        losersFetchErrorMessage,
        tipFetchErrorMessage,
        accountsFetchErrorMessage,
        categoriesFetchErrorMessage
    ]);

    const handleClose = () => {
        setShowModal(false);
    }

    const handleSave = () => {

    }

    return (
        <div>
            <div className="dashboard-widgets">
                {
                    !gainersLoading && <StockTrendsWidget stocks={gainers}/>
                }

                <MonthlyBudgetWidget  />
                <UpcomingPaymentWidget />
                {
                    !tipLoading && <TopSavingTipWidget tip={tip} />
                }

                {
                    !losersLoading && <StockTrendsWidget stocks={losers}/>
                }
            </div>

            <button onClick={() => {
                setShowModal(true);
            }}>Add transaction</button>
            {showModal && (
                <TransactionModal
                    onSave={handleSave}
                    onClose={handleClose}
                    accounts={accounts}
                    categories={categories}
                />
            )}
            <AllExpensesDonutChart/>
        </div>
    );
};

export default Dashboard;