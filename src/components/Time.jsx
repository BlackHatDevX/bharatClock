const Time = () => {
  const d = new Date();
  let currentTime = d.toLocaleDateString() + " " + d.toLocaleTimeString();
  return (
    <>
      <p className="lead ">This is the current time:{currentTime}</p>
    </>
  );
};

export default Time;
