import React from 'react'
import Register from './Register'
import Login from './Login'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App