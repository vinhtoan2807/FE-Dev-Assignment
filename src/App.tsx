import React, { Suspense } from "react";
import "./assets/scss/styles.scss";
import Header from "./layout/Header/Header";
import Notification from "./pages/Notification/Notification";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <div className="page-home">
          <Header />
          <Routes>
            <Route
              path="/notification"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Notification />
                </Suspense>
              }
            />
            <Route
              index
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Notification />
                </Suspense>
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
