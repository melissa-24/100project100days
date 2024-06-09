import {Routes, Route} from 'react-router-dom'
import './styles/style.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './views/Home'
import Logs from './views/Log'
import BackgroundChanger from './views/projects/BackgroundChanger'
import ImportantDates from './views/projects/ImportantDates'
import Challenges from './views/projects/Challenges'
import CssImage from './views/projects/CssImage'
import ImagesApi from './views/projects/ImagesApi'
import GithubProject from './views/projects/GithubProject'
import ViteTemplate from './views/projects/ViteTemplate'

function App() {


  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/projects" element={<ViteTemplate />} />
          <Route path="/projects/1" element={<ViteTemplate />} />
          <Route path="/projects/2" element={<Logs />} />
          <Route path="/projects/3" element={<BackgroundChanger />} />
          <Route path="/projects/5" element={<ImagesApi />} />
          <Route path="/projects/9" element={<ImportantDates />} />
          <Route path="/projects/18" element={<Challenges />} />
          <Route path="/projects/19" element={< CssImage />} />
          <Route path="/projects/20" element={< GithubProject />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
