import './App.css'
import {Routes, Route} from 'react-router-dom'
import projects from "./components/json/projects.json"
import TestCard from './components/TestCard';
import Test from './components/Test'

function App() {

  // const completed_projects = projects.filter(project => project.is_finished)
  // const projectRoutes = projects.map(project => (
  //   <Route key={project.day} path={`/${project.day}`} element={<TestCard projectId={project.day} />} /> // Adjust the path according to your project data
  // ));

  return (
    <>
      {/* <Header /> */}
      <header>
        <h1>Hello</h1>
      </header>
      <Test />
      {/* <Routes>
        {projectRoutes}
      </Routes> */}
      {/* <Footer /> */}
    </>
  )
}

export default App
