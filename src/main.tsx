import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Route, BrowserRouter, Routes } from 'react-router-dom'
import App from './pages/App/App'
import Page1 from './pages/Page1/Page1'
import Page2 from './pages/Page2/Page2'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
