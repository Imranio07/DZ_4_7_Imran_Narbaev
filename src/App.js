import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import TodoList from "./pages/ToDoList/TodoList";
import Users from "./pages/Register/Register";
import Home from "./pages/home";
import Register from "./pages/Register/Register";
import Slider from "./pages/Slider/slider";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="TodoList" element={<TodoList />} />
        <Route path="Register" element={<Register />} />
        <Route path="Slider" element={<Slider />} />
        <Route path="Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;