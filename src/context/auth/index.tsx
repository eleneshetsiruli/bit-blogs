import { createContext } from "react";

interface AuthContextType {
  user: string | undefined;
  handleSetUser: (user: string) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

// interface AuthProviderProps {
//   children: ReactNode;
// }

// export const AuthProvider = ({ children }: AuthProviderProps) => {
//   const [user, setUser] = useState<string | undefined>(undefined);

//   const handleSetUser = (user: string) => {
//     setUser(user);
//   };
//   return (
//     <AuthContext.Provider value={{ user, handleSetUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
