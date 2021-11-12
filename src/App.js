import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import NewsDetail from "./pages/NewsDetail";
import NewsList from "./pages/NewsList";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/registration" exact element={<Registration />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/" exact element={<NewsList />} />
          <Route path="/newsdetail/:id" exact element={<NewsDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
