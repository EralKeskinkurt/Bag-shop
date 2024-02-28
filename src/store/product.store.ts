import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export const useProductStore = createSlice({
  name: 'product',
  initialState:{
    product:[
        {
            id:1,
            name: 'Brown Bag',
            image:'https://htmldemo.net/payne/payne/assets/img/products/product-03-270x300.jpg',
            price: 132
        },
        {
            id:2,
            name: 'Black Bag',
            image:'https://htmldemo.net/payne/payne/assets/img/products/product-04-270x300.jpg',
            price: 132
        },
        {
            id:3,
            name: 'Red Bag',
            image:'https://htmldemo.net/payne/payne/assets/img/products/product-05-270x300.jpg',
            price: 132
        },
        {
            id:4,
            name: 'Dark Green Bag',
            image:'https://htmldemo.net/payne/payne/assets/img/products/product-06-270x300.jpg',
            price: 132
        },
        {
            id:5,
            name: 'Teal Bag',
            image:'https://htmldemo.net/payne/payne/assets/img/products/product-07-270x300.jpg',
            price: 132
        },
        {
            id:6,
            name: 'Purple Bag',
            image:'https://htmldemo.net/payne/payne/assets/img/products/product-08-270x300.jpg',
            price: 132
        },
        {
            id:7,
            name: 'Soldier Bag',
            image:'https://htmldemo.net/payne/payne/assets/img/products/product-09-270x300.jpg',
            price: 132
        },
        {
            id:8,
            name: 'Black Bag-2',
            image:'https://htmldemo.net/payne/payne/assets/img/products/product-10-270x300.jpg',
            price: 132
        }
    ],
    wishList: [] as Product[]
  },
  reducers: {
    addWishList:(state, data: PayloadAction<Product>) => {
        console.log("as");
        state.wishList.push(data.payload)
    },
    removeProductWishList:(state, data: PayloadAction<number>) => {
      state.wishList = state.wishList.filter((p) => p.id != data.payload)
    }
  },
})

export const { addWishList, removeProductWishList } = useProductStore.actions

export default useProductStore.reducer