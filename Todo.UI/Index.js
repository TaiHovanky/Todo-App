import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World! This is what I have to do today:</h1>
            </div>
        );
    }
}

App.displayName = "App";

ReactDOM.render(<App />, document.getElementById('app'));