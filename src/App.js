import { Routes, Route, Navigate } from "react-router-dom";
import Account from "./components/Account";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { UserAuth } from "./context/AuthContext";
import { DataContextProvider } from "./context/DataContext";

function App() {
  const { user } = UserAuth();

  return (
    <Routes>
      <Route path={"/"} element={<Signin />} />
      <Route path={"/signup"} element={<Signup />} />
      <Route
        path={"/account"}
        element={
          user ? (
            <DataContextProvider>
              <Account />
            </DataContextProvider>
          ) : (
            <Navigate to="/" />
          )
        }
      />
    </Routes>
  );
}

export default App;
