import { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counter/actions";

function Counter() {
    const value = useSelector((state) => state.counter1.value);
    const dispatch = useDispatch();

    function handleIncrement(value = 1) {
        dispatch(increment(value))
    }

    function handleDecrement(value = 1) {
        dispatch(decrement(value))
    }

    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">{value}</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={() => handleIncrement(2)}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={() => handleDecrement(2)}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}


export default Counter;
