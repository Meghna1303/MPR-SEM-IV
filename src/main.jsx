import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import ArtisanPage from './components/Artisan/ArtisanPage.jsx'
import Topsection from './components/Header/Topsection/Topsection.jsx'
import CustomerPage from './components/Customer/CustomerPage.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Topsection />} />
      <Route path="artisan" element={<ArtisanPage />} />
      <Route path="customer" element={<CustomerPage/>}/>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>  
  </StrictMode>,
)