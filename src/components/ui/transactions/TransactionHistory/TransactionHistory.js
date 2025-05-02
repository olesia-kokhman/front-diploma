import React from 'react';
import "./TransactionHistory.css";

const TransactionHistory = () => {

    const transactions = [
        {
            date: "",
            description: "",
            category: "",
            account: "",
            amount: 0
        }
    ];

    return (
        <>
            <table className="transaction-history-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Account</th>
                        <th>Amount</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {transactions.map((transaction, index) => {
                    return (
                           <tr key={index}>
                               <td>{transaction.date}</td>
                               <td>{transaction.description}</td>
                               <td>{transaction.category}</td>
                               <td>{transaction.account}</td>
                               <td>{transaction.amount}</td>
                               <td>
                                   <button>Edit</button>
                               </td>
                               <td>
                                   <button>Delete</button>
                               </td>
                           </tr>
                        );
                })}
                </tbody>
            </table>
        </>
    );
}

export default TransactionHistory;