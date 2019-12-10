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
    newState.inputValue = action.value
    return newState
  }
  if (action.type === 'addItem') {
    let newStates = JSON.parse(JSON.stringify(state)) 
    newStates.list.push(newStates.inputValue)  //push新的内容到列表中去
    newStates.inputValue = ''
    return newStates
  }
  if (action.type === 'deleteItem') {
    let newStates = JSON.parse(JSON.stringify(state)) 
    newStates.list.splice(action.value, 1)  //push新的内容到列表中去
    newStates.inputValue = action.inputValue
    return newStates
  }
  return state
}