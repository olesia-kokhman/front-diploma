import React, { useState } from "react";
import { useTransactions } from "../hooks/useTransactions";
import TransactionHistory from "../components/ui/pages/transactions/TransactionHistory/TransactionHistory";
import FilterBar from "../components/ui/general/FilterBar/FilterBar";

export default function TransactionsPage({ userId }) {
    const [page, setPage] = useState(0);
    const [keyword, setKeyword] = useState("");

    const { transactions, totalPages, loading, error } = useTransactions({
        userId,
        page,
        size: 10,
        keyword,
    });

    const handleEdit = (transaction) => {
        alert(`Edit transaction ID: ${transaction.id}`);
    };

    const handleDelete = (transactionId) => {
        if (window.confirm(`Delete transaction ID: ${transactionId}?`)) {
            alert("Delete logic not implemented yet");
        }
    };

    if (loading) return <div>Loading transactions...</div>;
    if (error) return <div>Error loading transactions: {error.message}</div>;

    return (
        <div>
            <div className="transaction-page">
                 <div className="top-section">
                     <div className="filter-bar">
                         <FilterBar
                             // accounts={accounts}
                             // categories={categories}
                             // onApplyFilter={handleApplyFilter}
                         />
                     </div>
                     <button
                         className="add-transaction-button"
                         onClick={() => {
                             // setShowModal(true);
                             // setIsEditable(false);
                             // setEditableTransaction(null);
                         }}
                     >
                         Add transaction
                     </button>
                 </div>

                {transactions.length === 0 ? (
                    <div>No transactions found.</div>
                ) : (
                    <TransactionHistory
                        transactions={transactions}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                )}

                <div style={{ marginTop: 10 }}>
                    <button disabled={page === 0} onClick={() => setPage((p) => Math.max(0, p - 1))}>
                        Prev
                    </button>
                    <span style={{ margin: "0 10px" }}>
              Page {page + 1} of {totalPages}
            </span>
                    <button disabled={page + 1 >= totalPages} onClick={() => setPage((p) => p + 1)}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

