import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import './App.css'

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootLayout/>}
      >
        
      </Route>
    )
  )


function App() {

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
