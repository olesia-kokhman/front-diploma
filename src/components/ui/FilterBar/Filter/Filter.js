import React from 'react';
import "./Filter.css";

const Filter = () => {

    const data = ["one", "two", "three", "four"];

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
                            <input type="checkbox" value={item} name="filter-list" autoFocus />
                            <label>{item}</label>
                        </div>
                    );

                })}
                <button type="submit">Apply filters</button>
            </form>
        </>
    );
}

export default Filter;