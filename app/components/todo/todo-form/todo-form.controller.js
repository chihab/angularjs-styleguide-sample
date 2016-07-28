class TodoFormController {
  constructor(EventEmitter) {
      this.EventEmitter = EventEmitter;
  }
  $onChanges(changes) {
    if (changes.todo) {
      this.todo = Object.assign({}, this.todo);
    }
  }
  onSubmit() {
    if (!this.todo.title) return;
    // with EventEmitter wrapper
    this.onAddTodo(
      this.EventEmitter({
        todo: this.todo
      })
    );
    // without EventEmitter wrapper
    /*this.onAddTodo({
      $event: {
        todo: this.todo
      }
    });*/
  }
}

TodoFormController.$inject = ['EventEmitter'];

export default TodoFormController;