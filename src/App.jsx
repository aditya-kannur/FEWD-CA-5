import "./App.css";
import NavBar from "./Component/NavBar";
import { BrowserRouter} from "react-router-dom";
import AllRoutes from "./AllRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <AllRoutes/>
      </BrowserRouter>
    </>
  );
}

export default App;
