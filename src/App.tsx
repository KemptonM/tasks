import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { TwoDice } from "./components/TwoDice";
import { Counter } from "./components/Counter";
import { StartAttempt } from "./components/StartAttempt";
import { Button } from "react-bootstrap";
import { CycleHoliday } from "./components/CycleHoliday";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header
                role="banner"
                style={{ backgroundColor: "#e0e0e0", padding: "1rem" }}
            >
                <h1>Welcome to the Quiz App - COS420</h1>
            </header>
            <div>Hello World</div>
            <img src="https://via.placeholder.com/100" alt="Placeholder" />
            <ul>
                <li>First item</li>
                <li>Second item</li>
                <li>Third item</li>
            </ul>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <div
                style={{ backgroundColor: "red", width: 50, height: 50 }}
            ></div>
            <hr />
            <StartAttempt />
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday />
        </div>
    );
}

export default App;
