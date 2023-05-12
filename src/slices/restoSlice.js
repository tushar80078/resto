import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    contents: [],
    totalValue: 0
}

export const restoSlice = createSlice({
    name: 'resto',
    initialState,
    reducers: {

        addItem: (state, action) => {


            let findItem = state.contents.find(data => data.id == action.payload.id);

            if (findItem) {
                let newList = state.contents.map((ele) => {
                    if (ele.id == action.payload.id) {
                        ele.quantity++;

                    }

                    return ele;

                })
                state.contents = newList;

            }
            else {
                state.contents.push(action.payload);

            }
        },

        totalAmount: (state, action) => {
            let totalPrice = 0;


            state.contents.map((ele) => {

                totalPrice = totalPrice + (ele.quantity * ele.unitPrice);
            })

            state.totalValue = totalPrice;
        },

        deleteItem: (state, action) => {
            let newList = state.contents.filter((ele) => {
                if (ele.id == action.payload.id) {
                    if (ele.quantity > 1) {
                        ele.quantity--;
                    }
                    else {
                        return;
                    }

                }

                return ele;
            });

            state.contents = newList;

        },

        emptyThali:(state,action)=>{
            state.contents=[];
        }



    },
})


export const { addItem, totalAmount, deleteItem,emptyThali } = restoSlice.actions

export default restoSlice.reducer