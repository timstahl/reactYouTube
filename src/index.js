import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This component should produce some HTML.
const App = function() {
    return <div>Hi!</div>;
}
// Take this components generated HTML and put it in the dom.
ReactDOM.render(<App />, document.querySelector('.container'));