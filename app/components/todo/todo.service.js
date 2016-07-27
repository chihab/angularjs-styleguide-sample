class TodoService {
  constructor($q) {
    this.$q = $q;
  }
  getTodos() {
    return this.$q.when([{
      title: 'Default',
      selected: false
    }]);
  }
}

TodoService.$inject = ['$q'];

export default TodoService;