import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { ProjectPage } from './pages/ProjectPage'
import { useLenis } from './hooks/useLenis'
import { useHashScroll } from './hooks/useHashScroll'
import './index.css'

function AppShell() {
  useLenis()
  useHashScroll()

  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppShell />
    </BrowserRouter>
  )
}

export default App
