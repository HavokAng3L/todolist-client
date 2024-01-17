import { useQuery } from "@tanstack/react-query";
import TodoListHeading from "./TodoListHeading";
import Todo from "./Todo";

export default function TodoListRender() {
  async function getTodos() {
    const data = await fetch("http://localhost:3000/api/todo");
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
      <TodoListHeading listLength={data?.length} />
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
