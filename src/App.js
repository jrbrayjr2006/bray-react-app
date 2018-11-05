import React, { Component } from 'react';
import './App.css';
import Recipes from './components/recipes/recipes';
import Ingredients from './components/ingredients/ingredients';

class App extends Component {
    state = {
        someComponent: <Recipes click={this.switchComponentHandler} />
    }

    myComponent = <Recipes />;

    switchComponentHandler = (event) => {
        console.log('Was clicked!');
        this.setState({someComponent: <Ingredients />});
    }

    showTextHandler = () => {
        console.log('showing text...');
    }

    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                {this.state.someComponent}
                <button onClick={this.switchComponentHandler}>Switch</button>
            </div>
        );
        //return React.createElement('div', null, 'h1', 'I\'m a React App!!!!');
        //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Let\'s try this again'));
    }
}

export default App;