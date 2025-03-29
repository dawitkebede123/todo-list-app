// app/page.tsx
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <main className="max-w-md mx-auto p-4">
      <h1 className="text-xl font-bold text-center mb-4">📝 Todo List</h1>
      <TodoForm />
      <TodoList />
    </main>
  );
}
