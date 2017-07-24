import {combineReducers} from 'redux'

let initial = JSON.parse(window.localStorage.getItem('images'))

const images = (state = initial, action) => {
  switch (action.type) {
    case "MOVE_IMAGE":
      const newState = state.slice()
      const i = action.new.index
      newState[i] = Object.assign({}, state[i], {
        top: action.new.top,
        left: action.new.left
      })
      return newState
    default:
      return state || []
  }
}

const reducer = combineReducers({
  images: images
})

export default reducer
