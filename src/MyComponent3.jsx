import React, { useState } from "react"
function MyComponent3() {

    const [car, setCar] = useState({
        year: 2024,
        make: "Ford",
        model: "Mustang"
    })

    function handleYearChange(event) {
        setCar((prev) => ({ ...prev, year: event.target.value }))
    }

    function handleMakeChange(event) {
        setCar((prev) => ({ ...prev, make: event.target.value }))
    }

    function handleModelChange(event) {
        setCar((prev) => ({ ...prev, model: event.target.value }))
    }

    return (
        <div>
            <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={handleYearChange} />
            <br />
            <input type="text" value={car.make} onChange={handleMakeChange} />
            <br />
            <input type="text" value={car.model} onChange={handleModelChange} />
            <br />
        </div>
    )
}
export default MyComponent3