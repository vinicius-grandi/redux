import { createStore, combineReducers } from 'redux';
import calculatorReducer from './Calculator/Calculator.reducer';



const rootReducer = combineReducers({
  calculator: calculatorReducer,
});
const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export default store;
