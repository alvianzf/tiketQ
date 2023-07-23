import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { RouterProvider } from 'react-router'
import { routes } from './routes/Approutes'
import NavigationItems from './components/NavigationItems'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <NavigationItems items={['Flights', 'Hotels', 'Sign-In']} />
    <RouterProvider router={routes} />
  </>
)
