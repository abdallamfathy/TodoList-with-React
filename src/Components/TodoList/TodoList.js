import React  from 'react';

const TodoList = (props) => {
    const {items,deleteItem} = props;
    let length = items.length;
    const listItems = length ? (items.map(items => {
        return(
            <div key={items.id}>
                <span className="name">{items.name}</span>
                <span className="age">{items.age}</span>
                <span className="action icon" onClick={()=>deleteItem(items.id)}>X</span>
            </div>
        );
    })) : (
        <p>There is no items to show</p>
    )
    return (
        <div className="listItems">
            <div>
                <span className="name title">Name</span>
                <span className="age title">Age</span>
                <span className="action title">Action</span>
            </div>
            {listItems}
        </div>
    )
}

export default TodoList;