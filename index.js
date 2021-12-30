function App() {
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'drink unfathomable amounts of Mountain Dew',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    },
    {
      text: 'get offline raided',
      isCompleted: false,
    },
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text:text, isCompleted:false}];
    setTodos(newTodos);
  };

  const removeTodo = index => {
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };


  return (
    <>
      {todos.map((todo, i) => (
        <Todo index={i} todo={todo} remove={removeTodo} />
      ))}
      <TodoForm addTodo={addTodo}></TodoForm>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
