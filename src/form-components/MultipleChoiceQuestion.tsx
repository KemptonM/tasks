import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select
                value={selected}
                onChange={(e) => {
                    setSelected(e.target.value);
                }}
            >
                {options.map((option: string) => {
                    return (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    );
                })}
            </select>
            {selected === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
