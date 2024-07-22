import { useEffect, useRef, useState } from "react";

export default function useTimeCount(timeMax){
    const timerRef = useRef(null); // Usar useRef para almacenar el temporizador
    const [counterActive, setCounterActive] = useState(true);
    const [time, setTime] = useState(timeMax);

    useEffect(() => {
        if (counterActive) {
          timerRef.current = setInterval(() => {
            setTime((prevTime) => {
              if (prevTime === 0) {
                clearInterval(timerRef.current);
                setCounterActive(false);
                return 0; // Asegúrate de no seguir disminuyendo
              }
              return prevTime - 1;
            });
          }, 1000);
    
          return () => clearInterval(timerRef.current);
        }
      }, [counterActive]);

    return time
}