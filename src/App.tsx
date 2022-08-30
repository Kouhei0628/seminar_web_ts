import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route
            path={`*`}
            element={
              <NotWrap>
                <div>
                  <h2 style={{ textAlign: "center", color: "white" }}>
                    404 Page Not Found
                  </h2>
                </div>
              </NotWrap>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

const NotWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
