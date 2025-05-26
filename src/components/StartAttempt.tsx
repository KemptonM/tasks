import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const initialAttempts = 4;
    const [attempts, setAttempts] = useState<number>(initialAttempts);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function startQuiz() {
        setAttempts((prev) => prev - 1);
        setInProgress(true);
    }
    function stopQuiz() {
        setInProgress(false);
    }
    function mulligan() {
        if (!inProgress) {
            setAttempts((prev) => prev + 1);
        }
    }

    return (
        <div>
            <div>Attempts: {attempts}</div>
            <Button onClick={startQuiz} disabled={inProgress || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={inProgress}>
                Mulligan
            </Button>
        </div>
    );
}
