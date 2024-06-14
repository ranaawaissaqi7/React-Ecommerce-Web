import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './features/AuthSlice'
import UserAllDataReducer from './features/UserAllDataSlice'
export const Store = configureStore({
  reducer: {
    authHandling: AuthReducer,
    userAllDataHandling: UserAllDataReducer,
  },
})