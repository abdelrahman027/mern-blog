import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import Projects from './Pages/Projects'
import Dashboard from './Pages/Dashboard'
import Header from './components/Header'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const App = () => {
  const queryCLient = new QueryClient()
  return (
    <QueryClientProvider client={queryCLient} >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='signup/' element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App