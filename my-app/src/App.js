
import React from 'react';
import './App.css';
import ListItem from "./ListItem";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items:[],
            currentItem:{
                song:'',
                key:''
            }
        };
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    handleInput(e){
        this.setState({
            currentItem:{
                [e.target.name]: e.target.value,
                key: Date.now()
            }
        })
    }
    addItem(e){
        e.preventDefault();
        const newItem = this.state.currentItem;
        console.log(newItem);
        if(newItem.song !==""){
            const items = [...this.state.items, newItem];
            this.setState({
                items: items,
                currentItem:{
                    song:'',
                    key:''
                }
            })
        }
    }
    deleteItem(key){
        const filteredItems= this.state.items.filter(item =>
            item.key!==key);
        this.setState({
            items: filteredItems
        })
    }
    render(){
        return (
            <div className="App">
                <header>
                    <form id="to-do-form" onSubmit={this.addItem}>
                        <input type="text" name="song" placeholder="Song" value={this.state.currentItem.name} onChange={this.handleInput}/>
                        <button type="submit">Add</button>
                    </form>
                </header>
                <ListItem items={this.state.items} deleteItem={this.deleteItem}></ListItem>
            </div>
        );
    }
}


export default App;