import React from 'react';
import '../App.css';

function SavedList({location}) {
    const savedList = (location.data) ? location.data : [];
    return (
        <div>
            <ul>
                {savedList.map(item => (
                    <li key={item.key}>{item.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default SavedList;
