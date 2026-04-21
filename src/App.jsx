/* 
  === DiseasePage ===
  page 상태 관리
  scrappedIds 상태 관리
  DiseasePage에 스크랩 상태 넘기기
  ScrapPage에 disease 데이터 + 스크랩 상태 넘기기
*/


import React, {useState} from "react";

import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import DiseasePage from "./pages/DiseasePage";
import ScrapPage from "./pages/ScrapPage";
import diseases from "./data/diseases";

import Footer from "./components/Footer";

import "./App.css";


/*
  page ) 현재 화면 이름 저장 (main / disease / scrap)
  setPage ) 화면 이름을 바꾸는 함수 (MainPage / Diseasepage / ScrapPage)
*/
function App() {
  // 기본 화면은 Mainpage (main) 로
  const [page, setPage] = useState("main");

  /* 스크랩 관리 */
  const [scrappedIds, setScrappedIds] = useState([]);

  const handleToggleScrap = (id) => {
    setScrappedIds((prev) =>
      prev.includes(id)
      ? prev.filter((item) => item !== id)
      : [...prev, id]
    );
  };

  // =======================================

  return (
    <div>
      
      {/* const [page, setPage] */}
      <Header page={page} setPage={setPage} />

      {page === "main" && <MainPage />}

      {page === "disease" && (
        <DiseasePage
          scrappedIds = {scrappedIds}
          onToggleScrap = {handleToggleScrap}
        />
      )}

      {page === "scrap" && (
        <ScrapPage
          diseases = {diseases}
          scrappedIds = {scrappedIds}
          onToggleScrap = {handleToggleScrap}
        />
      )}

        <Footer />
    </div>
  )
}

export default App;
