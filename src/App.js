import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import './App.css';
import { Fragment, useEffect } from 'react';
import Layout from './Layout/layout';
import Home from './Components/home';
import About from './Components/about';
import Products from './Components/products';
import Faqs from './Components/faqs';
import Contact from './Components/contact';
import 'aos/dist/aos.css';  
import AOS from 'aos';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // مدة الأنيميشن
      once: true, // الأنيميشن يحدث مرة واحدة فقط
    });
  }, []);

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index  element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/faqs' element={<Faqs />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    )
  );

  return (
    <Fragment>
      <RouterProvider router={routes} />
    </Fragment>
  );
}

export default App;
