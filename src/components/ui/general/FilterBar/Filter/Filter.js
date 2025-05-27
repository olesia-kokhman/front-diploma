import React, { useState } from 'react';
import './Filter.css';

const Filter = ({ filterTitle, data, onApplyFilter }) => {
    const [selectedData, setSelectedData] = useState([]);

    const handleCheckboxChange = (itemId) => {
        if (!selectedData.includes(itemId)) {
            setSelectedData((prevState) => [...prevState, itemId]);
        } else {
            setSelectedData((prevState) =>
                prevState.filter((id) => id !== itemId)
            );
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onApplyFilter(selectedData);
    };

    return (
        <div className="filter-container">
            <h5 className="filter-title">{filterTitle}</h5>
            <form className="filter-list" onSubmit={handleSubmit}>
                {data.map((item) => (
                    <div className="data-item" key={item.id}>
                        <input
                            type="checkbox"
                            checked={selectedData.includes(item.id)}
                            onChange={() => handleCheckboxChange(item.id)}
                        />
                        <label>{item.name}</label>
                    </div>
                ))}
                <button type="submit">Apply filters</button>
            </form>
        </div>
    );
};

export default Filter;
