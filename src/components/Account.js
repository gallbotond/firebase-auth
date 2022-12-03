import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { SensorDataContext } from "../context/DataContext";
import Sensor from "./Sensor";

export default function Account() {
  const { user, logout2 } = UserAuth();
  const { sensors, addSensor, updateSensorName, deleteSensor } = SensorDataContext();

  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = () => {
    addSensor(name, type);
    // .then(() => {
    //   setName("");
    //   setType("");
    // })
    // .catch((err) => console.log(err.message));
    setName("");
    setType("");
  };

  return (
    <div>
      <h1>Account</h1>
      <p>Email: {user && user.email}</p>

      <button onClick={logout2}>Logout</button>

      <h2>Add Sensor</h2>
      <form>
        <div>
          <label>Name </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete=""
            type="text"
          />
        </div>
        <div>
          <label>Type </label>
          <input
            value={type}
            onChange={(e) => setType(e.target.value)}
            autoComplete=""
            type="text"
          />
        </div>
        <button onClick={handleSubmit}>Add Sensor</button>
      </form>

      <h2>Sensors</h2>
      {sensors.map((item) => (
        <Sensor
          key={item.id}
          id={item.id}
          name={item.name}
          updateSensorName={updateSensorName}
          deleteSensor={deleteSensor}
        />
      ))}
    </div>
  );
}
