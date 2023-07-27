import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from'react-router-dom';
import {Navbar, NavbarBrand} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <Navbar>
        <NavbarBrand href="/">HOME</NavbarBrand>
        <NavbarBrand href="/todoList">TodoList</NavbarBrand>
        <NavbarBrand href="/counter">Counter</NavbarBrand>
      </Navbar>
      <div className='container'>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/todoList" element={<TodoList />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
