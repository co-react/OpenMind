import { BrowserRouter, Routes, Route } from "react-router-dom";

import KDH from "./components/kdh/KDH";
import NES from "./components/nes/NES";
import KYE from "./components/kye/KYE";
import KYH from "./components/kyh/KYH";
import PGB from "./components/pgb/PGB";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/kdh" element={<KDH />}></Route>
        <Route path="/nes" element={<NES />}></Route>
        <Route path="/kye" element={<KYE />}></Route>
        <Route path="/kyh" element={<KYH />}></Route>
        <Route path="/pgb" element={<PGB />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
