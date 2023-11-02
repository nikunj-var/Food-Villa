import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState("0");
  useEffect(() => {
    console.log("render");
    const timer = setInterval(() => {
      console.log("calling mount");
    }, 1000);
    // unmounting phase
    return () => {
      clearInterval(timer);
      console.log("useeffect return");
    };
  }, []);
  return (
    <div>
      <h1>---Functional----</h1>
      <h2>Profile Component</h2>
      <h1>{props.name}</h1>
      <h3>Count : {count}</h3>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};
export default Profile;
