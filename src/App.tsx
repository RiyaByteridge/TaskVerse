import "./App.css";
import { useAxios } from "./hooks";
import { API_ENDPOINT } from "./services/apiEndpoints";
function App() {

  useAxios({url:API_ENDPOINT.products.getAllProducts,method:"GET"})
  return (<></>);
}

export default App;
