import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";

import { useTheme } from "./theme/useTheme";
import { className } from "./helpers/className";

import "./styles/index.css";

import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={className("app", { hovered: true }, [theme, "cl1", "cl2"])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={"/"}>Main Page</Link>
      <Link to={"/about"}>About Page</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
