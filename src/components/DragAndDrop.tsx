import React from "react";
import { v4 as uuidv4 } from "uuid";
import"./DragAndDrop.css"
type TodoType = {
  id: string;
  title: string;
  column: ColumnType;
};

const columns = {
  incomplete: "Incomplete",
  progress: "In progress",
  completed: "Completed ",
  onhold: "Cancelled",
  another: "Just another column",
};

type Column = typeof columns;
type ColumnType = keyof Column;

const sampleTodos: TodoType[] = [
  {
    id: uuidv4(),
    title: "Todo item 1",
    column: "incomplete",
  },
  {
    id: uuidv4(),
    title: "Todo item 2",
    column: "incomplete",
  },
  {
    id: uuidv4(),
    title: "Todo item 3",
    column: "incomplete",
  },
];

function DragAndDrop() {
  const [todoTitle, setTodoTitle] = React.useState("");
  const [todos, setTodos] = React.useState<TodoType[]>(sampleTodos);

  const columnMap = Object.keys(columns) as Array<ColumnType>;

  const draggedTodoItem = React.useRef<any>(null);

  const handleAddTodo = () => {
    const todoPayload: TodoType = {
      id: uuidv4(),
      title: todoTitle,
      column: "incomplete",
    };
    setTodos([...todos, todoPayload]);
  };

  const handleColumnDrop = (column: ColumnType) => {
    const index = todos.findIndex(
      (todo) => todo.id === draggedTodoItem.current
    );
    const tempTodos = [...todos];
    tempTodos[index].column = column;
    setTodos(tempTodos);
  };
  return (
    <div className="container-sort">
      <div className="input-group">
        <input
          type="text"
          name="fruitName"
          value={todoTitle}
          placeholder="e.g make a video"
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <button className="btn" onClick={handleAddTodo}>
          Add a todo item
        </button>
      </div>

      <div className="container-sort__wrapper">
        {columnMap.map((column) => (
          <div className="container-sort__column">
            <h5>{columns[column]}</h5>
            <div
              className="container-sort__items"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleColumnDrop(column)}
            >
              {todos
                .filter((todo) => todo.column === column)
                .map((todo) => (
                  <div
                    key={todo.id}
                    className="list-item"
                    draggable
                    onDragStart={(e) => (draggedTodoItem.current = todo.id)}
                    onDragOver={(e) => e.preventDefault()}
                  >
                    <i style={{textDecoration:"none"}}></i>
                    <h3 className="dragItem">{todo.title}</h3>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DragAndDrop;