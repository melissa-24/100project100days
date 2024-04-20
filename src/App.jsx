import './App.css'
// import {Routes, Route} from 'react-router-dom'
import projects from "./components/json/projects.json"
import Proj from './components/ProjCard';
import Header from './components/Header'
import Footer from './components/Footer'


function App() {

  const completed_projects = projects.filter(project => project.is_finished)
  const started_projects = projects.filter(project => project.is_started)

  return (
    <>
      <Header />
      <main>
        {started_projects.length == 0 ?
        <div>Not projects started yet</div>
        :
        <div>
          <h2>Started Projects</h2>
          <Proj projects={started_projects} />
        </div>
        }
        {completed_projects.length == 0 ? 
        <div>No finished projects yet</div>
        :
        <div>
          <h2>Finished Projects</h2>
          <Proj projects={ completed_projects } />
        </div>
        }
      </main>
      <Footer />
    </>
  )
}

export default App
