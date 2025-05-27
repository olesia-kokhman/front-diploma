import React from 'react';
import "./TransactionHistory.css";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const TransactionHistory = ({transactions, onEdit, onDelete}) => {
    return (
        <div className="transaction-history-table-container">
            <table className="transaction-history-table">
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Account</th>
                    <th>Amount</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {transactions.map((transaction, index) => (
                    <tr key={index}>
                        <td>{transaction.dateTime}</td>
                        <td>{transaction.description}</td>
                        <td>{transaction.category?.name || ""}</td>
                        <td>{transaction.account.name}</td>
                        <td>{transaction.amount} {transaction.currency}</td>
                        <td>
                            <button className="icon-button" onClick={() => onEdit(transaction)}>
                                <FaEdit />
                            </button>
                        </td>
                        <td>
                            <button className="icon-button" onClick={() => onDelete(transaction.id)}>
                                <FaTrashAlt />
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionHistory;