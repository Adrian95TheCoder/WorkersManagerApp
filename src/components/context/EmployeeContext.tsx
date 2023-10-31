import { createContext, ChangeEvent, FormEvent } from "react";
import { useEmployees } from "../Hooks/useEmployees";

export type employeeListType = {
  id: number;
  firstName: string;
  lastName: string;
  workplace: string;
  age: number;
};

type EmployeeContextProps = {
  employeeList: employeeListType[];
  count: number;
  newFirstName: string;
  newLastName: string;
  setNewFirstName: React.Dispatch<React.SetStateAction<string>>;
  setNewLastName: React.Dispatch<React.SetStateAction<string>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setEmployeeList: React.Dispatch<React.SetStateAction<employeeListType[]>>;
  getWorkers: () => Promise<void>;
  addEmployeer: () => Promise<any>;
  handleSubmitEmployee: (event: FormEvent<HTMLFormElement>) => void;
  handleLastName: (event: ChangeEvent<HTMLInputElement>) => void;
  handleFirstName: (event: ChangeEvent<HTMLInputElement>) => void;
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
    newFirstName,
    newLastName,
    setNewFirstName,
    setNewLastName,
    setCount,
    setEmployeeList,
    getWorkers,
    addEmployeer,
    handleSubmitEmployee,
    handleLastName,
    handleFirstName,
  } = useEmployees();

  return (
    <EmployeeContext.Provider
      value={{
        employeeList,
        count,
        newFirstName,
        newLastName,
        setNewFirstName,
        setNewLastName,
        setCount,
        setEmployeeList,
        getWorkers,
        addEmployeer,
        handleSubmitEmployee,
        handleLastName,
        handleFirstName,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
