import Todo from "./components/Todo";

function App() {

  const todos = [
    {id: 1, title: 'Learn React'},
    {id: 2, title: 'Learn Next JS'}
  ]


  return (
    <div>
      <h1>My Todos</h1>
      {
        todos.map( todo => <Todo key={todo.id} title={todo.title} />)
      }
    </div>
  );
}

export default App;
