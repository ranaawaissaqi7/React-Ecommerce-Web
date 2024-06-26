import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userCardData: []
}

export const UserAllDataSlice = createSlice({
  name: 'userAllDataHandling',
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.userCardData.push(action.payload)
    },

    deleteCard: (state, action) => {
      console.log("action id => ", action.payload)
      let newData = state.userCardData.filter((item, index) => {
        return index !== action.payload

      })
      state.userCardData = newData
    },
    deleteAllCard:(state,action)=>{
      state.userCardData=[]
    }
  },
})

// Action creators are generated for each case reducer function
export const { addCard, deleteCard, deleteAllCard } = UserAllDataSlice.actions

export default UserAllDataSlice.reducer