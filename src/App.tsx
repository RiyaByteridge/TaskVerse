import "./App.css";
import { useAxiosHook } from "./hooks";
import { API_ENDPOINT } from "./services/apiEndpoints";
function App() {

  useAxiosHook({url:API_ENDPOINT.products.getAllProducts,method:"GET"})
  return (<></>);
}

export default App;
