import React, { useState } from "react";
import { Button } from "react-bootstrap";

// Define the holidays and their orderings
const holidays = [
    { name: "Christmas", year: 12 },
    { name: "Halloween", year: 10 },
    { name: "New Year's Day", year: 1 },
    { name: "Thanksgiving", year: 11 },
    { name: "Valentine's Day", year: 2 },
];

// Alphabetical order
const alphaOrder = [...holidays].sort((a, b) => a.name.localeCompare(b.name));
// Year order (by month)
const yearOrder = [...holidays].sort((a, b) => a.year - b.year);

export function CycleHoliday(): React.JSX.Element {
    const [state, setState] = useState<{
        order: "alpha" | "year";
        index: number;
    }>({
        order: "alpha",
        index: 0,
    });

    const currentList = state.order === "alpha" ? alphaOrder : yearOrder;
    const currentHoliday = currentList[state.index];

    function nextAlpha() {
        setState((prev) => ({
            order: "alpha",
            index:
                prev.order === "alpha" ?
                    (prev.index + 1) % alphaOrder.length
                :   0,
        }));
    }

    function nextYear() {
        setState((prev) => ({
            order: "year",
            index:
                prev.order === "year" ? (prev.index + 1) % yearOrder.length : 0,
        }));
    }

    return (
        <div>
            <div>{`Holiday: ${currentHoliday.name}`}</div>
            <Button onClick={nextAlpha}>Advance by Alphabet</Button>
            <Button onClick={nextYear}>Advance by Year</Button>
        </div>
    );
}
