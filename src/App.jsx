import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/views/Home'
import Logs from './components/views/Log'


function App() {


  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/logs" element={<Logs />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
