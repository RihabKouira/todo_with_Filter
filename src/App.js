import "./App.css";
import AddToDo from "./components/addToDo";
import ToDoList from "./components/toDoList";
import Filter from "./components/Filter"
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App m-5">
      <AddToDo />
      <Filter />
      <ToDoList />
    </div>
  );
}

export default App;
