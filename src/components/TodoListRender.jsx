import { useQuery } from "@tanstack/react-query";
import Todo from "./Todo";

export default function TodoListRender() {
  async function getTodos() {
    const data = await fetch("https://todolist-api-mcq1.onrender.com/todo");
    return data.json();
  }

  const { data, status, error } = useQuery({
    queryKey: ["todos"],
    queryFn: () => getTodos(),
  });

  const todoList = data?.map((data) => {
    return <Todo key={data._id} id={data._id} todo={data.todo} />;
  });

  return (
    <div className="listRender">
      {status === "success" ? (
        <div>{todoList}</div>
      ) : status === "pending" ? (
        <p>please wait...</p>
      ) : (
        <p>error</p>
      )}
    </div>
  );
}
