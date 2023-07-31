import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { routes } from './routes/Approutes'
import NavigationItems from './components/NavigationItems'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <NavigationItems items={['Flights', 'Hotels', 'Sign-In']} />
    <RouterProvider router={routes} />
  </>
)
