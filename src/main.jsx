import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import ErrorBoundary from "./ErrorBoundary.jsx";
import Home from "./pages/home/Home.jsx";
import Basic from "./pages/basic/Basic.jsx";
import Mern from "./pages/mern/Mern.jsx";
import PublicApi from "./pages/public-api/PublicApi.jsx";
import Html from "./pages/basic/html/Html.jsx";
import Css from "./pages/basic/css/Css.jsx";
import Javascript from "./pages/basic/javascript/Javascript.jsx";
import Php from "./pages/basic/php/Php.jsx";
import Omdbapi from "./pages/public-api/omdbapi/Omdbapi.jsx";
import Jp from "./pages/public-api/jp/Jp.jsx";
import Sisko from "./pages/public-api/sisko/Sisko.jsx";
import Newsapi from "./pages/public-api/newsapi/Newsapi.jsx";
import Fksapi from "./pages/public-api/fksapi/Fksapi.jsx";
import Mdb from "./pages/mern/mdb/Mdb.jsx";
import Mys from "./pages/mern/mys/Mys.jsx";
import Ex from "./pages/mern/express/Ex.jsx";
import Node from "./pages/mern/node/Node.jsx";
import ReactJs from "./pages/mern/react/ReactJs.jsx";
import Ts from "./pages/basic/typescript/Ts.jsx";
import Vscode from "./pages/basic/vscode/Vscode.jsx";
import Vcs from "./pages/basic/vcs/Vcs.jsx";
import Reference from "./pages/home/Reference.jsx";
import SimpleWebpage from "./pages/home/SimpleWebpage.jsx";
import CssTips from "./pages/home/CssTips.jsx";
import JsBasic from "./pages/basic/javascript/jsBasic/JsBasic.jsx";
import JsAdvance from "./pages/basic/javascript/jsAdvance/JsAdvance.jsx";
import JsFunctions from "./pages/basic/javascript/jsFunctions/JsFunctions.jsx";
import JsCases from "./pages/basic/javascript/jsCases/JsCases.jsx";
import JsModule from "./pages/basic/javascript/jsModule/JsModule.jsx";
import Welcome from "./Welcome.jsx";
import NodeFs from "./pages/mern/node/nodemodules/NodeFs.jsx";
import NodeHttp from "./pages/mern/node/nodemodules/NodeHttp.jsx";
import NodeOs from "./pages/mern/node/nodemodules/NodeOs.jsx";
import NodePath from "./pages/mern/node/nodemodules/NodePath.jsx";
import VanillaComponents from "./pages/home/VanillaComponents.jsx";
import { Accordion } from "./pages/home/reactComponents/accordion/Accordion.jsx";
import { Carousel } from "./pages/home/reactComponents/carousel/Carousel.jsx";
import Pagination from "./pages/home/reactComponents/pagination/Pagination.jsx";
import ReactRingkasan from "./pages/mern/react/ReactRingkasan.jsx";
import MiniProjects from "./pages/mini-projects/MiniProjects.jsx";
import Todo from "./pages/mini-projects/todo/Todo.jsx";
import Kamus from "./pages/mini-projects/kamus-mini/Kamus.jsx";
import { UseState } from "./pages/mern/react/hooks/useState/UseState.jsx";
import { UseEffect } from "./pages/mern/react/hooks/useEffect/UseEffect.jsx";
import { UseCallback } from "./pages/mern/react/hooks/useCallback/UseCallback.jsx";
import LifecycleClass from "./pages/mern/react/hooks/lifecycleClass/LifecycleClass.jsx";
import { CustomHook } from "./pages/mern/react/hooks/customHook/CustomHook.jsx";
import UseReducer from "./pages/mern/react/hooks/useReducer/UseReducer.jsx";
import UseContext from "./pages/mern/react/hooks/useContext/UseContext.jsx";
import UseMemo from "./pages/mern/react/hooks/useMemo/UseMemo.jsx";
import JpPost from "./pages/public-api/jp/jpPost/JpPost.jsx";
import JpUser from "./pages/public-api/jp/jpUser/JpUser.jsx";
import JpUserDetail from "./pages/public-api/jp/jpUser/JpUserDetail.jsx";
import JpPostDetail from "./pages/public-api/jp/jpPost/JpPostDetail.jsx";
import { getPosts, getUsers } from "./app/public-api/jpSlice.js";
import { getFakeProducts } from "./app/public-api/fksapiSlice.js";
import FksapiDetail from "./pages/public-api/fksapi/FksapiDetail.jsx";

