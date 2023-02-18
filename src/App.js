import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import AddSales from "./screens/AddSales";
import Total from "./screens/Total";
import TopSales from "./screens/TopSales";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/addSales" element={<AddSales />} />
        <Route path="/topSales" element={<TopSales />} />
        <Route path="/total" element={<Total />} />
      </Routes>
    </Router>
  );
};

export default App;
