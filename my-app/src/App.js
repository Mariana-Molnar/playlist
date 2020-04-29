
import React from 'react';
import './App.css';

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
    render(){
        return (
            <div className="App">
                <header>
                    <form id="to-do-form" onSubmit={this.addItem}>
                        <input type="text" name="song" placeholder="Song" value={this.state.currentItem.name} onChange={this.handleInput}/>
                        {/*<input type="text" name="singer" placeholder="Singer" value={this.state.currentItem.name} onChange={this.handleInput}/>*/}
                        <button type="submit">Add</button>
                    </form>
                </header>
            </div>
        );
    }
}


export default App;