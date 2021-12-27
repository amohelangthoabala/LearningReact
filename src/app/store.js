import {configureStore} from '@reduxjs/toolkit';
import { piecejobAPI } from '../services/pieceJobAPI';

export default configureStore({
    reducer: {
        [piecejobAPI.reducerPath]: piecejobAPI.reducer,
    },
})