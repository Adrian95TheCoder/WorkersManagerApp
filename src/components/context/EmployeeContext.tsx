import { createContext, ChangeEvent, FormEvent } from "react";
import { useEmployees } from "../Hooks/useEmployees";

export type employeeListType = {
  id: number;
  firstName: string;
  lastName: string;
  workplace: string;
  age: number;
  // new
  gender: string;
  email: string;
  phone: string;
  birthDate: string;
  address: string;
  city: string;
  postalCode: string;
  state: string;
  startWork: string;
};

type EmployeeContextProps = {
  employeeList: employeeListType[];
  count: number;
  newEmployeeInputValue: {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    workplace: string;
     // new
    gender: string;
    email: string;
    phone: string;
    birthDate: string;
    address: string;
    city: string;
    postalCode: string;
    state: string;
    startWork: string;
  };
  inputValue: string;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setEmployeeList: React.Dispatch<React.SetStateAction<employeeListType[]>>;
  getWorkers: () => Promise<void>;
  addEmployee: () => Promise<any>;
  editEmployee: (employee: employeeListType) => Promise<void>;
  setNewInputValue: React.Dispatch<React.SetStateAction<employeeListType>>;
  deleteButton: (employeeId: number) => Promise<void>;
  handleInputValue: (event: ChangeEvent<HTMLInputElement>) => void;
  handleNewEmployee: (
    event: FormEvent<HTMLFormElement>,
    userId: number
  ) => void;
  handleEditEmployee: (
    event: FormEvent<HTMLFormElement>,
    employee: employeeListType,
  ) => void;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  handleInputSearch: (event: ChangeEvent<HTMLInputElement>) => void;
};

type EmployeeProviderProps = {
  children: JSX.Element;
};

export const EmployeeContext = createContext<EmployeeContextProps>(
  {} as EmployeeContextProps
);

export const EmployeePovider = ({ children }: EmployeeProviderProps) => {
  const {
    employeeList,
    count,
    setCount,
    setEmployeeList,
    getWorkers,
    addEmployee,
    editEmployee,
    deleteButton,
    handleInputValue,
    handleNewEmployee,
    handleEditEmployee,
    setNewInputValue,
    newEmployeeInputValue,
    inputValue, 
    setInputValue, 
    handleInputSearch,
  } = useEmployees();

  return (
    <EmployeeContext.Provider
      value={{
        employeeList,
        count,
        newEmployeeInputValue,
        setCount,
        setEmployeeList,
        getWorkers,
        addEmployee,
        editEmployee,
        deleteButton,
        handleInputValue,
        handleNewEmployee,
        handleEditEmployee,
        setNewInputValue,
        inputValue, 
        setInputValue, 
        handleInputSearch,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
