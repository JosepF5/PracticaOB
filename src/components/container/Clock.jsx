import React, { useEffect, useState } from "react";

const Clock = (props) => {
  const [time, setTime] = useState(new Date());

  let value = {
   fecha: time,
   edad: 0,
   nombre: "‘Martín’",
   apellidos: "‘San José’",
 };

  const [valor,setValor]=useState(value);
  

  useEffect(() => {
    console.log("Componente creado");

    const intervalID = setInterval(() => {
      setValor((prevState) => {
        let edad = prevState.edad + 1;
        return {
          ...prevState,
          fecha: time,
          edad,
        };
      });
    }, 1000);

    return () => {
      console.log("Componente va a desaparecer");
      document.title = "Tiempo detenido";
      clearInterval(intervalID);
    };
  }, []);

  return (
    <div>
      <h2>
        Hora Actual:
        {valor.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {valor.nombre} {valor.apellidos}
      </h3>
      <h1>Edad: {valor.edad}</h1>
    </div>
  );
};
export default Clock;
