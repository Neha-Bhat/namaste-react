import React from "react";
import ReactDOM  from "react-dom/client";
import Header from './components/Header';
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, RouterProvider } from "react-router";
import Contact from "./components/Contact";
import Error from "./components/Error";

function truncateText(str, maxLength) {
  return  str.length > maxLength ? str.slice(0, maxLength)+('...') : str
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            {/* <Footer /> */}
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/contact',
        element: <Contact />
    },
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />
    }
])

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<RouterProvider router={appRouter} />)