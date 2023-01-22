import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/NavBar";
import HomePage from "./pages/HomePage";
import NewPost from "./pages/NewPost";
import Accounts from "./pages/Accounts";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="new-post" element={<NewPost />}/>
        <Route path="accounts" element={<Accounts/>}/>
      </Routes>
    </div>
  );
}

export default App;
