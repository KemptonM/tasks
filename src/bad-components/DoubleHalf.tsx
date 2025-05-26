import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): React.JSX.Element {
    const [value, setValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{value}</span>
            </div>
            <Button
                onClick={() => {
                    setValue(2 * value);
                }}
            >
                Double
            </Button>
            <Button
                onClick={() => {
                    setValue(0.5 * value);
                }}
            >
                Halve
            </Button>
        </div>
    );
}
