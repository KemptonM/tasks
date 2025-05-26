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
    const [order, setOrder] = useState<"alpha" | "year">("alpha");
    const [index, setIndex] = useState<number>(0);

    const currentList = order === "alpha" ? alphaOrder : yearOrder;
    const currentHoliday = currentList[index];

    function nextAlpha() {
        // Find the current holiday in alphaOrder
        const idx = alphaOrder.findIndex((h) => h.name === currentHoliday.name);
        setOrder("alpha");
        setIndex((idx + 1) % alphaOrder.length);
    }

    function nextYear() {
        // Find the current holiday in yearOrder
        const idx = yearOrder.findIndex((h) => h.name === currentHoliday.name);
        setOrder("year");
        setIndex((idx + 1) % yearOrder.length);
    }

    return (
        <div>
            <div>{`Holiday: ${currentHoliday.name}`}</div>
            <Button onClick={nextAlpha}>Advance by Alphabet</Button>
            <Button onClick={nextYear}>Advance by Year</Button>
        </div>
    );
}
