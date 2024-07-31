import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4 min-h-screen bg-background max-w-full">
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
