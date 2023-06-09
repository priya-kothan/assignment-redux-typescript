import { combineReducers, configureStore } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'

import postReducer from './postSlice'

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
    post: postReducer
})

const reducer = {
  post: postReducer
}

export const store = configureStore({ reducer });

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']