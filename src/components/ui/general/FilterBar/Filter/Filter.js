import React from 'react';
import "./Filter.css";

const Filter = ({data}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <h5></h5>
            <form className="filter-list" action="" method="" onSubmit={handleSubmit}>
                {data.map((item, index) => {
                    return (
                        <div className="data-item" key={index}>
                            <input type="checkbox" value={item.name} name="filter-list" autoFocus />
                            <label>{item.name}</label>
                        </div>
                    );

                })}
                <button type="submit">Apply filters</button>
            </form>
        </>
    );
}

export default Filter;