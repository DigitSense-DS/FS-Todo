import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
      <h1>Todo List</h1>
      {/* should map the todos */}
      <ul className="todo-list">
        {/* add handler to complete the item once it's clicked */}
        <li className="completed">Todo 1</li>
        <li>Todo 2</li>
      </ul>

      <div>
        {/* add handler to create new todo */}
        <form>
          <input type="text" name="name" placeholder="Todo name" />
          <button type="submit">Add</button>
        </form>
      </div>
  );
};

export default Home;
