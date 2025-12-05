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
        // 更改商品列表
        setFoodsList(state, action) {
            state.foodsList = action.payload
        },

        // change active Index 
        changeActiveIndex(state, action) {
            state.activeIndex = action.payload
        }
    }
})

// async 
const { setFoodsList, changeActiveIndex } = foodStore.actions
const fetchFoodList = () => {
    return async (dispatch) => {
        // async axios 
        const res = await axios.get('http://localhost:3004/takeaway')

        // dispatch
        dispatch(setFoodsList(res.data))
    }
}

export { fetchFoodList, changeActiveIndex }

const reducer = foodStore.reducer

export default reducer