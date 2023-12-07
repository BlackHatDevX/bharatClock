import { useEffect, useState } from "react";

const Time = () => {
  const [d, setD] = useState(new Date());
  useEffect(() => {
    const intervalID = setInterval(() => {
      setD(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <>
      <p className="lead ">
        This is the current time:
        {d.toLocaleDateString() + " " + d.toLocaleTimeString()}
      </p>
    </>
  );
};

export default Time;
