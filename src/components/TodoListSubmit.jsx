import React from 'react';
import {Link} from "react-router-dom";
import '../App.css';

function TodoListSubmit({itemList}) {
    return (
        <div className="App">
            <Link
                to={{
                    pathname: '/saved',
                    data: itemList
                }}
            >
                <button>Save tasks</button>
            </Link>
        </div>
    );
}

export default TodoListSubmit;
