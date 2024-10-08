import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*"  element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
};

export default App;
