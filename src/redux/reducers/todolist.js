// import { createStore } from 'redux';

const defaultState = {
  inputValue: 'Input Something',
  list: [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ]
}

export default (state = defaultState, action) => {
  // Reducer里面只能接收state, 不能改变state
  if (action.type === 'changeInput') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.inputValue
    return newState 
  }
  return state
}