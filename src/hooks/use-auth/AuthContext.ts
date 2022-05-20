import { createContext } from "react";
import IUser from "./IUser";

interface IAuthContext {
  user: IUser | undefined;
  setUser: (user: IUser) => void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export default AuthContext;
