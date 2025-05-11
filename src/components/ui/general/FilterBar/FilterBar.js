import React, {useState} from 'react';
import "./FilterBar.css";
import Filter from "./Filter/Filter";
import CustomPeriodPicker from "../CustomDateTimePicker/CustomPeriodPicker";

const FilterBar = ({accounts, categories, onApplyFilter, onAddClick}) => {

    const [isCategoryFilterOpen, setIsCategoryFilterOpen] =  useState(false);
    const [isAccountFilterOpen, setIsAccountFilterOpen] = useState(false);

    const toggleCategoryFilter = () => {
        if(isAccountFilterOpen) {
            toggleAccountFilter()
        }
        setIsCategoryFilterOpen(!isCategoryFilterOpen);
    }

    const toggleAccountFilter = () => {
        if(isCategoryFilterOpen) {
            toggleCategoryFilter()
        }
        setIsAccountFilterOpen(!isAccountFilterOpen);
    }

    const handleApplyCategories = (categoryIds) => {
        console.log("handle apply categories in filter bar");
        setIsCategoryFilterOpen(false);
        onApplyFilter("categories", categoryIds);
    }

    const handleApplyAccounts = (accountIds) => {
        console.log("handle apply accounts in filter bar");
        setIsAccountFilterOpen(false);
        onApplyFilter("accounts", accountIds)
    }

    return (
        <>
            <div className="filter-bar-wrapper">
               <div className="filter-bar">

                   <CustomPeriodPicker/>

                   <button className="category-selector" onClick={toggleCategoryFilter}>
                       Filter by category
                   </button>
                   {isCategoryFilterOpen && <Filter filterTitle="Categories"
                                                    data={categories}
                                                    onApplyFilter={handleApplyCategories}/>}

                   <button className="account-selector" onClick={toggleAccountFilter}>
                       Filter by account
                   </button>
                   {isAccountFilterOpen && <Filter filterTitle="Accounts"
                                                   data={accounts}
                                                   onApplyFilter={handleApplyAccounts}/>}
                   <button className="clear-button">Clear</button>

               </div>
                <button className="add-button" onClick={onAddClick}>Add transaction</button>
            </div>
        </>
    );
}

export default FilterBar;