import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

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
                <li>
                    Most important thing
                    <div
                        style={{
                            width: "100px",
                            height: "50px",
                            backgroundColor: "red",
                            marginTop: "10px",
                        }}
                    ></div>
                </li>
                <li>
                    Thing of average importance
                    <div
                        style={{
                            width: "100px",
                            height: "50px",
                            backgroundColor: "red",
                            marginTop: "10px",
                        }}
                    ></div>
                </li>
                <li>
                    An unimportant thing
                    <div
                        style={{
                            width: "100px",
                            height: "50px",
                            backgroundColor: "red",
                            marginTop: "10px",
                        }}
                    ></div>
                </li>
            </ol>
            <p>Kempton was here! Hello World.</p>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
