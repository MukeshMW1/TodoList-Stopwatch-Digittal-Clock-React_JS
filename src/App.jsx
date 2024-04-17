import './App.css'
import TodoList from './TodoList.jsx'
import TodoLst from './TodoLst.jsx'
import Digital_Clock from './Digital_CLock.jsx'
import Updated_Clock from './Updated_CLock'
import Stopwatch from './Stopwatch.jsx'
function App() {

  return (
    <div className='main'>

      <Stopwatch />
      {/* <TodoList /> */}
      <TodoLst />
      {/* <Digital_Clock /> */}

      <Updated_Clock />



    </div>
  )
}

export default App
