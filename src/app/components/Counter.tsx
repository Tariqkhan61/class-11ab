
"use client"

import { useState } from 'react';

interface CounterProps {
    fullName: string;
    favoriteDish: string;
    favoriteColor: string;
}

const Counter: React.FC<CounterProps> = ({ fullName, favoriteDish, favoriteColor }) => {
    const [counter, setCounter] = useState(0);

    const increment = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter - 1);
    const reset = () => setCounter(0);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
           <h1 className="text-3xl font-bold mb-4 text-black">React : useState </h1>
           <p className='text-xl'>React's `useState` is a Hook that allows you to add state management to functional components. It returns a state variable and a function to update it, enabling dynamic rendering based on user interactions or other changes.</p>
           <h1 className='text-3xl font-bold mb-4'>Props:</h1>
           <p className='text-xl'>In React, props (short for properties) are used to pass data from a parent component to a child component. They are immutable and enable reusable, dynamic components.</p>
            <h1 className="text-3xl font-bold mb-4 text-red-500">Counter: {counter}</h1>
            <div className="space-x-4 mb-4">
                <button onClick={increment} className="text-xl px-4 py-2 bg-green-600 text-white rounded-md hover:bg-blue-600">
                    Increment
                </button>
                <button onClick={decrement} className="text-xl px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-red-700">
                    Decrement
                </button>
                <button onClick={reset} className="text-xl px-4 py-2 bg-red-500 text-white rounded-md hover:bg-yellow-700">
                    Reset
                </button>
            </div>
            <div className="mt-4 text-center">
                <p className="text-xl font-bold text-purple-600">Full Name: {fullName}</p>
                <p className="text-xl text-green-700 font-bold">Favorite Dish: {favoriteDish}</p>
                <p className="text-xl text-blue-600 font-bold">Favorite Color: {favoriteColor}</p>
            </div>
        </div>
    );
}

export default Counter;
