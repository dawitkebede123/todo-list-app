// components/TodoList.tsx
"use client";
import { useTodoStore } from "@/store/todoStore";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useTodoStore((state) => state.todos);

  if (todos.length === 0) return <p className="text-gray-500">No tasks yet.</p>;

  return (
    <div className="mt-4 space-y-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
