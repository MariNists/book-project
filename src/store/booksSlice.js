import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// export const fetchBooks = createAsyncThunk(
//         'books/fetchBooks',
//         async function(){
//             const response1 = await fetch(`https://api.itbook.store/1.0/new`);
//             const data1 = await response1.json();
//             console.log(data1);
//             return data1;
//         }
        
// );  


export const fetchSingleBook = createAsyncThunk(
    'books/fetchSingleBook',
    async function(isbn13){
        const response2 = await fetch(`https://api.itbook.store/1.0/books/${isbn13}`);
        const data2 = await response2.json();

        // console.log(action);
        return data2;
    }
); 

// export const fetchSearchBooks = createAsyncThunk(
//     'books/fetchSearchBooks',
//     async function(requestPar){
//         const {value,page} = requestPar;
//         const response3 = await fetch(`https://api.itbook.store/1.0/search/${value}/${page}`);
//         const data3 = await response3.json();
//         return data3;
//     }
// ); 




const initialState = {
    databook: [],
    favourite: [],
    bascet: [],
    inputValue: '',
    error: null,

};

  

export const booksSlice = createSlice({
    name: 'books',
    initialState,

    reducers: {

        setInputValue(state, action) {
            state.inputValue=action.payload;
        },


        addToCart(state, action) {
            const check = state.bascet.findIndex(book => book.isbn13 === action.payload.isbn13)
            if (check !== -1) {
                state.bascet[check].quantity += action.payload.quantity 
            } else {
                state.bascet.push(action.payload)
            }

            state.total = state.bascet.reduce((sum, book) => sum + +book?.price * book?.quantity, 0)
        },
        addToFavourite(state, action) {
            const check = state.favourite.findIndex(book => book.isbn13 === action.payload.isbn13)
            if (check !== -1) {
                state.favourite[check].quantity += action.payload.quantity 
            } else {
                state.favourite.push(action.payload)
            }

            state.total = state.favourite.reduce((sum, book) => sum + +book.price.slice(1) * book?.quantity, 0)
        },
        updateQuantity(state, action) {
            const check = state.bascet.findIndex(book => book.isbn13 === action.payload.isbn13)
            if (check !== -1) {
                state.bascet[check].quantity = action.payload.quantity 
            }

            state.total = state.bascet.reduce((sum, book) => sum + +book.price.slice(1) * +book.quantity, 0)
        },
        removeItem(state, action) {
            state.bascet = state.bascet.filter(book => book.isbn13 !== action.payload.isbn13)
            state.total = state.bascet.reduce((sum, book) => sum + +book.price.slice(1) * +book.quantity, 0)
        },
        removeItemFavourite(state, action) {
            state.favourite = state.favourite.filter(book => book.isbn13 !== action.payload.isbn13)
        },

    },

    extraReducers: (builder) => {
        builder
            // .addCase(fetchBooks.pending, (state) =>{
            //     // state.status = 'loading'
            //     state.error = null;
            // })
            // .addCase(fetchBooks.fulfilled, (state, actions) =>{
            //     state.allBooks = actions.payload;
            // })
            // .addCase(fetchBooks.rejected, (state, actions) =>{ },
            // )



            .addCase(fetchSingleBook.pending, (state) =>{
                state.error = null;
            })
            .addCase(fetchSingleBook.fulfilled, (state, actions) =>{
                state.databook = actions.payload;
                console.log(actions.payload)
            })
            .addCase(fetchSingleBook.rejected, (state, actions) =>{ },
            )


            // .addCase(fetchSearchBooks.pending, (state) =>{
            //     state.error = null;
            // })
            // .addCase(fetchSearchBooks.fulfilled, (state, actions) =>{
            //     state.searchBook = actions.payload.books;
            //     state.total = actions.payload.total;
            // })
            // .addCase(fetchSearchBooks.rejected, (state, actions) =>{ },
            // );
    },
})


export const { setInputValue, addToCart, addToFavourite, updateQuantity, removeItem, removeItemFavourite } = booksSlice.actions;
export default booksSlice.reducer;