import { useState } from "react";
import AddItem from "./Components/AddItem";
import TodoList from "./Components/TodoList";
import Context from "./context";

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
  
  function removeItem(id) {
    setArrayOfTodoItems(arrayOfTodoItems.filter(item => item.id !== id))
  } 

  function addItem(title) {
    setArrayOfTodoItems(
      arrayOfTodoItems.concat([
        {
          title,
          id: Date.now(),
          completed: false
        }
      ])
    )
  }

  return (
    <Context.Provider value={{ removeItem }}>
      <div className="wrapper">
        <h1>Задачи на день</h1>
        <AddItem onCreate={addItem} />

        {arrayOfTodoItems.length ? (
          <TodoList arrayOfTodoItems={arrayOfTodoItems} onToggle={onToggle} />
        ) : (
          <p>Нет задач</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
