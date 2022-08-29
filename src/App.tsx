import { useState } from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks'
import {
    incremented,
    decremented,
    reset,
    amountAdded,
} from './features/counter/counterSlice'

import reactLogo from './assets/react.svg'
import './App.css'

function App() {
    const [incrementedBy, setIncrementedBy] = useState(50)
    const count = useAppSelector(({ counter }) => counter.value)
    const dispatch = useAppDispatch()

    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => dispatch(decremented())}>-</button>
                <button onClick={() => dispatch(incremented())}>+</button>
                <h1>count is {count}</h1>
                <button onClick={() => dispatch(reset())}>reset</button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
                <div
                    style={{
                        display: 'grid',
                    }}
                >
                    <input
                        type="range"
                        value={incrementedBy}
                        onChange={e => setIncrementedBy(Number(e.target.value))}
                    />
                    <button
                        onClick={() => dispatch(amountAdded(incrementedBy))}
                    >
                        Increment By {incrementedBy}
                    </button>
                </div>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    )
}

export default App
