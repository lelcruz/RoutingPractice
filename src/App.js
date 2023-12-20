import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Product";
import RootLayout from "./pages/Root";

// const routeDefinition = createRoutesFromElements(
//     <Route>
//     <Route path='/' element={<HomePage/>} />
//     <Route path='/products' element={<ProductPage/>} />
// </Route>
// );

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <RootLayout/>,
            children: [
                {path: '/', element: <HomePage/> },
                {path: '/products', element: <ProductPage/>}
            ]
        },

    ]);

// const router = createBrowserRouter(routeDefinition);

function App() {
  return <RouterProvider
      router={router}/>;
}

export default App;
