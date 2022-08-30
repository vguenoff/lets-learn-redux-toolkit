import { useState } from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks'
import {
    incremented,
    decremented,
    reset,
    amountAdded,
} from './features/counter/counterSlice'
import { useFetchBreedsQuery } from './features/dogs/dogsApiSlice'

import reactLogo from './assets/react.svg'
import './App.css'

function App() {
    const [incrementedBy, setIncrementedBy] = useState(50)
    const [numDogs, setNumDogs] = useState(10)
    const count = useAppSelector(({ counter }) => counter.value)
    const dispatch = useAppDispatch()

    const { data = [], isFetching } = useFetchBreedsQuery(numDogs)

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
                <div>
                    <p>Dogs to fetch</p>
                    <select
                        value={numDogs}
                        onChange={e => setNumDogs(Number(e.target.value))}
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
                <div>
                    <p>Number of dogs fetched: {data.length}</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Picture</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(breed => (
                                <tr key={breed.id}>
                                    <td>{breed.name}</td>
                                    <td>
                                        <img
                                            src={breed.image.url}
                                            alt={breed.name}
                                            height={250}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    )
}

export default App
