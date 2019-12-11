import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionTypes'

export const changInputAction = (value) => ({
  type: CHANGE_INPUT,
  value
})

export const addItemAction = () => ({
  type: ADD_ITEM
})

export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
})