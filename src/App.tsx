import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;

{/* <Router>
    <Routes>
      

      <Route path="/" element={<Navigate to={ AppPath.login} replace />} />
    </Routes>
    </Router> */}