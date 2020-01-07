const state = {
  isFetched: false,
  data: []
};

export default function reducer(initialState = state, action) {
  switch (action.type) {
    case "FETCH_TODO_LIST":
      return { isFetched: true, data: action.payload };

    default:
      return initialState;
  }
}
