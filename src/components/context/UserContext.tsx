import {
  ChangeEvent,
  createContext,
  FormEvent,
  JSX,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

type UserType = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
};

type UserContextType = {
  users: UserType[];
  loginInput: {
    username: string;
    password: string;
  };
  token: string;
  error: boolean;
  handleLoginInput: (event: ChangeEvent<HTMLInputElement>) => void;
  handleLogin: (event: FormEvent<HTMLFormElement>) => void;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
};

type UserProviderProps = {
  children: JSX.Element;
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [loginInput, setLoginInput] = useState({
    username: "kminchelle",
    password: "0lelplR",
  });
  const [token, setToken] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const getUsers = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users");

      if (!response.ok)
        throw new Error("Something went wrong while fetching data");

      const { users } = await response.json();
      setUsers(users);

      return users;
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

  const login = async (username: string, password: string) => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!response.ok) {

        setError(true);
        loginInput.username = "";
        loginInput.password = "";

      } else {

        const data = await response.json();
        setToken(data.token);        
        navigate("/employees");
      }
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

  const handleLoginInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setError(false);
    setLoginInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(loginInput.username, loginInput.password);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UserContext.Provider
      value={{
        users,
        loginInput,
        token,
        error,
        handleLoginInput,
        handleLogin,
        setToken,
        setError,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
