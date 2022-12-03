import React, { useState } from "react";

export default function Sensor({ id, name, updateSensorName, deleteSensor }) {
  const [sensorName, setSensorName] = useState(name);

  return (
    <div>
      <button onClick={() => deleteSensor(id)}>X</button>
      <input type="text" onChange={(e) => setSensorName(e.target.value)} />
      <button onClick={() => updateSensorName(id, sensorName)}>
        Change name
      </button>
      {" " + sensorName}
    </div>
  );
}
