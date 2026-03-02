import { useState } from "react";
import Movies from "./components/movies";
import Navigation from "./templates/snipets/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./templates/snipets/footer";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navigation />
      <Movies />
      <Footer />
    </>
  );
};

export default App;
