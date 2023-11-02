import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'
import App from './app.jsx'
import Portfolio from './components/Portfolio.jsx';
import About from './pages/About.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Portfolio />
      },
      {
        path: '/About',
        element: <About />
      },
//       {
//         path: '/Projects',
//         element: <Project />
//       },
//       {
//         path: '/Contact',
//         element: <Contact />
//       },
//       {
//         path: '/Resume',
//         element: <Resume />
//       }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  // <App />
)
