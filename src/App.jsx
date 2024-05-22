import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavCollapse } from "./components/Navbar";
import { removeOpenAuth, removeOpenBubble, removeOpenNav, removeOpenSidebar } from "./app/features/basicSlice";
import { AsideBtn, AsideCollapse, AsideMain } from "./components/Sidebar";
import usePath from "./hooks/usePath";
import { Breadcrumb } from "./components/Components";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { dark } = useSelector((state) => state.basic);
  const dispatch = useDispatch();
  const { openNav, openSidebar, openBubble, openAuth } = useSelector((state) => state.basic);
  const { path } = usePath();
  const handleClick = () => {
    if (openNav) dispatch(removeOpenNav());
    if (openSidebar) dispatch(removeOpenSidebar());
    if (openBubble) dispatch(removeOpenBubble());
    if (openAuth) dispatch(removeOpenAuth());
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (openNav) dispatch(removeOpenNav());
      if (openSidebar) dispatch(removeOpenSidebar());
      if (openBubble) dispatch(removeOpenBubble());
      if (openAuth) dispatch(removeOpenAuth());
    });
  }, [dispatch, openNav, openSidebar, openBubble, openAuth]);

  return (
    <div className={`${dark ? "bg-slate-800 text-white" : "bg-white"} text-gray-700`}>
      <Header />
      <NavCollapse />
      <main onClick={handleClick} className="min-h-screen">
        {path[1] ? (
          <div className="px-3 mt-2 lg:px-12 grid items-start gap-1 grid-cols-1 sm:grid-cols-4 lg:grid-cols-6">
            <AsideCollapse />
            <AsideMain className={`col-span-1 sticky top-16`} />
            <div className="col-span-1 sm:col-span-3 lg:col-span-5">
              <div className="flex capitalize gap-2">
                <AsideBtn />
                {path[1] && path[1]}
              </div>
              <div>
                <Breadcrumb />
                <Outlet />
              </div>
            </div>
          </div>
        ) : (
          <Outlet />
        )}
      </main>
      <Footer />
      <Toaster />
      <ScrollRestoration />
    </div>
  );
};

export default App;
