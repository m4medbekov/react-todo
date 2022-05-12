import React from "react";
import TodoItem from "./TodoItem";

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

export default function TodoList({arrayOfTodoItems}) {
    return (
        <ul style={styles.ul}>
            {arrayOfTodoItems.map((item, index) => {
                return <TodoItem item={item} key={item.id} index={index} />
            })}
        </ul>
    )
}