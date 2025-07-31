// create a component that accepts a todo prop
function TodoListItem({ todo }) {
    // return a list item element that displays the todo's title
    return (
        <li>{todo.title}</li>
    )
}

export default TodoListItem