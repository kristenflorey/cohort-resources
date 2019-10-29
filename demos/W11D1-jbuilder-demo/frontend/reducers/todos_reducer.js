import {
  RECEIVE_TODOS_AND_STEPS,
  RECEIVE_TODO,
  REMOVE_TODO,
  TODO_ERROR,
} from '../actions/todo_actions';

const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};

  switch(action.type){
    case RECEIVE_TODOS_AND_STEPS:
      // action.todos.forEach( todo => {
      //   nextState[todo.id] = todo;
      // });
      return action.payload.todos;
    case RECEIVE_TODO:
      const newTodo = { [action.todo.id]: action.todo };
      return Object.assign({}, state, newTodo);
    case REMOVE_TODO:
      nextState = Object.assign({}, state);
      delete nextState[action.todo.id];
      return nextState;
    default:
      return state;
  }
};

export default todosReducer;

// Sample State Shape
// {
//   "1": {
//     id: 1,
//     title: "wash car",
//     body: "with soap",
//     done: false
//   },
//   "2": {
//     id: 2,
//     title: "wash dog",
//     body: "with shampoo",
//     done: true
//   },
// };
