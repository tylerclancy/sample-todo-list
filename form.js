function TodoForm(addTodo) {

  const [value, setValue] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page from refreshing
    if (!value) return;
    addTodo(value);
    setValue(''); // Clear the input field
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add Todo ..."
        onChange={(e) => setValue(e.target.value)} // Set value in input.
      />
    </form>
  );
}
