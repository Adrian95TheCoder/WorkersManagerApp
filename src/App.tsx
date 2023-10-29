import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Navigation } from "./components/Navigation";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { EmployeeList } from "./pages/EmployeeList";
import { EmployeeDetails } from "./pages/EmployeeDetails";
import { useEffect } from "react";
import { AddEmployee } from "./pages/AddEmployee";

function App() {
  const getWorkers = async () => {
    try {
      const data = await fetch("http://localhost:5000/workers");
      if (!data.ok) throw new Error("Something goes wrong");
      const workers = await data.json();
      console.log(workers, " pobrano dane pracownika");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWorkers();
  }, []);
  return (
    <>
      <Navigation />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/employees/addEmployee" element={<AddEmployee />} />
          <Route path="/employees/:id" element={<EmployeeDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
