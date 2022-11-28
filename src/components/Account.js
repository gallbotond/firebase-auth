import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { SensorDataContext } from "../context/DataContext";

export default function Account() {
  const { user, logout2 } = UserAuth();
  const { sensors } = SensorDataContext();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [renderSensors, setRenderSensors] = useState([]);

  useEffect(() => {
    setRenderSensors(sensors)
  }, [])

  const handleLogout = async () => {
    try {
      await logout2;
    } catch (e) {
      console.log(e.message);
    }
    navigate("/");
  };

  const handleSubmit = () => {};

  return (
    <div>
      <h1>Account</h1>
      <p>Email: {user && user.email}</p>

      <button onClick={logout2}>Logout</button>

      <h2>Add Sensor</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name </label>
          <input
            onChange={(e) => setName(e.target.value)}
            autoComplete=""
            type="text"
          />
        </div>
        <div>
          <label>Type </label>
          <input
            onChange={(e) => setType(e.target.value)}
            autoComplete=""
            type="text"
          />
        </div>
        <button type="submit">Add Sensor</button>
      </form>

      <h2>Sensors</h2>
      {renderSensors.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}
