// components/TodoForm.tsx
"use client";
import { useState } from "react";
import { useTodoStore } from "@/store/todoStore";
import { todoSchema } from "@/lib/schema";
import { z } from "zod";

export default function TodoForm() {
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      todoSchema.parse({ myInput: input }); // Validate input
      addTodo(input);
      setInput("");
      setError(null);
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border rounded p-2 w-full"
        placeholder="Add a new task..."
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}
