// slice file - logic and the data for one slice of the redux state (DUCKS pattern)
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incremented(state) {
            state.value += 1
        },

        decremented(state) {
            state.value -= 1
        },
        reset(state) {
            state.value = 0
        },
        amountAdded(state, action: PayloadAction<number>) {
            state.value += action.payload
        },
    },
})

// export action creators
export const { incremented, decremented, reset, amountAdded } =
    counterSlice.actions

export default counterSlice.reducer
