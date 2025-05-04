import { useState } from "react";
import { useEffect } from "react";

let CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("interval has been setup");
    const intervalId = setInterval(() => {
      let newTime = new Date();
      setTime(newTime);
    }, 1000);
    return () => {
      clearInterval(intervalId);
      console.log("cancel the interval");
    };
  }, []);

  return (
    <p className="lead">
      this is the current Time: {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
