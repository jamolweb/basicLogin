import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import RegesterPege from './RegesterPage'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/login' element={<HomePage />} />
        <Route path='/regester' element={<RegesterPege />} />
    </Routes>
  )
}

export default Routers