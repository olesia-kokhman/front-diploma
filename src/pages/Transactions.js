import React from 'react';
import TransactionModal from "../components/ui/transactions/TransactionModal/TransactionModal";
import TransactionHistory from "../components/ui/transactions/TransactionHistory/TransactionHistory";
import FilterBar from "../components/ui/FilterBar/FilterBar";

const Transactions = () => {
    return (
        <div>
            <h1>Transactions</h1>
            <p>View and manage your financial transactions.</p>
            <FilterBar/>
            <SearchBar/>
            <TransactionHistory/>
            <TransactionModal/>
        </div>
    );
};

export default Transactions;