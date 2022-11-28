import { collectionReference } from "../firebase";
import { getDocs } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [sensors, setSensors] = useState([]);

  useEffect(() => {
    getDocs(collectionReference)
      .then((snapshot) => {
        let newSensors = sensors;
        snapshot.docs.forEach((doc) => {
          newSensors.push({ ...doc.data(), id: doc.id });
        });
        setSensors(newSensors);
        // console.log(sensors);
      })
      .catch((err) => console.log(err.message));
  }, [sensors]);

  return (
    <DataContext.Provider value={{ sensors }}>{children}</DataContext.Provider>
  );
};

export const SensorDataContext = () => {
  return useContext(DataContext);
};
