export default (state = [], action) => {
  let idx;
  switch (action.type) {

    case "ADD_QUOTE":
      return [...state, action.quote];

    case "REMOVE_QUOTE":
      idx = state.findIndex(quote => quote.quoteId === action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    case "UPVOTE_QUOTE":
      idx = state.findIndex(quote => quote.quoteId === action.id);
      return [
        ...state.slice(0, idx),
        { ...state[idx], votes: state[idx].votes + 1 },
        ...state.slice(idx + 1)
      ];

    case "DOWNVOTE_QUOTE":
      idx = state.findIndex(quote => quote.quoteId === action.id);
      
      if (state[idx].votes > 0) {
        return [
          ...state.slice(0, idx),
          { ...state[idx], votes: state[idx].votes - 1 },
          ...state.slice(idx + 1)
        ];
      }
      else {
        return state;
      }

    default:
      return state;
  }
}
