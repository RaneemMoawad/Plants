import './App.css';
import { Fragment } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route/>
    </Route>
  )
);


function App() {
  return (
    <Fragment>
      <RouterProvider router={routes}/>

    </Fragment>
  );
}

export default App;
