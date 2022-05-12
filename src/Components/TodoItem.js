import React from "react";

export default function TodoItem({item, index}) {
    return (
        <li>
            <strong>{index + 1}</strong>
            {item.title}
        </li>
    )
}