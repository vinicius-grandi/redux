export const sum = (a: number, b: number) => ({
    type: 'SUM',
    payload: [a, b],
});

export const sub = (a: number, b: number) => ({
  type: 'SUB',
  payload: [a, b],
});
