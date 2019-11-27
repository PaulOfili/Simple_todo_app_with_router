import React, {useEffect} from 'react';
import '../App.css';

function TodoListForm({addItem, handleInputChange, inputElement, currentItem}) {
    useEffect(() => {
        inputElement.current.focus();
    });
    return (
        <div className="App">
            <form onSubmit={addItem}>
                <input
                    placeholder='Enter new tasks'
                    ref={inputElement}
                    value={currentItem.text}
                    onChange={handleInputChange}
                />
                <button type={'submit'}>Add tasks</button>
            </form>
        </div>
    );
}

export default TodoListForm;
