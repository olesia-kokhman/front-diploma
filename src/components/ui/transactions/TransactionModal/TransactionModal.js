import React from 'react';
import { useState } from 'react';
import "./TransactionModal.css";
import CustomDatePicker from "../../CustomDateTimePicker/CustomDatePicker";
import CustomTimePicker from "../../CustomDateTimePicker/CustomTimePicker";

const TransactionModal = () => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <button onClick={toggleModal} className="button-modal">
                Add transaction
            </button>


            {modal &&
                <form className="modal" onSubmit={handleSubmit}>
                    <div className="overlay">
                        <div className="modal-content">

                            <h4>Add transaction</h4>

                            <div className="transaction-type-selector">
                                <input type="radio" name="transaction-type"/>
                                <label>Expense</label>
                                <input type="radio" name="transaction-type"/>
                                <label>Income</label>
                                <input type="radio" name="transaction-type"/>
                                <label>Transfer</label>
                            </div>

                            <CustomDatePicker/>
                            <CustomTimePicker/>

                            <select className="account-selector">
                                <option>Account</option>
                                <option>Monobank</option>
                                <option>Privat24</option>
                            </select>

                            <div className="amount-input-wrapper">
                                <span className="prefix">-</span>
                                <input className="amount-input" type="text" inputMode="decimal" placeholder="0,00"/>
                            </div>

                            <select className="currency-selector">
                                <option>UAH</option>
                                <option>USD</option>
                                <option>EUR</option>
                                <option>PLN</option>
                            </select>

                            <select className="category-selector">
                                <option>Category</option>
                                <option>Groceries</option>
                                <option>Transport</option>
                            </select>

                            <select className="split-category-selector">
                                <option>Split category</option>
                                <option>Groceries</option>
                                <option>Transport</option>
                            </select>

                            <input className="description-input" type="text" inputMode="text" placeholder="Add description"/>

                            <button className="submit-button" type="submit">
                                Add
                            </button>
                            <button className="cancel-button" onClick={toggleModal}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
            }
        </>
    );
}

export default TransactionModal;
