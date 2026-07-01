function Header({ input, setInput, addTodo }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      
      <input
        type="text"
        value={input}
        placeholder="Enter a task..."
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: "8px", width: "200px" }}
      />

      <button
        onClick={addTodo}
        style={{ marginLeft: "10px", padding: "8px 12px" }}
      >
        Add
      </button>

    </div>
  );
}

export default Header;