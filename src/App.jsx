// Css
import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { onAuthStateChanged } from 'firebase/auth'

// hooks
import { useState, useEffect } from 'react'
import { useAuthentication } from './hooks/useAuthentication'

// context
import { AuthProvider } from './context/AuthContext'

import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import CreatePost from './Pages/CreatePost/CreatePost'
import Dashboard from './Pages/Dashboard/DashBoard'
import Search from './Pages/Search/Search'
import Post from './Pages/Post/Post'
import EditPost from './Pages/EditPost/EditPost'

function App() {

  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })

  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <div className="App">
        <AuthProvider value={{ user }}>
          <BrowserRouter>
            <NavBar />
            <div className="container">
              <Routes>
                <Route path='/Mini-Blog' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/search' element={<Search />} />
                <Route path='/post/:id' element={<Post/>} />
                <Route path='/login' element={!user ? <Login/> : <Navigate to="/Mini-Blog" />} />
                <Route path='/register' element={!user ? <Register/> : <Navigate to="/Mini-Blog" />} />
                <Route path='/post/edit/:id' element={user ? <EditPost/> : <Navigate to="/login" />}/>
                <Route path='/posts/create' element={user ? <CreatePost/> : <Navigate to="/login" />}/>
                <Route path='/dashboard'element={user ? <Dashboard/> : <Navigate to="/login" />} />
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        </AuthProvider>
      </div>
    </>
  )
}

export default App
