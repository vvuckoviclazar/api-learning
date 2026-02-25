import { useState } from "react";
import Movies from "./components/movies";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Movies />
    </>
  );
};

export default App;
