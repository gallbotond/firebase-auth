import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // console.log(user);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const logout2 = () => {
    signOut(auth)
      // .then(() => console.log("after logout", user))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log(user);
    });
    return () => unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ createUser, user, logout, logout2, signIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
