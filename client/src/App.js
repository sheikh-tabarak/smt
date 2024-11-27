import { Navigate, Route, Routes } from "react-router";
import 'react-toastify/dist/ReactToastify.css';
import UIDocumentation from "./pages/ui-documentation";
import { Zoom, ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Navigate to="/ui#installation" replace />} />
        <Route path="/ui" element={<UIDocumentation />} />


      </Routes>

      <ToastContainer
        className={'rounded-full'}
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="colored"
        transition={Zoom}
      />

    </>
  );
}

export default App;
