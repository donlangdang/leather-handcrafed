import React from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Container from '@mui/material/Container'
import ErrorPage from '~/error-page'
import LearnMore from '~/learnMore/LearnMore.jsx'
import App from '~/App.jsx'
import theme from '~/theme.js'
import Home from '~/home/Home.jsx'
import AboutUs from '~/aboutUs/AboutUs.jsx'
import Contact from './contact/Contact'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    // dùng <Outlet /> component ở bên main.jsx để giống như các phần giữ chỗ để khi chuyển hướng tới các path khác thì <Outlet /> sẽ render ra path đó
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/leanrmore',
        element: <LearnMore />
      },
      {
        path: '/aboutus',
        element: <AboutUs />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth='xxl' disableGutters={true}>
        <RouterProvider router={router} />
      </Container>
    </CssVarsProvider>
  </React.StrictMode>
)
