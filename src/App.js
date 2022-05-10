import { BrowserRouter, Routes, Route } from "react-router-dom";
import TimeTrack from "./Time_Tracking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TimeTrack />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
