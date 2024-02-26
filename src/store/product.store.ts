import { createSlice } from '@reduxjs/toolkit'


export const useProductStore = createSlice({
  name: 'product',
  initialState:{
    product:[
        {
            name: 'Brown Bag',
            image:'https://htmldemo.net/payne/payne/assets/img/products/product-03-270x300.jpg',
            price: 132
        },
        {
            name: 'Black Bag',
            image:'https://htmldemo.net/payne/payne/assets/img/products/product-04-270x300.jpg',
            price: 132
        },
        {
            name: 'Red Bag',
            image:'https://htmldemo.net/payne/payne/assets/img/products/product-05-270x300.jpg',
            price: 132
        },
        {
            name: 'Dark Green Bag',
            image:'https://htmldemo.net/payne/payne/assets/img/products/product-06-270x300.jpg',
            price: 132
        },
        {
            name: 'Teal Bag',
            image:'https://htmldemo.net/payne/payne/assets/img/products/product-07-270x300.jpg',
            price: 132
        },
        {
            name: 'Purple Bag',
            image:'https://htmldemo.net/payne/payne/assets/img/products/product-08-270x300.jpg',
            price: 132
        },
        {
            name: 'Soldier Bag',
            image:'https://htmldemo.net/payne/payne/assets/img/products/product-09-270x300.jpg',
            price: 132
        },
        {
            name: 'Black Bag-2',
            image:'https://htmldemo.net/payne/payne/assets/img/products/product-10-270x300.jpg',
            price: 132
        }
    ]
  },
  reducers: {
    
  },
})

export const {  } = useProductStore.actions

export default useProductStore.reducer