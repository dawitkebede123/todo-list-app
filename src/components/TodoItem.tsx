// components/TodoItem.tsx
"use client";
import { Todo, useTodoStore } from "@/store/todoStore";

export default function TodoItem({ todo }: { todo: Todo }) {
  const { toggleTodo, removeTodo } = useTodoStore();

  return (
    <div className="flex justify-between items-center border-b py-2">
      <span
        className={`cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""}`}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <button
        onClick={() => removeTodo(todo.id)}
        className="text-red-500 hover:text-red-700"
      >
        ❌
      </button>
    </div>
  );
}
