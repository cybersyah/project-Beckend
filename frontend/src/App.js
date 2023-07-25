import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./Components/AddUser";
import UserList from "./Components/UserList";
import EditUser from "./Components/EditUser";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