store.dispatch(getUsers());
store.dispatch(getPosts());
store.dispatch(getFakeProducts());

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorBoundary />}>
      <Route index element={<Welcome />} />
      <Route path="home" element={<Home />}>
        <Route index element={<Reference />} />
        <Route path="reference" element={<Reference />} />
        <Route path="simple-webpage" element={<SimpleWebpage />} />
        <Route path="css-tips" element={<CssTips />} />
        <Route path="vanilla-components" element={<VanillaComponents />} />
        <Route path="react-accordion" element={<Accordion />} />
        <Route path="react-carousel" element={<Carousel />} />
        <Route path="react-pagination" element={<Pagination />} />
      </Route>
      <Route path="basic" element={<Basic />}>
        <Route index element={<Html />} />
        <Route path="html" element={<Html />} />
        <Route path="css" element={<Css />} />
        <Route path="javascript" element={<Javascript />}>
          <Route index element={<JsBasic />} />
          <Route path="jsbasic" element={<JsBasic />} />
          <Route path="jsadvance" element={<JsAdvance />} />
          <Route path="jsfunction" element={<JsFunctions />} />
          <Route path="jscases" element={<JsCases />} />
          <Route path="jsModule" element={<JsModule />} />
          <Route path="jsClses" element={<JsCases />} />
        </Route>
        <Route path="php" element={<Php />} />
        <Route path="vcs" element={<Vcs />} />
        <Route path="vscode" element={<Vscode />} />
        <Route path="typescript" element={<Ts />} />
      </Route>
      <Route path="mern" element={<Mern />}>
        <Route index element={<ReactJs />} />
        <Route path="reactjs" element={<ReactJs />}>
          <Route index element={<ReactRingkasan />} />
          <Route path="react-ringkasan" element={<ReactRingkasan />} />
          <Route path="usestate" element={<UseState />} />
          <Route path="useeffect" element={<UseEffect />} />
          <Route path="usecallback" element={<UseCallback />} />
          <Route path="usememo" element={<UseMemo />} />
          <Route path="usecontext" element={<UseContext />} />
          <Route path="usereducer" element={<UseReducer />} />
          <Route path="custom-hook" element={<CustomHook />} />
          <Route path="lifecycle-class" element={<LifecycleClass />} />
        </Route>
        <Route path="mongodb" element={<Mdb />} />
        <Route path="mysql" element={<Mys />} />
        <Route path="express" element={<Ex />} />
        <Route path="nodejs" element={<Node />}>
          <Route index element={<NodeFs />} />
          <Route path="nodeFs" element={<NodeFs />} />
          <Route path="nodeHttp" element={<NodeHttp />} />
          <Route path="nodeOs" element={<NodeOs />} />
          <Route path="nodePath" element={<NodePath />} />
        </Route>
      </Route>
      <Route path="public-apis" element={<PublicApi />}>
        <Route index element={<Omdbapi />} />
        <Route path="omdbapi" element={<Omdbapi />} />
        <Route path="jsonplaceholder" element={<Jp />}>
          <Route index element={<JpPost />} />
          <Route path="jpposts">
            <Route index element={<JpPost />} />
            <Route path="detail/:id" element={<JpPostDetail />} />
          </Route>
          <Route path="jpusers">
            <Route index element={<JpUser />} />
            <Route path="detail/:id" element={<JpUserDetail />} />
          </Route>
        </Route>
        <Route path="sisko" element={<Sisko />} />
        <Route path="fakestoreapi">
          <Route index element={<Fksapi />} />
          <Route path="detail/:id" element={<FksapiDetail />} />
        </Route>
        <Route path="newsapi" element={<Newsapi />} />
      </Route>
      <Route path="mini-projects" element={<MiniProjects />}>
        <Route index element={<Todo />} />
        <Route path="todo" element={<Todo />} />
        <Route path="kamus-mini" element={<Kamus />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
