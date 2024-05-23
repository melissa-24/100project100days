import {Routes, Route} from 'react-router-dom'
import backgroundImage from './assets/hexellence.png'
import './styles/style.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './views/Home'
import Logs from './views/Log'
import PageOne from './views/ProjectPageOne'
import BackgroundChanger from './views/projects/BackgroundChanger'
import ImportantDates from './views/projects/ImportantDates'
import Challenges from './views/projects/Challenges'
import CssImage from './views/projects/CssImage'
import ImagesApi from './views/projects/ImagesApi'


function App() {


  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/logs" element={<Logs />} />
          {/* <Route path="/project_page_one" element={<PageOne />} /> */}
          <Route path="projects/2" element={<Logs />} />
          <Route path="/projects/3" element={<BackgroundChanger />} />
          <Route path="/projects/5" element={<ImagesApi />} />
          <Route path="/projects/7" element={<ImportantDates />} />
          <Route path="/projects/16" element={<Challenges />} />
          <Route path="/projects/17" element={< CssImage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
