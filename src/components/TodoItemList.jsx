import React from 'react';
import '../App.css';

function TodoItemList({itemList, deleteItem}) {
    return (
        <div>
            <ul>
                {itemList.map(item => (
                    <li onClick={() => deleteItem(item.key)} key={item.key}>{item.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoItemList;
