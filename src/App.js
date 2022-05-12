import TodoList from "./Components/TodoList";

function App() {

  const arrayOfTodoItems = [
    {id: 1, completed: false, title: 'Купить хлеб'},
    {id: 2, completed: false, title: 'Купить молоко'},
    {id: 3, completed: false, title: 'Купить масло'}
  ]

  return (
    <div className="wrapper">
      <h1>React tutorial</h1>

      <TodoList arrayOfTodoItems={arrayOfTodoItems} />
    </div>
  );
}

export default App;
