import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from '../actions/actionTypes'

const defaultState = {
  inputValue: 'Input Something',
  value: '',
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
  if (action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.value = action.value
    return newState
  }
  if (action.type === ADD_ITEM) {
    let newStates = JSON.parse(JSON.stringify(state)) 
    newStates.list.push(newStates.value)  //push新的内容到列表中去
    newStates.value = ''
    return newStates
  }
  if (action.type === DELETE_ITEM) {
    let newStates = JSON.parse(JSON.stringify(state)) 
    newStates.list.splice(action.index, 1)  //push新的内容到列表中去
    return newStates
  }
  return state
}