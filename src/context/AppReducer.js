export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSCATION':
      return {
        ...state,
        transcations: state.transcations.filter(transcation => transcation.id !== action.payload)
      }
    case 'ADD_TRANSCATION':
      return{
      ...state,
      transcations: [action.payload, ...state.transcations]
    }
    default:
      return state;
  }
}