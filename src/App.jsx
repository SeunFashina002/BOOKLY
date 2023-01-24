import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import './App.css'
import Home from "./pages/Home";

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootLayout/>}
      >
        <Route index element={<Home/>}/>
        
      </Route>
    )
  )


function App() {

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
