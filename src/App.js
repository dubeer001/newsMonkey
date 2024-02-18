import "./App.css";
import React, { useState } from "react";
import News from "./components/News";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
function App() {
  const [mode, setMode] = useState("light");

  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_MONKEY_API;

  const [progress, setProgress] = useState(0);

  return (
    <>
      <div>
        <Router>
          <NavBar
            mode={mode}
            // toggleMode={toggleMode}
            // toggMode={toggMode}
            
          />
          <LoadingBar height={3} color="#f11946" progress={progress} />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="genral"
                  pageSize={pageSize}
                  country="in"
                  category="Business"
                />
              }
            />

            <Route
              exact
              path="/Business"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="Business"
                  pageSize={pageSize}
                  country="in"
                  category="Business"
                />
              }
            />

            <Route
              exact
              path="/Entertainment"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="Entertainment"
                  pageSize={pageSize}
                  country="in"
                  category="Entertainment"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="general"
                  pageSize={pageSize}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="health"
                  pageSize={pageSize}
                  country="in"
                  category="health"
                />
              }
            />

            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="science"
                  pageSize={pageSize}
                  country="in"
                  category="science"
                />
              }
            />

            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="sports"
                  pageSize={pageSize}
                  country="in"
                  category="sports"
                />
              }
            />

            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="technology"
                  pageSize={pageSize}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}
export default App;
//   /Dark mode
//   const toggleMode=()=>{
// if(mode==='dark')
// {
//   setMode('light');
//  document.body.style.backgroundColor = "white`";
// }else
// setMode('dark');
// document.body.style.backgroundColor = "grey";

//   }

//   //Pink
//   const togglMode=()=>{
// if(mode==='dark')
// {
//   setMode('light');
//   document.body.style.backgroundColor='white';
// }else
// setMode('dark');
// document.body.style.backgroundColor='pink';

//   }

// //blue
// const toggMode=()=>{
//   if(mode==='dark')
//   {
//     setMode('light');
//     document.body.style.backgroundColor='white';
//   }else
//   setMode('dark');
//   document.body.style.backgroundColor='skyblue';

//     }
