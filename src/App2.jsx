import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import React, { lazy,Suspense} from "react";
const Dashboard = lazy(() => import("./components/Dashboard"));
const Home = lazy(() => import("./components/Home"));
import Count from "./components/Count";

function App2() {
  return (
    <div>
      <BrowserRouter>
        <Navigate />
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={"loading.."}>
                <Dashboard />{" "}
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <Suspense fallback={"loading.."}>
                <Home />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>


      <Count/>
    </div>
  );
}
function Navigate() {
  const Navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          Navigate("/");
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          Navigate("/dashboard");
        }}
      >
        Dashboard
      </button>
    </div>
  );
}

export default App2;
