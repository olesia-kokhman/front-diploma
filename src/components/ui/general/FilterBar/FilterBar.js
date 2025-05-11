import React, {useEffect, useState} from 'react';
import "./FilterBar.css";
import Filter from "./Filter/Filter";
import axios from "axios";
import CustomPeriodPicker from "../CustomDateTimePicker/CustomPeriodPicker";

const FilterBar = () => {

    const [accounts, setAccounts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/accounts")
            .then((response) => {
                setAccounts(response.data);
                console.log("success fetching accounts: ", response);
            })
            .catch((error) => {
                console.log("error fetching accounts: ", error.message);
            })
    }, []);

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/categories")
            .then((response) => {
                setCategories(response.data);
                console.log("success fetching categories: ", response);
            })
            .catch((error) => {
                console.log("error fetching accounts: ", error.message);
            })
    }, []);

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

               <CustomPeriodPicker/>

               <button className="category-selector" onClick={toggleCategoryFilter}>
                   Filter by category
               </button>
               {isCategoryFilterOpen && <Filter data={categories}/>}

               <button className="account-selector" onClick={toggleAccountFilter}>
                   Filter by account
               </button>
               {isAccountFilterOpen && <Filter data={accounts}/>}

               <button>Clear</button>

           </div>
        </>
    );
}

export default FilterBar;