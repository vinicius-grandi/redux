function calculatorReducer(
  state: number = 0, 
  action: { type: 'SUM' | 'SUB', payload: [a: number, b: number] }) {
    const currState = state;
    const { type, payload } = action;
    const [a, b] = (payload === undefined) ? [0, 0] : payload;
    const calculator = {
      SUM: (a: number, b: number) => a + b,
      SUB: (a: number, b: number) => a - b,
    }
  
    return calculator[type] === undefined 
      ? currState 
      : calculator[type](a, b);
}

export default calculatorReducer;
