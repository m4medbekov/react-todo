import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

function TodoList({arrayOfTodoItems}) {
    return (
        <ul style={styles.ul}>
            {arrayOfTodoItems.map((item, index) => {
                return <TodoItem item={item} key={item.id} index={index} />
            })}
        </ul>
    )
}

TodoList.propTypes = {
    arrayOfTodoItems: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TodoList