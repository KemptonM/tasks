import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const initialAttempts = 4;
    const [state, setState] = useState<{
        attempts: number;
        inProgress: boolean;
    }>({
        attempts: initialAttempts,
        inProgress: false,
    });

    function startQuiz() {
        setState((prev) => ({
            ...prev,
            attempts: prev.attempts - 1,
            inProgress: true,
        }));
    }
    function stopQuiz() {
        setState((prev) => ({
            ...prev,
            inProgress: false,
        }));
    }
    function mulligan() {
        if (!state.inProgress) {
            setState((prev) => ({
                ...prev,
                attempts: prev.attempts === 0 ? 1 : prev.attempts + 1,
            }));
        }
    }

    return (
        <div>
            <div>Attempts: {state.attempts}</div>
            <Button
                onClick={startQuiz}
                disabled={state.inProgress || state.attempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!state.inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={state.inProgress}>
                Mulligan
            </Button>
        </div>
    );
}
