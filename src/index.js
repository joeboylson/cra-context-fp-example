import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';


const exampleUsers = [
    {
        id: 0,
        name: 'User One',
        localSetName: function(name) { this.name = name }
    },
    {
        id: 1,
        name: 'User Two',
        localSetName: function(name) { this.name = name }
    }    
]


ReactDOM.render( <App loadedUsers={exampleUsers}/>, document.getElementById('root') );
