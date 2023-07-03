import { useSelector } from "react-redux";
import Login from "../pages/userCOmponents/Login";

interface RootState {
  token: string;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const isAuth = Boolean(useSelector((state: RootState) => state.token));

  return (
    <>
      {!isAuth && <Login />}
      {children}
    </>
  );
};

export default AuthProvider;
