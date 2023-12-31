import { 
  createBrowserRouter, 
  Route,
  createRoutesFromElements, 
  RouterProvider
} from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Faq from './pages/help/Faq'
import Contact from './pages/help/Contact'
import NotFound from './NotFound'
import Careers from './pages/help/careers/Careers'

// layouts
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import { careersLoader } from './pages/help/careers/Careers'
import CareerDetails, { careerDetailsLoader } from './pages/help/careers/CareerDetails'
import CareersLayout from './layouts/CareersLayout'
import CareersError from './pages/help/careers/CareersError'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route 
        path="careers" 
        element={<CareersLayout />}
        errorElement={<CareersError />} 
      >
        <Route 
          index 
          element={<Careers />} 
          loader={careersLoader}
        />
        <Route 
          path=':id'
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Route>
  )
)


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
