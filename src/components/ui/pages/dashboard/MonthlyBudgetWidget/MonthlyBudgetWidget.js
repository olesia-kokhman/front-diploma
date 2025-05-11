import React from 'react';
import "./MonthlyBudgetWidget.css";
import BaseWidget from "../BaseWidget/BaseWidget";

const MonthlyBudgetWidget = () => {

    const title = "Monthly budget"
    const content = (
        <>
            <p>Budget is all right</p>
        </>
    );

    return (
        <>
           <BaseWidget title={title} content={content}/>
        </>
    );
}

export default MonthlyBudgetWidget;