import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';


const headertTitle = 'Todo List';
const list = [
  { id: 1, title: 'Task 1' },
  { id: 2, title: 'Task 2' },
  { id: 3, title: 'Task 3' }
];

function App() {

  return (
    <>
      <div>
        <h1>{headertTitle}</h1>
        <TodoForm/>
        <TodoList todoListData ={list}/>
      </div>
    </>
  )
}

export default App
