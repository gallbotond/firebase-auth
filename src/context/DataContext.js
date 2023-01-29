import { collectionReference, db } from "../firebase";
import { addDoc, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [sensors, setSensors] = useState([]);

  const getSensors = async () => {
    const data = await getDocs(collectionReference);
    setSensors(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getSensors();
  }, []);

  const addSensor = async (name, type) => {
    addDoc(collectionReference, {
      name,
      type,
    });
  };

  const updateSensorName = async (id, newName) => {
    const sensorDoc = doc(db, "sensors", id);
    const newFields = { name: newName };
    await updateDoc(sensorDoc, newFields);
  };

  const deleteSensor = async (id) => {
    const sensorDoc = doc(db, "sensors", id);
    await deleteDoc(sensorDoc);
  };

  return (
    <DataContext.Provider value={{ sensors, addSensor, updateSensorName, deleteSensor }}>
      {children}
    </DataContext.Provider>
  );
};

export const SensorDataContext = () => {
  return useContext(DataContext);
};
