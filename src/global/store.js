import {configureStore} from '@reduxjs/toolkit';
import globalSlice from './slice.js';
const store=configureStore({
   reducer:{ 
    global:globalSlice
   },
});

export {store};