import { configureStore,  } from '@reduxjs/toolkit';
import formReducers from './form/form-reducers';

// const rootReducer = combineReducers({
//   FormData,
// });

const store = configureStore({
  reducer: {
      FormData : formReducers,
  }
});

export default store 