import React , {Component} from 'react';
import TodoList from "./Components/TodoList/TodoList";
import AddItem from "./Components/AddItem/AddItem"
import './App.css';

class App extends Component{
    state = {
        items: [
            {id:1,name:'Sport',age:26},
            {id:2,name:'Work',age:22},
            {id:3,name:'Study',age:23},
        ]
    }
    deleteItem=(id)=>{

        let items = this.state.items.filter((items)=>{
            return items.id !==id
        })
        this.setState({items})
     }
     addItem = (item)=>{
        item.id = Math.random();
        let items = this.state.items;
        items.push(item);
        this.setState({items});
     }
    render(){
        return(
            <div className="App container">
               <h1 className="text-center">To DoList app</h1>
                <TodoList items={this.state.items} deleteItem={this.deleteItem}/>
                <AddItem addItem={this.addItem} />
                <hambola/>
            </div>
        );
    }

}

export default App;
