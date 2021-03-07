import React from 'react';
import './search-panel.css';

const AppSearchPanel = () => {
    return (
        <input
            className="from-control search-input"
            type="text"
            placeholder = "Поиск по записям"
        />
    );
}

export default AppSearchPanel;