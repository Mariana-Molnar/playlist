
import React from 'react';
import './App.css';

class App extends React.Component {
    render(){
        return (
            <div className="App">
                <header>
                    <form id="to-do-form" >
                        <input type="text" placeholder="Song"></input>
                        <input type="text" placeholder="Singer"></input>
                        <button type="submit">Add</button>
                    </form>
                </header>
            </div>
        );
    }
}


export default App;