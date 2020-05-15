import {
    ADD_TASK,
    DELETE_TASK
  } from './action'
  
  const initialState = {
    todoList: []
  }
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
  

      case ADD_TASK:
        return Object.assign({}, state, {
          todoList: action.data
        })

      case DELETE_TASK:
        return Object.assign({}, state, {
          todoList: action.data
        })
      default:
        return state
    }
  }