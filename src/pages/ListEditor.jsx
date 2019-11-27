import React, {useState} from 'react';
import '../App.css';
import TodoListForm from "../components/TodoListForm";
import TodoItemList from "../components/TodoItemList";
import TodoListSubmit from "../components/TodoListSubmit";

function ListEditor() {
    const [itemList, setItemList] = useState([]);
    const [currentItem, setCurrentItem] = useState({text: '', key: ''});

    const inputElement = React.createRef();

    const addItem = e => {
        e.preventDefault();
        const newItem = currentItem;
        if(newItem.text !== ''){
            console.log(newItem);
            const newItemList = [...itemList, newItem];
            setItemList(newItemList);
            setCurrentItem({text: '', key: ''})
        }
    };

    const handleInputChange = e => {
        const itemText = e.target.value;
        const currentItem = {text: itemText, key:Date.now()};
        setCurrentItem(currentItem);
        console.log('HandleInput was clicked');
    };

    const deleteItem = (key) => {
        console.log(key);
        const newItemList = itemList.filter(item => item.key !== key);
        setItemList(newItemList);
    };


    return (
        <div className="App">
            <TodoListForm
                addItem={addItem}
                handleInputChange={handleInputChange}
                inputElement={inputElement}
                currentItem={currentItem}
            />
            <br />
            <TodoItemList
                itemList={itemList}
                deleteItem={deleteItem}
            />
            <br />
            <br />
            <br />
            <TodoListSubmit
                itemList={itemList}
            />
        </div>
    );
}

export default ListEditor;
