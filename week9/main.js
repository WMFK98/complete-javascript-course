class Todo {
  constructor(id, description) {
    this.id = id;
    this.description = description;
  }
  getTodo() {
    return { id: this.id, description: this.description };
  }
  setDescription(newDescription) {
    this.description = newDescription;
  }
}

const TodoManagement = function () {
  const todos = [];

  const addTodo = (desc) => todos.push(desc);

  const findTodo = (searchId) => todos.find((todo) => todo.id === searchId);

  const findIndexTodo = (searchId) =>
    todos.findIndex((todo) => todo.id === searchId);

  const removeTodo = (removeId) => todos.splice(findIndexTodo(removeId), 1);

  const getTodos = () => todos;

  return { addTodo, findTodo, findIndexTodo, removeTodo, getTodos };
};

const todo1 = new Todo(1, 'hello');
const todo2 = new Todo(2, 'hi');
const todo3 = new Todo(3, 'hk');
const tm = TodoManagement();
console.log(tm.addTodo(todo1));
console.log(tm.addTodo(todo2));
console.log(tm.addTodo(todo3));

console.log(tm.getTodos());
console.log(tm.findTodo(2));
console.log(tm.findIndexTodo(2));
console.log(tm.removeTodo(1));
console.log(tm.getTodos());
