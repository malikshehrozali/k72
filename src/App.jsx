
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Agency from './pages/Agency'
import Work from './pages/Work'
import Blog from './pages/Blog'
import NotFound from './pages/NotFound'


const App = () => {

  return (
    <>
      <div className='relative'>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/agency' element={<Agency />} />
          <Route path='/work' element={<Work />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='*' element={<NotFound />} />

        </Routes>
      </div>
    </>
  )
}

export default App	