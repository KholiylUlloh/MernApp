import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Add from "./pages/add";
import Main from "./pages/main";
import Update from "./pages/update";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <div className="raw">
          <div className="col-lg-8 offset-lg-2">
            <Routes>
              <Route path="/" exact element={<Main/>}></Route>
              <Route path="/add" element={<Add />}></Route>
              <Route path="/update/:id" element={<Update />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
