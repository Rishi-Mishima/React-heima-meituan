// store

import { createSlice } from '@reduxjs/toolkit'

import axios from 'axios'

const foodStore = createSlice({
    name: 'foods',
    initialState: {
        // goods list 
        foodsList: []
    },
    reducers: {
        setFoodsList(state, action) {
            state.foodsList = action.payload
        }
    }
})

// async 
const { setFoodsList } = foodStore.actions
const fetchFoodList = () => {
    return async (dispatch) => {
        // async axios 
        const res = await axios.get('http://localhost:3004/takeaway')

        // dispatch
        dispatch(setFoodsList(res.data))
    }
}

export { fetchFoodList }

const reducer = foodStore.reducer

export default reducer