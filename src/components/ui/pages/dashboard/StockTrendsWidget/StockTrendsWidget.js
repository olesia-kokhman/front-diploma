import React from 'react';
import "./StockTrendsWidget.css";
import BaseWidget from "../BaseWidget/BaseWidget";

const StockTrendsWidget = ({stocks}) => {

    const title = "Stock trends";
    const content = (
        <>
            {stocks.map((stock, index) => {
                const isPositive = stock.changePercent >= 0;
                const changeClass = isPositive ? 'stock-up' : 'stock-down';

                return (
                    <div key={index}>
                        <div className="stock-info">
                            <p>{stock.name}</p>
                            <p className="stock-price">{stock.currentPrice.toFixed(2) } USD</p>
                        </div>

                        <div className={`stock-change ${changeClass}`}>
                            {stock.changePercent.toFixed(2) } %
                        </div>
                    </div>
                );
            })
            }
        </>
    );

    return (
        <>
            <BaseWidget title={title} content={content}/>
        </>
    );
}

export default StockTrendsWidget;