import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Profile from "./component/Profile";
import Signup from "./component/Signup";
import EmptyPage from "./component/EmptyPage";
import Main from "./component/Main";
import Login from "./component/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          {/* Base */}
          <Route path="/main" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/empty_page" element={<EmptyPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign_up" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
