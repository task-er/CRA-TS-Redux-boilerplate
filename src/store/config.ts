import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { createLogger } from 'redux-logger'
import { combineReducers, configureStore, Dispatch } from '@reduxjs/toolkit'

const logger = createLogger()
const rootReducer = combineReducers({
  // counter: counterSlice.reducer,
})

const initialState = {}
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: initialState,
  enhancers: (defaultEnhancers) => [...defaultEnhancers],
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = (): Dispatch => useDispatch<AppDispatch>()
