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
  const [value, setValue] = React.useState(''); // Managed variable
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page from refreshing
    if (!value) return;
    // Create new array of todos with old + new input.
    const newTodos = [...todos, { text: value, isCompleted: false }];
    setTodos(newTodos);
    setValue(''); // Clear the input field
  };

  return (
    <>
      {todos.map((todo, i) => (
        <div className="todo" key={i}>
          {todo.text}
        </div>
      ))}
      // Create input form and handle event with the handleSubmit function.
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          placeholder="Add Todo ..."
          onChange={(e) => setValue(e.target.value)} // Set value in input.
        />
      </form>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
