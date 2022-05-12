import React, { useState, useEffect } from "react";
import AddItem from "./Components/AddItem";
import TodoList from "./Components/TodoList";
import Context from "./context";
import Loader from "./Components/Loader";

function App() {

  const [arrayOfTodoItems, setArrayOfTodoItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(arrayOfTodoItems => {
        setTimeout(() => {
          setArrayOfTodoItems(arrayOfTodoItems)
          setLoading(false)
        }, 2000)
      })
  }, [])

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
        {loading && <Loader />}
        {arrayOfTodoItems.length ? (
          <TodoList arrayOfTodoItems={arrayOfTodoItems} onToggle={onToggle} />
        ) : (
          loading ? null : <p>Нет задач</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
