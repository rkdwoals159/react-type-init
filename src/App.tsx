import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestPage from "./pages/Main";
import ApiPage from "./pages/Api";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestPage />}></Route>
        <Route path="/api/*" element={<ApiPage />}></Route>
        {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
