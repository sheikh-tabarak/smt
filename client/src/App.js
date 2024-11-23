import { Navigate, Route, Routes } from "react-router";
import UIDocumentation from "./ui-documentation";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/ui#installation" replace />} />
      <Route path="/ui" element={<UIDocumentation />} />
    </Routes>
  );
}

export default App;
