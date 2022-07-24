import { useEffect, useState } from "react";

function App() {
  interface TodoItem {
    id: number;
    title: string;
    description: string;
    completed: boolean;
  }

  const [todoItems, setTodoItems] = useState([] as TodoItem[]);

  useEffect(() => {
    fetch("http://localhost:8000/api/todos/")
      .then(res => res.json())
      .then(data => setTodoItems(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold text-center">Todo List Django React</h1>
      {todoItems.map(item => (
        <div key={item.id} className="flex flex-col">
          <strong>{item.title}</strong>
          <span>{item.description}</span>
          {item.completed ? <input type="checkbox" defaultChecked /> : <input type="checkbox" />}
        </div>
      ))}
    </div>
  )
}

export default App
