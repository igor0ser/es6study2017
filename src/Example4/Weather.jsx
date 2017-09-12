import React from 'react';

const Weather = ({
  name, weather, main: { temp_min, temp_max }
}) => (
    <div style={{ margin: 20 }}>
        <strong>{name}</strong>
        : {weather[0].description}, {temp_min} - {temp_max} °C
    </div>
);

export default Weather;
