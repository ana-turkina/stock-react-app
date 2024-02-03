import React from 'react';

export default function StockDescription() {
    fetch('https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=' + encodeURIComponent('Microsoft'))
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(() => console.log("An error occurred."));
    return (
        <>
            <div className="glass-on-the-right">
                <div className="glass-header">
Stock Name
                </div>
            </div>
        </>
    );
};