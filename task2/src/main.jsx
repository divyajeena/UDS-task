import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DataTable from './components/ui/DataTable.jsx'
import DataTableDemo from './components/ui/DataTableDemo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataTableDemo />
  </StrictMode>,
)
