import React, {useState} from 'react';
import "./FilterBar.css";
import Filter from "./Filter/Filter";

const FilterBar = () => {

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

    return (
        <>
           <div className="filter-bar">

               <button>All dates</button>

               <button className="category-selector" onClick={toggleCategoryFilter}>
                   Filter by category
               </button>
               {isCategoryFilterOpen && <Filter/>}

               <button className="account-selector" onClick={toggleAccountFilter}>
                   Filter by account
               </button>
               {isAccountFilterOpen && <Filter/>}

               <button>Clear</button>

           </div>
        </>
    );
}

export default FilterBar;