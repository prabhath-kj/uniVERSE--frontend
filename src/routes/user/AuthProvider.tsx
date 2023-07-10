import { useSelector } from "react-redux";
import Login from "../../pages/userComponents/Login";
import {ReactNode} from "react"
import { RootState } from "../../state/rooState";

interface AuthProviderProps {
  children: ReactNode
}

const AuthProvider = ({ children }:AuthProviderProps) => {
  const isAuth = Boolean(useSelector((state: RootState) => state.user.token));

  return (
    <>
      {!isAuth && <Login />}
      {children}
    </>
  );
};

export default AuthProvider;
