import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ArticlesListPage from "./pages/ArticlesListPage";
import ArticlePage from "./pages/ArticlePage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="page-body">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
          {/* path with url parameter ("name") */}
        <Route path="/article/:name" element={<ArticlePage />} />
        <Route path="/articles" element={<ArticlesListPage />} />
        <Route  element={<NotFoundPage />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;




