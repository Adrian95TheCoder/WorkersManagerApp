import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Navigation } from "./components/Navigation";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { EmployeeList } from "./pages/EmployeeList";
import { EmployeeDetails } from "./pages/EmployeeDetails";
import { useEffect } from "react";

function App() {
  return (
    <>
      <Navigation />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/employees/:id" element={<EmployeeDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
