export default (state = [], action) => {
 switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.id)
    case "UPVOTE-QUOTE": 
      let newState = state.map(quote => {})
  
    default:
      return state;
  }
}
