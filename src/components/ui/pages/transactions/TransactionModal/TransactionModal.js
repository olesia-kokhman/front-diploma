import React, { useEffect, useState } from 'react';
import "./TransactionModal.css";
import CustomTimePicker from "../../../general/CustomDateTimePicker/CustomTimePicker";

const TransactionModal = ({ transaction, onSave, onClose, accounts, categories }) => {
    const [transactionType, setTransactionType] = useState("EXPENSE");

    useEffect(() => {
        if (transaction) {
            setTransactionType(transaction.transactionType);
        }
    }, [transaction]);

    const handleTypeChange = (type) => {
        setTransactionType(type);
    };

    return (
        <div className="overlay">
            <div className="modal-content">
                <h4>Add transaction</h4>

                <div className="transaction-type-toggle">
                    {["EXPENSE", "INCOME", "TRANSFER"].map((type) => (
                        <button
                            key={type}
                            type="button"
                            className={`type-button ${transactionType === type ? 'active' : ''}`}
                            onClick={() => handleTypeChange(type)}
                        >
                            {type.charAt(0) + type.slice(1).toLowerCase()}
                        </button>
                    ))}
                </div>

                <div className="row">
                    <CustomTimePicker />
                    <select>
                        <option>Account</option>
                        {accounts.map(acc => <option key={acc.id}>{acc.name}</option>)}
                    </select>
                </div>

                <div className="row">
                    <select>
                        <option>Account</option>
                        {categories.map(category => <option key={category.id}>{category.name}</option>)}
                    </select>
                </div>

                <div className="row">
                    <span className="prefix">-</span>
                    <input type="text" placeholder="0,00" />
                    <select>
                        <option>UAH</option>
                        <option>USD</option>
                        <option>EUR</option>
                        <option>PLN</option>
                    </select>
                </div>

                <div className="row">
                    <select><option>Category</option></select>
                </div>

                <input className="description-input" placeholder="Add description..." />

                <div className="row">
                    <button className="primary-action">Add transaction ✔</button>
                    <button className="secondary-action" onClick={onClose}>Cancel ✖</button>
                </div>
            </div>
        </div>
    );
};

export default TransactionModal;
