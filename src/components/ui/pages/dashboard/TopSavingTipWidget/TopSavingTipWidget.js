import React from 'react';
import "./TopSavingTipWidget.css";
import BaseWidget from "../BaseWidget/BaseWidget";

const TopSavingTipWidget = ({tip}) => {

    const title = "Top saving tip";
    const content = (
        <>
            <p>{tip.description}</p>
        </>
    )

    return (
        <>
            <BaseWidget title={title} content={content}/>
        </>
    );
}

export default TopSavingTipWidget;
