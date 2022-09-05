import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../services/Auth/AuthServices';
import { squeezeApi } from '../services/Squeeze/SqueezeServices';
import authSlice from './Auth/authSlice';
import isLoadingSlice from './Loading/loadingSlice';

export const store = configureStore({
  reducer: {
    isLoading: isLoadingSlice.reducer,
    auth: authSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [squeezeApi.reducerPath]: squeezeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, squeezeApi.middleware),
  devTools: true,
});

// setupListeners(store.dispatch);
