import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'



export const useProductStore = createSlice({
    name: 'product',
    initialState: {
        product: [
            {
                id: 1,
                name: 'Brown Bag',
                image: 'https://htmldemo.net/payne/payne/assets/img/products/product-03-270x300.jpg',
                price: 132
            },
            {
                id: 2,
                name: 'Black Bag',
                image: 'https://htmldemo.net/payne/payne/assets/img/products/product-04-270x300.jpg',
                price: 132
            },
            {
                id: 3,
                name: 'Red Bag',
                image: 'https://htmldemo.net/payne/payne/assets/img/products/product-05-270x300.jpg',
                price: 132
            },
            {
                id: 4,
                name: 'Dark Green Bag',
                image: 'https://htmldemo.net/payne/payne/assets/img/products/product-06-270x300.jpg',
                price: 132
            },
            {
                id: 5,
                name: 'Teal Bag',
                image: 'https://htmldemo.net/payne/payne/assets/img/products/product-07-270x300.jpg',
                price: 132
            },
            {
                id: 6,
                name: 'Purple Bag',
                image: 'https://htmldemo.net/payne/payne/assets/img/products/product-08-270x300.jpg',
                price: 132
            },
            {
                id: 7,
                name: 'Soldier Bag',
                image: 'https://htmldemo.net/payne/payne/assets/img/products/product-09-270x300.jpg',
                price: 132
            },
            {
                id: 8,
                name: 'Black Bag-2',
                image: 'https://htmldemo.net/payne/payne/assets/img/products/product-10-270x300.jpg',
                price: 132
            }
        ],
        wishList: [] as Product[],
        cart: [] as  Cart[],
        view: {} as Product
    },

    reducers: {
        addWishList: (state, data: PayloadAction<Product>) => {
            state.wishList.push(data.payload);
        },
        removeProductWishList: (state, data: PayloadAction<number>) => {
            state.wishList = state.wishList.filter((p) => p.id != data.payload);
        },
        addCart: (state, data: PayloadAction<Cart>) => {
            if(state.cart.find((p) => p.id === data.payload.id)){
                state.cart.map((p) => {
                    if (p.id === data.payload.id) {
                        return p.count = p.count + 1
                    }   
                })
            }else{
                state.cart.push(data.payload) 
            }
        },
        deleteCartProduct: (state, data: PayloadAction<number>) => {
            state.cart.map((p) => {
                if(p.id === data.payload && p.count > 1){
                     if (p.count > 1) {
                        return p.count = p.count - 1
                     }
                }

                if(p.id === data.payload){
                    if (p.count === 1) {
                        return state.cart = state.cart.filter((p) => p.id != data.payload)
                        
                    }
                }
            })
        },
        fullDeleteCartProduct:(state, data: PayloadAction<number>) => {
            state.cart = state.cart.filter((p) => p.id != data.payload)
        },
        setViewProduct: (state, data:PayloadAction<Product>) => {
            state.view = data.payload
        }
    },
})

export const { addWishList, removeProductWishList, addCart, deleteCartProduct,fullDeleteCartProduct, setViewProduct } = useProductStore.actions

export default useProductStore.reducer