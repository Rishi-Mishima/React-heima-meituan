// store

import { createSlice } from '@reduxjs/toolkit'

import axios from 'axios'

const foodStore = createSlice({
    name: 'foods',
    initialState: {
        // goods list 
        foodsList: [],

        // 菜单激活下标值
        activeIndex: 0,

        // cartlist 
        cartList: []
    },
    reducers: {
        // 更改商品列表
        setFoodsList(state, action) {
            state.foodsList = action.payload
        },

        // change active Index 
        changeActiveIndex(state, action) {
            state.activeIndex = action.payload
        },

        // add into cart 
        addCart(state, action) {
            // 是否添加过？ 以action.payload.id 去cart list中匹配

            const item = state.cartList.find(item => item.id === action.payload.id)
            if (item) {
                item.count++
            } else {
                state.cartList.push(action.payload)
            }

        },

        // count  + 
        increCount(state, action) {
            //count id 
            const item = state.cartList.find(item => item.id === action.payload.id)
            item.count++
        },

        //count - 
        decreCount(state, action) {
            //count id 
            const item = state.cartList.find(item => item.id === action.payload.id)
            if (item.count === 0) {

                return
            }
            item.count--
        },

        // clear cart 
        clearCart(state) {
            state.cartList = []
        }
    }
})

// async 
const { setFoodsList, changeActiveIndex, addCart, increCount, decreCount, clearCart } = foodStore.actions
const fetchFoodList = () => {
    return async (dispatch) => {
        // async axios 
        const res = await axios.get('http://localhost:3004/takeaway')

        // dispatch
        dispatch(setFoodsList(res.data))
    }
}

export { fetchFoodList, changeActiveIndex, addCart, increCount, decreCount, clearCart }

const reducer = foodStore.reducer

export default reducer