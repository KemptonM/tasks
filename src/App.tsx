import React from "react";
import "./App.css";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <h1>This is a header.</h1>
            <img src="../public/squirtle.jpg" alt="Squirtle with sunglasses" />
            <ol>
                <li>Most important thing</li>
                <li>Thing of average importance</li>
                <li>An unimportant thing</li>
            </ol>
            <p>Kempton was here! Hello World.</p>
        </div>
    );
}

export default App;
