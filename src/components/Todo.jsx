import { useQueryClient, useMutation } from "@tanstack/react-query";

export default function Todo({ id, todo }) {
  const queryClient = useQueryClient();

  async function deleteTodo(id) {
    const res = await fetch(`https://todolist-api-mcq1.onrender.com/todo/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
    return res.json();
  }

  const mutation = useMutation({
    mutationFn: (id) => deleteTodo(id),
    // There has to be a faster way to re-render the list
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  function handleRemoveClick() {
    mutation.mutate(id);
  }

  return (
    <div className="todoItem">
      <h3>{todo}</h3>
      <button onClick={handleRemoveClick}>Remove</button>
    </div>
  );
}
