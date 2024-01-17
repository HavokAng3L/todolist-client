export default function TodoListHeading({ listLength }) {
  return (
    <h2 className="todoHeading">
      TodoList! <span>{listLength}</span>
    </h2>
  );
}
