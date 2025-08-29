import React, { lazy, Suspense } from "react";
import ReactDOM  from "react-dom/client";
import Header from './components/Header';
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Contact from "./components/Contact";
import Error from "./components/Error";
// import RestaurantMenu from "./components/RestaurantMenu";

function truncateText(str, maxLength) {
  return  str.length > maxLength ? str.slice(0, maxLength)+('...') : str
}

const RestaurantMenu = lazy(() => import("./components/RestaurantMenu")); //lazy loading

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
            {/* <Footer /> */}
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurants/:resId',
                element: <Suspense fallback={<h1>Loading the component...</h1>}><RestaurantMenu /></Suspense>
            }
        ],
        errorElement: <Error />
    }
])

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<RouterProvider router={appRouter} />)