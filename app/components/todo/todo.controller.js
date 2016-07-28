class TodoController {
  constructor(TodoService) {
    this.todoService = TodoService;
  }
  $onInit() {
    this.newTodo = {
      title: '',
      selected: false
    };
    this.todos = [];
    this.todoService.getTodos().then(response => {
      console.log(response);
      this.todos = response
    });
  }
  $onChanges(changes) {
    if (changes.todoData) {
      this.todos = Object.assign({}, this.todoData);
    }
  }
  addTodo({ todo }) {
    if (!todo) return;
    this.todos.unshift(todo);
    console.log(this.todos);
    this.newTodo = {
      title: '',
      selected: false
    };
  }
}

TodoController.$inject = ['TodoService'];

export default TodoController;