import { useState } from "react";
import ChildDay from "./Child"

const ParentDay15B = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  console.log("Re-Render ParentDay15B");
  return (
    <div>
      <input
        type="text"
        value={name}
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <p onClick={() => setCounter((val) => val + 1)}>Counter: {counter}</p>
      <ChildDay />
      <ChildDay count={counter} />
      <ChildDay />
      <ChildDay />
      <ChildDay />
    </div>
  );
};

export default ParentDay15B;
