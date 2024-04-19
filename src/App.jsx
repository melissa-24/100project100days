import './App.css'
// import {Routes, Route} from 'react-router-dom'
import projects from "./components/json/projects.json"
// import TestCard from './components/TestCard';
import Test from './components/Test'

function App() {

  const completed_projects = projects.filter(project => project.is_finished)
  const started_projects = projects.filter(project => project.is_started)
  // const projectRoutes = projects.map(project => (
  //   <Route key={project.day} path={`/${project.day}`} element={<TestCard projectId={project.day} />} /> // Adjust the path according to your project data
  // ));

  return (
    <>
      {/* <Header /> */}
      <header>
        <h1>Hello</h1>
      </header>
      {started_projects.length == 0 ?
      <div>Not projects started yet</div>
      :
      <div>
        <h2>Started Projects</h2>
        <Test projects={started_projects} />
      </div>
      }
      {completed_projects.length == 0 ? 
      <div>No finished projects yet</div>
      :
      <div>
        <h2>Finished Projects</h2>
        <Test projects={ completed_projects } />
      </div>
      }
      {/* <Routes>
        {projectRoutes}
      </Routes> */}
      {/* <Footer /> */}
    </>
  )
}

export default App
