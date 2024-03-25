import images from '~/apis/images'
import Home from './home/Home'
import NavBar from '~/components/navBar/navBar'
import Footer from '~/components/footer/Footer'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import ErrorPage from '~/error-page'
import LearnMore from '~/learnMore/LearnMore.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home images={images} />,
    errorElement: <ErrorPage />
  },
  {
    path: '/leanrmore',
    element: <LearnMore />
  }
])

function App() {

  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App
