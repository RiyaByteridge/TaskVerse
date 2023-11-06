import "./App.css";
// import { LoginScreen } from "./components/LogiScreen";
import {useAxiosHook } from './hooks/index'
import { API_ENDPOINT } from "./services/apiEndpoints";
import { LoginScreen } from "./components/LoginScreen";


function App() {
  useAxiosHook({ url: API_ENDPOINT.products.getAllProducts, method: "GET" });
  return (
    <>
    <LoginScreen />

    </>
  );
}

export default App;

