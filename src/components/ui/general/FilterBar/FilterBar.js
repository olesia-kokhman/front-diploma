import React, { useState } from 'react';
import Filter from './Filter/Filter';
import CustomPeriodPicker from '../CustomDateTimePicker/CustomPeriodPicker';
import './FilterBar.css';

const FilterBar = ({ accounts, categories, onApplyFilter }) => {
    const [openFilter, setOpenFilter] = useState(null);

    const toggleFilter = (type) => {
        setOpenFilter(openFilter === type ? null : type);
    };

    const handleApplyCategories = (categoryIds) => {
        setOpenFilter(null);
        onApplyFilter('categories', categoryIds);
    };

    const handleApplyAccounts = (accountIds) => {
        setOpenFilter(null);
        onApplyFilter('accounts', accountIds);
    };

    return (
        <div className="filter-bar-wrapper">
            <div className="filter-bar-inner">
                <CustomPeriodPicker />

                <div className="filter-button-wrapper">
                    <button className="filter-button" onClick={() => toggleFilter('category')}>
                        Filter by category
                    </button>
                    {openFilter === 'category' && (
                        <div className="filter-flyout-absolute">
                            <Filter
                                filterTitle="Categories"
                                data={categories}
                                onApplyFilter={handleApplyCategories}
                            />
                        </div>
                    )}
                </div>

                <div className="filter-button-wrapper">
                    <button className="filter-button" onClick={() => toggleFilter('account')}>
                        Filter by account
                    </button>
                    {openFilter === 'account' && (
                        <div className="filter-flyout-absolute">
                            <Filter
                                filterTitle="Accounts"
                                data={accounts}
                                onApplyFilter={handleApplyAccounts}
                            />
                        </div>
                    )}
                </div>

                <button className="clear-button">Clear</button>
            </div>
        </div>
    );
};

export default FilterBar;
