import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sub, sum } from '../store/Calculator/Calculator.actions';
import { RootState } from '../store/store';

const Calculator = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const handleChange = (
    ev: React.ChangeEvent<HTMLInputElement>, 
    fn: Function
    ) => fn(Number(ev.target.value));

  const result = useSelector((state: RootState) => state.calculator);
  const dispatch = useDispatch();
  return (
    <>
      <input
        type="number"
        placeholder='a'
        value={ a }
        onChange={ (e) => handleChange(e, setA) } />
      <input
        type="number"
        placeholder='b'
        value={ b }
        onChange={ (e) => handleChange(e, setB) } />
      <button
        type='button'
        onClick={ () => dispatch(sum(a, b)) }
      >
        SOMAR
      </button>
      <button 
        type='button'
        onClick={ () => dispatch(sub(a, b)) }
      >
        SUBTRAIR
      </button>

      <p>Resultado: { result }</p>
    </>
  );
};

// function mapStateToProps(state) {
//   return {
//     result: state.calculator,
//   };
// }

// export default connect(mapStateToProps)(Calculator);
export default Calculator;
