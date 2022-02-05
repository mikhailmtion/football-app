import { Route, Routes } from "react-router";
import Competition from "./pages/Competition";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import TeamPage from "./pages/TeamPage";



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/competition:id" element={<Competition/>} />
      <Route path="/team:id" element={<TeamPage/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
