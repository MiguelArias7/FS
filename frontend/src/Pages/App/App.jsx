import "./App.css";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { WhoAreWe } from "../WhoAreWe";
import { NotFound } from "../NotFound";
import { Register } from "../Register";
import { Login } from "../Login";
import ScrollToTop from "../../components/ScrollToTop";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/footer";
import { Profile } from "../Profile";
import { useDataUser } from "../../components/useDataUser";

function App() {
  let { dataLogin, loadingLogin, saveLogin, deleteLogin } = useDataUser();

  const visibleRoutes = [
    {
      path: "/",
      name: "Who are we?",
      element: <WhoAreWe></WhoAreWe>,
    },
    {
      path: "/register",
      name: "Register",
      element: <Register></Register>,
    },
    {
      path: "/login",
      name: "Login",
      element: <Login saveLogin={saveLogin}></Login>,
    },
  ];

  const otherRoutes = [
    {
      path: "*",
      element: <NotFound></NotFound>,
      name: "Not found",
    },
    {
      path: "/profile",
      name: "Profile",
      element: <Profile dataLogin={dataLogin} loadingLogin={loadingLogin} deleteLogin={deleteLogin}></Profile>,
    },
  ];

  function AppRoutes() {
    return useRoutes([...visibleRoutes, ...otherRoutes]);
  }

  return (
    <div
      className="min-h-screen   
      font-roboto      
      flex
      flex-col
      bg-primaryAriadna
      scroll-smooth"
    >
      <div>
        <BrowserRouter>
          <Navbar rutas={visibleRoutes}></Navbar>
          <AppRoutes />
          <ScrollToTop />
        </BrowserRouter>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
