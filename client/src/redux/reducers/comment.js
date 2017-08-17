export default function dishReducer(state={ all: [] }, action) {
  switch (action.type) {
    case 'LOAD_COMMENTS':
      return { ...state, all: action.comments }
    default:
      return state
  }
}
