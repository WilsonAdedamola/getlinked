import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Rules from "./components/Rules";
import Criteria from "./components/Criteria";
import Faq from "./components/Faq";
import Timeline from "./components/Timeline";
import Prizes from "./components/Prizes";
import Partners from "./components/Partners";
import Policy from "./components/Policy";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import SuccessModal from "./pages/SuccessModal";

// const AppLayout = () => (
//   <>
//     <Navbar />
//     <Outlet />
//   </>
// );

function Home() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <Introduction />
      <Rules />
      <Criteria />
      <Faq />
      <Timeline />
      <Prizes />
      <Partners />
      <Policy />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

const router = createBrowserRouter([
  // {
  //   element: <AppLayout />,
  //   children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "register",
        element: <Register />,
      },
    // ],
  // },
]);

export default App;
