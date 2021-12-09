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

  return (
    <>
      {todos.map((todo, i) => (
        <div className="todo" key={i}>
          {todo.text}
        </div>
      ))}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
