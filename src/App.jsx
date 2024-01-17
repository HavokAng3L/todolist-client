import TodoListRender from "./components/TodoListRender";
import TodoListInput from "./components/TodoListInput";
import TodoListHeading from "./components/TodoListHeading";

export default function App() {
  return (
    <main>
      <TodoListHeading />
      <TodoListRender />
      <TodoListInput />
    </main>
  );
}
