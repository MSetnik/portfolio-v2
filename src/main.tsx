import * as React from 'react';
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './router/index.tsx'
import './App.css'
import './styles/typography.css'
import "react/jsx-runtime"


createRoot(document.getElementById('root')!).render(
   
  <RouterProvider router={router}/>
)
