import {BrowserRouter} from "react-router-dom";
import NavBar from './components/NavBar';
import ApiRouter from "./components/ApiRouter";

function App() {
  return (
    <BrowserRouter>
        <NavBar/>
      <ApiRouter/>
    </BrowserRouter>
  );
}

export default App;
