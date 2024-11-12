
import './App.css'

const headertTitle = 'Todo List';
const todoList = [
  { id: 1,
    title: ' Task 1'
  },
  { id: 2,
    title: ' Task 1'
    
  },{
    id: 3,
    title: ' Task 3'
    
  }];


function App() {
 
  return (
    <>
      <div>
        <h1>{headertTitle}</h1>
        <ul>
        {todoList.map(function (item) {
          return (
            <li key={item.objectID}>
              <span>{item.id}</span>
              <span>{item.title}</span>
            </li>
          );
        })}
        </ul>
      </div>
      
    </>
  )
}

export default App
