import React, {useEffect, useState} from 'react';
import TransactionModal from "../components/ui/transactions/TransactionModal/TransactionModal";
import TransactionHistory from "../components/ui/transactions/TransactionHistory/TransactionHistory";
import FilterBar from "../components/ui/FilterBar/FilterBar";
import axios from "axios";

const Transactions = () => {

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8080/api/transactions')
            .then((response) => {
                setTransactions(response.data);
                console.log("response: ", response)
            })
            .catch((error) => {
                console.log("error fetching transactions: ", error.message);
            });
    }, []);

    return (
        <div>
            <h1>Transactions</h1>
            <p>View and manage your financial transactions.</p>
            <FilterBar/>
            <TransactionHistory transactions={transactions}/>
            <TransactionModal/>
        </div>
    );
};

export default Transactions;