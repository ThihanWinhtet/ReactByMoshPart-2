import useToDos from "./hooks/useTodos";

const TodoList = () => {

  let {data : todos, error, isLoading} = useToDos();

  if (isLoading) return <p>Loading</p>
  if (error) return <p>{error.name}</p>;

  return (
    <ul className="list-group">
      {todos?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
