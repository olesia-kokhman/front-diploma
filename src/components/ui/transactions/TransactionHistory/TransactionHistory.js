import React from 'react';
import "./TransactionHistory.css";

const TransactionHistory = ({transactions}) => {

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
                               <td>{transaction.dateTime}</td>
                               <td>{transaction.description}</td>
                               <td>{transaction.category.map((category) => category.name).join(', ')}</td>
                               <td>{transaction.account.name}</td>
                               <td>{transaction.amount} {transaction.currency}</td>
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