import { configureStore } from '@reduxjs/toolkit';

import { tmdbApi } from '../services/TMDB';

export default configureStore({
    reducer: {
        // Add api reducer
        [tmdbApi.reducerPath]: tmdbApi.reducer,
    },
    //Adding the api middleware
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(tmdbApi.middleware),
});