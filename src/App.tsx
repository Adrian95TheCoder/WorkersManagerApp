import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Navigation } from "./components/Navigation";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { EmployeeList } from "./pages/EmployeeList";
import { EmployeeDetails } from "./pages/EmployeeDetails";
import { AddEmployee } from "./pages/AddEmployee";
import { Login } from "./pages/Login";
import { EmployeePovider } from "./components/context/EmployeeContext";
import { UserProvider } from "./components/context/UserContext";
function App() {
  return (
    <UserProvider>
      <EmployeePovider>
        <>
          <Navigation />
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/employees" element={<EmployeeList />} />
              <Route path="/employees/addEmployee" element={<AddEmployee />} />
              <Route path="/login" element={<Login />} />
              <Route path="/employees/:id" element={<EmployeeDetails />} />   
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </>
      </EmployeePovider>
    </UserProvider>
  );
}

export default App;
