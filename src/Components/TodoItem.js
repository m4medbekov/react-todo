import React from "react";
import PropTypes from "prop-types";

const sytles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

function TodoItem({item, index, onChange}) {
    const classes = []

    if (item.completed === true) {
        classes.push('done')
    }

    return (
        <li style={sytles.li}>
            <span className={classes.join(' ')}>
                <input 
                    type='checkbox' 
                    style={sytles.input} 
                    onChange={() => onChange(item.id)}
                    checked={item.completed} 
                />
                <strong>{index + 1}</strong>
                &nbsp;
                {item.title}
            </span>
            <button className="removeBtn">&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem