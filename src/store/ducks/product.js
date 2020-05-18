// ======== Action Types ===========
export const Types = {
  SET_PRODUCT: 'product/SET',
};

// ======== Reducers ===========
const initialState = {
  products: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_PRODUCT:
      return {...state, products: [...state.products, action.payload]};

    default:
      return state;
  }
}

// ======== Actions Creators ===========
export function setProduct(data) {
  return {
    type: Types.SET_PRODUCT,
    payload: data,
  };
}
