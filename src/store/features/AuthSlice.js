import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false,
  isShipingAdress: false
}

export const AuthSlice = createSlice({
  name: 'authHandling',
  initialState,
  reducers: {
    isAuthChangeHandler: (state, action) => {
      state.isAuth = action.payload
    },
    isShipingAdressChangeHandler: (state, action) => {
      state.isShipingAdress = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { isAuthChangeHandler, isShipingAdressChangeHandler } = AuthSlice.actions

export default AuthSlice.reducer