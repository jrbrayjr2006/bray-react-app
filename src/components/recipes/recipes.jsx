import React from 'react';
import './recipes.css';

const recipes = (props) => {

    return (
        <div>
            <h2>My Recipes</h2>
            <button onClick={props.click}>Show Text</button>
        </div>
    );
}

export default recipes;