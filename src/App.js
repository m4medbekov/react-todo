import { useState } from "react";
import TodoList from "./Components/TodoList";

function App() {

  let [arrayOfTodoItems, setArrayOfTodoItems] = useState([
    {id: 1, completed: false, title: 'Купить хлеб'},
    {id: 2, completed: false, title: 'Купить молоко'},
    {id: 3, completed: false, title: 'Купить масло'}
  ])

  function onToggle(id) {
    setArrayOfTodoItems(
      arrayOfTodoItems.map(item => {
        if (item.id === id) {
          item.completed = !item.completed
        }
        return item
      })
    )
  }
  
  return (
    <div className="wrapper">
      <h1>React tutorial</h1>

      <TodoList arrayOfTodoItems={arrayOfTodoItems} onToggle={onToggle} />
    </div>
  );
}

export default App;
