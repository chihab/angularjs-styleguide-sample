import controller from './todo.controller';

const TodoComponent = {
  controller,
  template: `
    <div class="todo">
      <h3> Todo Form </h3>
      <todo-form
        todo="$ctrl.newTodo"
        on-add-todo="$ctrl.addTodo($event);">
      {{$ctrl.todos}}
      <todo-list
        todos="$ctrl.todos"></todo-list>
    </div>
  `
};

export default TodoComponent;