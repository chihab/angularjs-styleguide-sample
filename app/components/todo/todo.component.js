import controller from './todo.controller';

const TodoComponent = { 
  bindings: {
    todoData: '<'
  },
  controller,
  template: `
    <div class="todo">
      <todo-form
        todo="$ctrl.newTodo"
        on-add-todo="$ctrl.addTodo($event);">
      </todo-form>
      <todo-list
        todos="$ctrl.todos"></todo-list>
    </div>
  `
};

export default TodoComponent;