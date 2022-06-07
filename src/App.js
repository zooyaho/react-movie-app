import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from './routes/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<Detail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

// App.js는 Router를 render하고, Router는 URL을 보고있는 컴포넌트임.
// Router는 /에 Home컴포넌트 보여주고, /movies/123에 Detail컴포넌트를 보여줌.
// BrowserRouter
// HashRouter : #이 붙음.
