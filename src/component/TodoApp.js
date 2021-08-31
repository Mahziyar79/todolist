import { useEffect, useState } from "react";
import NavBar from "../NavBar";
import TodoForms from "./TodoForms";
import TodoList from "./TodoList";

const TodoApp = () => {

  const [todos, setTodos] = useState([]);

  const [filter, setFilter] = useState([]);
  const [value, setValue] = useState("All");

  useEffect(()=>{
    showLocal()
  },[])

  useEffect(() => {
    filterHandler(value);
    saveLocal()
  }, [todos, value]);

  // save Item to LocalStorage
  const saveLocal = () => {
    if(localStorage.getItem('todos')===null){
      localStorage.setItem('todos', JSON.stringify([]))
    }else{
      localStorage.setItem('todos',JSON.stringify(todos))
    }
  }

  // Show Item in LocalStorage
  const showLocal = () => {
    if(localStorage.getItem('todos')===null){
      localStorage.setItem('todos', JSON.stringify([]))
    }else{
     setTodos(JSON.parse(localStorage.getItem('todos'))) 
    }
  }

  // add a todos
  const addToHandler = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  // complete todos
  const completeTodo = (id) => {
    const index = todos.findIndex((item) => item.id === id);
    const product = { ...todos[index] };
    product.isCompleted = !product.isCompleted;
    const newProducts = [...todos];
    newProducts[index] = product;
    setTodos(newProducts);
  };

  // delete todos
  const deleteHandler = (id) => {
    const filterItem = todos.filter((p) => p.id !== id);
    setTodos(filterItem);
  };

  // update todos
  const updateTodo = (id, input) => {
    const index = todos.findIndex((item) => item.id === id);
    const product = { ...todos[index] };
    product.text = input;
    const newProducts = [...todos];
    newProducts[index] = product;
    setTodos(newProducts);
  };

  // filter by select tag
  const filterHandler = (status) => {
    switch (status.value) {
      case "Completed":
        setFilter(todos.filter((p) => p.isCompleted));
        break;
      case "UnCompleted":
        setFilter(todos.filter((p) => !p.isCompleted));
        break;
      default:
        setFilter(todos);
    }
  };

  const valueHandler = (selectedOption) => {
    setValue(selectedOption);
    filterHandler(selectedOption);
  };

  return (
    <div className="container">
      <NavBar
        totlaUncompleted={todos.filter((item) => !item.isCompleted).length}
        selectedOption={value}
        valueHandler={valueHandler}
      />
      <TodoForms submitHandler={addToHandler} />
      <TodoList
        todos={filter}
        onComplete={completeTodo}
        onDelete={deleteHandler}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoApp;
