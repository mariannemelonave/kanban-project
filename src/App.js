import "./App.css";
import Column from "./components/Column/Column";

const App = () => {
  return (
      <main className='main'>
          <h1 className='main-title'>Kanban</h1>
          <div className='main-container'>
              <Column nameColumn='To Do' color='blue' />
              <Column nameColumn='In progress' color='orange' img='iconInProgress'  />
              <Column nameColumn='Review' color='purple' />
              <Column nameColumn='Done' color='green' img='iconDone' />
          </div>
      </main >
  )
}

export default App