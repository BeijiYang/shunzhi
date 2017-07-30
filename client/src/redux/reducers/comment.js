let comment = {
  all: {}
}

export default function dishReducer(state=comment, action) {
  switch (action.type) {
    case 'LOAD_COMMENTS':
      return { ...state, all: action.comments }
    case 'ADD_COMMENT':
      console.log('ADD_COMMENT', action.comment)
      return { ...state, all: { ...state.all, [action.comment._id]: {
        userId: action.comment.userId,
        content: action.comment.content
      } }}
    default:
      return state
  }
}
