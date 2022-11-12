
import './App.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './store/TodoSlice';
import TodolList from './components/TodolList';
import InputField from './components/InputField';

function App() {

  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const addTask = () => {
    dispatch(addTodo({ text }))
    setText('')

  }

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
      <TodolList />
    </div>
  );
}

export default App;
