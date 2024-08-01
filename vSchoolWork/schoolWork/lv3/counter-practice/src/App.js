import React from "react"
import './style.css';
import Count from "./Count"

export default function App() {
    /**
     * Challenge: Set up state to track our count (initial value is 0)
     */
    const [count, setCount] = React.useState(0)

    /**
    * Note: if you ever need the old value of state
    * to help you determine the new value of state,
    * you should pass a callback function to your
    * state setter function instead of using
    * state directly. This callback function will
    * receive the old value of state as its parameter,
    * which you can then use to determine your new
    * value of state.
    */

    function add() {
        setCount(prevCount => prevCount + 1)
    }

    function minus() {
        setCount(preCount => preCount - 1)
    }

    return (
        <div className="counter">
            <button className="counter--minus" onClick={minus}>–</button>
            <Count number={count} />
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}
