export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'


export const addTask = (todoList) => ({
    type: ADD_TASK , 
    data: todoList}
);
  
export const deleteTask = (task) => ({
    type: DELETE_TASK , 
    data: task})
  