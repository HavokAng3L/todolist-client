import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useState } from "react";

export default function TodoListInput() {
  const queryClient = useQueryClient();
  const [todo, setTodo] = useState("");
  const [inputStatus, setInputStatus] = useState("Go ahead! Give it a try.");

  async function postTodo(todo) {
    const res = await fetch("https://todolist-api-mcq1.onrender.com/todo/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        todo: todo,
      }),
    });
    return res.json();
  }

  const mutation = useMutation({
    mutationFn: (todo) => postTodo(todo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (todo === "") {
      setInputStatus("Enter a todo.");
      return;
    } else {
      mutation.mutate(todo);
      setInputStatus("Todo added!");
      setTodo("");
    }
  }

  function handleChange(e) {
    setTodo(e.target.value);
  }

  return (
    <div className="todoListInput">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={todo}
          placeholder="Add a task. Or anything!"
        />
      </form>
      <p>{inputStatus}</p>
    </div>
  );
}
