import {Routes, Route} from 'react-router-dom'
import './static/css/style.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './views/Home'
import Logs from './views/Log'
import PageOne from './views/ProjectPageOne'


function App() {


  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/project_page_one" element={<PageOne />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
